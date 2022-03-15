import { getTextColor, getBgColor, getSolidBtnBgColor, getSolidBtnTextColor, getBorderColor, getIconColor } from "./theme.util";
import { emailIsInvalid, nameIsInvalid, passIsInvalid, passAndConfPassAreDiff } from "./inputValidation.util";
import { timer } from "./timer.util";

import { getTotalDiscount, getTotalPrice, getTotalItems, getCartTotal, getTotalOfferPrice } from './cart.util'

import { getTotalWishlistItems } from './wishlist.util'

export {
    getTextColor,
    getBgColor,
    getBorderColor,
    getSolidBtnBgColor,
    getSolidBtnTextColor,
    getIconColor,
    emailIsInvalid,
    nameIsInvalid,
    passAndConfPassAreDiff,
    passIsInvalid,
    timer,
    getTotalDiscount,
    getCartTotal,
    getTotalItems,
    getTotalOfferPrice,
    getTotalPrice,
    getTotalWishlistItems
}
