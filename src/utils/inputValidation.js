import { emailReg, passReg, nameReg } from "./regExp"

export const emailIsInvalid = (inputStr) => (!emailReg.test(inputStr))

export const nameIsInvalid = (inputStr) => (inputStr === '' || nameReg.test(inputStr))

export const passIsInvalid = (inputStr) => (inputStr === '' || passReg.test(inputStr))

export const passAndConfPassAreDiff = (passStr, confPassStr) => (passStr !== confPassStr) 