// these are the helper functions for the filter component. 

export const isInputIncluded = (inputValue, filter) => filter.find(val => val === inputValue) ? true : false

export const isSortInputIncluded = (inputValue, filter) => filter === inputValue
