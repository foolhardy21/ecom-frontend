// helper functions for filter reducer

export const filterProductsByPrice = (products, filterPrice) => products.filter(prd => prd.price >= filterPrice)

export const filterProductsByGender = (products, genderArr) => products.filter(prd => genderArr.indexOf(prd.gender) !== -1)

export const filterProductsByBrand = (products, brandArr) => products.filter(prd => brandArr.indexOf(prd.company) !== -1)

export const filterProductsBySize = (products, minSize) => products.filter(prd => prd.size.indexOf(minSize) !== -1)

export const filterProductsByRating = (products, minRating) => products.filter(prd => prd.rating >= minRating)

export const sortProductsByAscendingPrice = products => products.sort((a, b) => a.price - b.price)

export const sortProductsByDescendingPrice = products => products.sort((a, b) => b.price - a.price)
