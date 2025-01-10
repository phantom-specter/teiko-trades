const exponentialFormula1 = `
(define-read-only (get-price)
 (let 
    (
    (total-purchased-tokens (- MAXSUPPLY  (var-get  token-balance)))
    (price-grow u1)
    (linear-growth u5)
    (initial-price u10000 )
    (first-section (* price-grow (* total-purchased-tokens total-purchased-tokens)))
    (second-section (* linear-growth total-purchased-tokens))
    (price (+ first-section (+ second-section initial-price)))
    )
    (begin 
       (print {price: price, firstSection: first-section, secondSection: second-section, priceGrow:price-grow , total-purchased-tokens:total-purchased-tokens, linear-growth: linear-growth})  
       (ok price)
     )
) )
`;

const linearFormula1 = `
(define-read-only (get-price)
 (let 
    (
    (total-purchased-tokens (- MAXSUPPLY  (var-get  token-balance)))
    (price-grow u10)
    (initial-price u100000 )
    (first-section (* price-grow total-purchased-tokens ))
    (price (+ first-section  initial-price))
    )
    (begin 
       (print {price: price, firstSection: first-section, priceGrow:price-grow , total-purchased-tokens:total-purchased-tokens})  
       (ok price)
     )
) )
`;

const linearFormula2 = `
(define-read-only (get-price)
 (let 
    (
    (total-purchased-tokens (- MAXSUPPLY  (var-get  token-balance)))
    (step u1000000)
    (initial-price u1000000 )
    (increment u10000000000000 )
    (first-section (/ total-purchased-tokens increment ))
    (second-section (* step first-section ))
    (price (+ second-section  initial-price))
    )
    (begin 
       (print {price: price,  second-section:second-section,  first-section: first-section, increment: increment, initial-price: initial-price,  step:step , total-purchased-tokens:total-purchased-tokens})  
       (ok price)
     )
) )
`;

export default { exponentialFormula1, linearFormula1, linearFormula2 };
