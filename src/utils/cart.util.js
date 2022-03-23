// these are the helper functions for cart summary

export const getTotalPrice = (cartItmArr) => cartItmArr.reduce((total, curr) => total + (curr.price * curr.qty), 0)

export const getTotalDiscount = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.qty * (curr.price - curr.offerPrice)) : total, 0)

export const getFinalPrice = (cartItmArr) => cartItmArr.reduce((total, curr) => curr.offerPrice ? total + (curr.offerPrice * curr.qty) : total + (curr.price * curr.qty), 0)

export const getTotalCartItems = (cartItmArr) => cartItmArr.reduce((total, curr) => total + curr.qty, 0)
