export { getTextColor, getBgColor, getSolidBtnBgColor, getSolidBtnTextColor, getBorderColor, getIconColor, getBadgeBgColor, getBadgeTextColor } from "./theme.util";

export { isEmailInvalid, isNameInvalid, isPasswordInvalid, arePasswordAndConfirmedPasswordDiff, isFormEmpty } from "./inputValidation.util";

export { isInputIncluded, isSortInputIncluded, getSizeFilterArray, getRatingFilterArray } from './filter.util'

export {
    filterProductsByBrand, filterProductsByGender, filterProductsByPrice, filterProductsByRating, filterProductsBySize, sortProductsByAscendingPrice, sortProductsByDescendingPrice, filterProductsBySearchQuery
} from './products.util'

export { getTotalCartItems, getFinalPrice, getTotalDiscount, getTotalPrice } from './cart.util'
