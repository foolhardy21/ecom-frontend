/*
    this function gets the total price of the cart
    @param {Array.prototype} cartItmArr - array of cart products
    @return {Number} - total price of all cart products 
*/
export const getTotalPrice = (cartItmArr) => cartItmArr.reduce((total, curr) => total + (curr.price * curr.qty), 0)

/*
    this function gets the total discount of the cart
    @param {Array.prototype} cartItmArr - array of cart products
    @return {Number} - total discount of all cart products 
*/
export const getTotalDiscount = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.qty * (curr.price - curr.offerPrice)) : total, 0)

/*
    this function gets the discounted price of the cart
    @param {Array.prototype} cartItmArr - array of cart products
    @return {Number} - total discounted price of all cart products 
*/
export const getFinalPrice = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.offerPrice * curr.qty) : total + (curr.price * curr.qty), 0)

/*
    this function gets the total number of products in cart
    @param {Array.prototype} cartItmArr - array of cart products
    @return {Number} - number of products in cart 
*/
export const getTotalCartItems = (cartItmArr) => cartItmArr.reduce((total, curr) => total + curr.qty, 0)
