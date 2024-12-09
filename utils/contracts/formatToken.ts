import { getNetworkConfig } from "../appUserSession";
import { generateTokenDexAddress, getTokenVariableName } from "../deployToken";

const { ft_sip_trait_address } = getNetworkConfig();
const maxSupply = 2100000000000000;

interface TokenProps {
  name: string;
  tokenURI: string;
  tokenSymbol: string;
  userWalletAddress: string;
}

export function formatToken(props: TokenProps) {
  const { name, tokenSymbol, tokenURI, userWalletAddress } = props;

  const tokenVariableName = getTokenVariableName(name);

  return `(impl-trait '${ft_sip_trait_address}.sip-010-trait-ft-standard.sip-010-trait)
  
  (define-constant contract-owner tx-sender)
  (define-constant err-owner-only (err u100))
  (define-constant err-not-token-owner (err u101))
  (define-constant MAXSUPPLY u${maxSupply})
  
  (define-fungible-token ${tokenVariableName} MAXSUPPLY)
  
  
  (define-data-var token-uri (optional (string-utf8 256)) (some u"${tokenURI}"))
  
  (define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
      (begin
          (asserts! (is-eq tx-sender sender) err-not-token-owner)
          (try! (ft-transfer? ${tokenVariableName} amount sender recipient))
          (match memo to-print (print to-print) 0x)
          (ok true)
      )
  )
  
  (define-public (set-token-uri (value (string-utf8 256)))
      (begin
          (asserts! (is-eq tx-sender contract-owner) (err err-owner-only ))
          (var-set token-uri (some value))
          (ok (print {
                notification: "token-metadata-update",
                payload: {
                  contract-id: (as-contract tx-sender),
                  token-class: "ft"
                }
              })
          )
      )
  )
  
  (define-read-only (get-name)
      (ok "${name?.trim()}")
  )
  
  (define-read-only (get-symbol)
      (ok "${tokenSymbol.toUpperCase()?.trim()}")
  )
  
  (define-read-only (get-decimals)
      (ok u8)
  )
  
  (define-read-only (get-balance (who principal))
      (ok (ft-get-balance ${tokenVariableName} who))
  )
  
  (define-read-only (get-total-supply)
      (ok (ft-get-supply ${tokenVariableName}))
  )
  
  (define-read-only (get-token-uri)
   (ok (var-get token-uri))
  )
  
  (try! (ft-mint? ${tokenVariableName} MAXSUPPLY ${generateTokenDexAddress({
    name,
    userWalletAddress,
  })}))
   `;
}
