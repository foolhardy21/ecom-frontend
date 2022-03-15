export const getTotalPrice = (cartItmArr) => cartItmArr.reduce((total, curr) => total + (curr.price * curr.quantity), 0)
export const getTotalDiscount = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.quantity * (curr.price - curr.offerPrice)) : total, 0)
export const getTotalOfferPrice = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.offerPrice * curr.quantity) : total, 0)
export const getCartTotal = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.offerPrice * curr.quantity) : total + (curr.price * curr.quantity), 0)
export const getTotalCartItems = (cartItmArr) => cartItmArr.reduce((total, curr) => total + curr.quantity, 0)
