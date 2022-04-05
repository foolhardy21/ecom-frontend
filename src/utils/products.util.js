/*
    * this function filters the products based on the minimum price value
    * @params {Number} filterPrice - lowest value of price selected
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByPrice = (products, filterPrice) => products.filter(prd => prd.price >= filterPrice)

/*
    * this function filters the products based on the product's suitability for a particular gender
    * @params {Array.prototype} genderArr - array of genders selected
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByGender = (products, genderArr) => products.filter(prd => genderArr.indexOf(prd.gender) !== -1)

/*
    * this function filters the products based on the brands selected
    * @params {Array.prototype} brandArr - array of the brands selected
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByBrand = (products, brandArr) => products.filter(prd => brandArr.indexOf(prd.company) !== -1)

/*
    * this function filters the products based on the product's size
    * @params {Number} minSize - minimum size value from the sizes selected
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsBySize = (products, minSize) => products.filter(prd => prd.size.indexOf(minSize) !== -1)

/*
    * this function filters the products based on the product's rating
    * @params {Number} minRating - minimum rating value from the ratings selected
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByRating = (products, minRating) => products.filter(prd => prd.rating >= minRating)

/*
    * this function sorts the products array in the ascending order of the product's price
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const sortProductsByAscendingPrice = products => products.sort((a, b) => a.price - b.price)

/*
    * this function sorts the products array in the descending order of the product's price
    * @params {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const sortProductsByDescendingPrice = products => products.sort((a, b) => b.price - a.price)
