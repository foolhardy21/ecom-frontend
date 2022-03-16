import { getTextColor, getBgColor, getSolidBtnBgColor, getSolidBtnTextColor, getBorderColor, getIconColor, getBadgeBgColor, getBadgeTextColor } from "./theme.util";
import { emailIsInvalid, nameIsInvalid, passIsInvalid, passAndConfPassAreDiff } from "./inputValidation.util";
import { isInputIncluded, isSortInputIncluded } from './filterChecks.util'
import {
    filterProductsByBrand, filterProductsByGender, filterProductsByPrice, filterProductsByRating,
    filterProductsBySize
} from './products.util'

export {
    getTextColor,
    getBgColor,
    getBorderColor,
    getSolidBtnBgColor,
    getSolidBtnTextColor,
    getIconColor,
    getBadgeBgColor,
    getBadgeTextColor,
    emailIsInvalid,
    nameIsInvalid,
    passAndConfPassAreDiff,
    passIsInvalid,
    isInputIncluded,
    isSortInputIncluded,
    filterProductsByBrand,
    filterProductsByGender,
    filterProductsByPrice,
    filterProductsByRating,
    filterProductsBySize
}
