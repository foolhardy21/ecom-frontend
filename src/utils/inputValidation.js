import { emailReg, passReg } from "./regExp"

export const emailIsInvalid = (inputStr) => (!emailReg.test(inputStr))
export const passIsInvalid = (inputStr) => (!passReg.test(inputStr))
