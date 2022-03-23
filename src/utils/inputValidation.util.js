// regex for input validation in signup and login forms

const emailReg = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
const passReg = new RegExp('^[a-zA-Z0-9]+$')
const nameReg = new RegExp(/\d/ig)


// helper functions for input validation

export const emailIsInvalid = (inputStr) => (!emailReg.test(inputStr))

export const nameIsInvalid = (inputStr) => (inputStr === '' || nameReg.test(inputStr))

export const passIsInvalid = (inputStr) => (inputStr === '' || passReg.test(inputStr))

export const passAndConfPassAreDiff = (passStr, confPassStr) => (passStr !== confPassStr) 
