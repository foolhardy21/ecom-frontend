export const isInputIncluded = (inputValue, filter) => filter.find(val => val === inputValue) ? true : false

export const isSortInputIncluded = (inputValue, filter) => filter === inputValue
