/**
    * this function filters the products based on the minimum price value
    * @param {Number} filterPrice - lowest value of price selected
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByPrice = (products, filterPrice) => products.filter(prd => prd.price >= filterPrice)

/**
    * this function filters the products based on the product's suitability for a particular gender
    * @param {Array.prototype} genderArr - array of genders selected
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByGender = (products, genderArr) => products.filter(prd => genderArr.indexOf(prd.gender) !== -1)

/**
    * this function filters the products based on the brands selected
    * @param {Array.prototype} brandArr - array of the brands selected
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByBrand = (products, brandArr) => products.filter(prd => brandArr.indexOf(prd.company) !== -1)

/**
    * this function filters the products based on the product's size
    * @param {Number} minSize - minimum size value from the sizes selected
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsBySize = (products, minSize) => products.filter(prd => prd.size.indexOf(minSize) !== -1)

/**
    * this function filters the products based on the product's rating
    * @param {Array.prototype} ratingArr - minimum rating value from the ratings selected
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsByRating = (products, ratingArr) => products.filter(prd => ratingArr.some(rating => rating == prd.rating))

/**
    * this function sorts the products array in the ascending order of the product's price
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const sortProductsByAscendingPrice = products => products.sort((a, b) => a.price - b.price)

/**
    * this function sorts the products array in the descending order of the product's price
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const sortProductsByDescendingPrice = products => products.sort((a, b) => b.price - a.price)

/**
    * this function filters the products based on the search query entered by the user
    * @param {string} query - input entered by the user for search
    * @param {Array.prototype} products - array of all products
    * @return {Array.prototype} filtered array of products 
*/
export const filterProductsBySearchQuery = (products, query) => products.filter(prd => prd.name.toLowerCase().includes(query.toLowerCase()) || prd.company.toLowerCase().includes(query.toLowerCase()))