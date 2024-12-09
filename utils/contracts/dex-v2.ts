import getPriceFormular from "./getPriceFormular";

interface Props {
  allowedToken: string;
  priceFormula?: string;
}
export function formatDexV2(props: Props) {
  const { allowedToken, priceFormula = getPriceFormular.linearFormula1 } =
    props;

  return `;; constants
(define-constant ERR-UNAUTHORIZED (err u401))
(define-constant ERR-UNAUTHORIZED-TOKEN (err u402))
(define-constant DEX-HAS-NOT-ENOUGH-STX (err u1002))
(define-constant ERR-NOT-ENOUGH-STX-BALANCE (err u1003))
(define-constant ERR-NOT-ENOUGH-TOKEN-BALANCE (err u1004))
(define-constant BUY-INFO-ERROR (err u2001))
(define-constant SELL-INFO-ERROR (err u2002))
(define-constant GET-PRICE-INFO-ERROR (err u2003))
(define-constant ERR-SELL-AMOUNT (err u2004))
(define-constant DEX-ADDRESS (as-contract tx-sender)) ;; one contract per token
(define-constant SWAP_FEE_WALLET '${allowedToken})
(define-constant MAXSUPPLY u2100000000000000)

;; data vars
(define-data-var token-balance uint MAXSUPPLY)
(define-data-var stx-balance uint u0)

;; public functions
(define-public (buy (stx-amount uint) ) 
  (begin
    (asserts! (> stx-amount u0) ERR-NOT-ENOUGH-STX-BALANCE)
    (let (
      (buy-info (unwrap! (get-buyable-token-details stx-amount) BUY-INFO-ERROR))
      (stx-fee (get fee buy-info))
      (stx-after-fee (get stx-buy buy-info))
      (tokens-out (get buyable-token buy-info))
      (new-token-balance (get new-token-balance buy-info))
      (recipient tx-sender)
      (new-stx-balance (+ (var-get stx-balance) stx-after-fee))
    )
      ;; user send stx fee to stxcity
      (try! (stx-transfer? stx-fee tx-sender SWAP_FEE_WALLET))
      ;; user send stx to dex
      (try! (stx-transfer? stx-after-fee tx-sender (as-contract tx-sender)))
      ;; dex send token to user
      (try! (as-contract (contract-call? '${allowedToken} transfer tokens-out tx-sender recipient none)))
      (var-set stx-balance new-stx-balance )
      (var-set token-balance new-token-balance)
      (begin 
          (print {tokens-receive: tokens-out, stx-fee: stx-fee, current-stx-balance: (var-get stx-balance), token-balance: (var-get token-balance)})  
          (ok tokens-out)
        )
    )
  )
)

(define-public (sell (tokens-in uint) ) 
  (begin
    (asserts! (> tokens-in u0) ERR-NOT-ENOUGH-TOKEN-BALANCE)
    (let (
      (sell-info (unwrap! (get-sellable-stx tokens-in) SELL-INFO-ERROR))
      (stx-fee (get fee sell-info))
      (stx-receive (get stx-receive sell-info))
      (current-stx-balance (get current-stx-balance sell-info))
      (stx-out (get stx-out sell-info))
      (new-token-balance (get new-token-balance sell-info))
      (recipient tx-sender)
    )
      (asserts! (>= current-stx-balance stx-receive) DEX-HAS-NOT-ENOUGH-STX)
      (asserts! (>=  stx-receive u0) ERR-SELL-AMOUNT)
      (asserts! (is-eq contract-caller recipient) ERR-UNAUTHORIZED)
      ;; user send token to dex
      ;; (try! (contract-call? '${allowedToken} transfer tokens-in tx-sender DEX-ADDRESS none))
      ;; dex transfer stx to user and stxcity
      ;; (try! (as-contract (stx-transfer? stx-receive tx-sender recipient)))
      ;; (try! (as-contract (stx-transfer? stx-fee tx-sender SWAP_FEE_WALLET)))
      ;; update global variable
      ;; (var-set stx-balance (- (var-get stx-balance) stx-out))
      ;; (var-set token-balance new-token-balance)
      (print {stx-receive: stx-receive, stx-fee: stx-fee, current-stx-balance: (var-get stx-balance), token-balance: (var-get token-balance)})
      (ok stx-receive)
    )
  )
)

;; read-only functions        
(define-read-only (get-stx-balance) (ok (var-get stx-balance)))
(define-read-only (get-token-balance) (ok (var-get token-balance)))

${priceFormula}

;; stx -> token. Estimate the number of token you can receive with a stx amount 
(define-read-only (get-buyable-token-details (stx-amount uint)) 
  (let 
      (
      (price (unwrap! (get-price ) GET-PRICE-INFO-ERROR))
      (current-stx-balance (var-get stx-balance ))
      (current-token-balance (var-get token-balance))
      (stx-fee (/ (* stx-amount u2) u100)) ;; 2% fee
      (stx-after-fee (- stx-amount stx-fee))
      ;; (new-stx-balance (+ current-stx-balance stx-after-fee)) 
      (tokens-out (* price stx-amount))
      (new-token-balance (- current-token-balance tokens-out)) 
  )
   (ok  {
        fee: stx-fee,  
         buyable-token: tokens-out, 
         stx-buy: stx-after-fee,
         new-token-balance: new-token-balance, 
         stx-balance: (var-get stx-balance), 
         price: price,
         token-balance: (var-get token-balance)})))


;; token -> stx. Estimate the number of stx you can receive with a token amount
(define-read-only (get-sellable-stx (token-amount uint)) 
  (let 
      (
      (price (unwrap! (get-price ) GET-PRICE-INFO-ERROR))
      (current-token-balance (var-get token-balance))
      (new-token-balance (+ current-token-balance token-amount))
      (stx-out (/ token-amount price)) 
      (stx-fee (/ (* stx-out u2) u100)) ;; 2% fee
      (stx-receive (- stx-out stx-fee))
  )
   (ok  {fee: stx-fee, 
        stx-out: stx-out,
        stx-receive: stx-receive,
        new-token-balance: new-token-balance, 
        current-stx-balance: (var-get stx-balance), 
        price: price,
        token-balance: (var-get token-balance)})))`;
}
