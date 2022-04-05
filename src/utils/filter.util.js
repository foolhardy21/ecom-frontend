/*
    this function checks if the input value is already present in the filter array or not
    @param {Array.prototype} filter - array of filter strings
    @param {string} inputValue - value to be checked in filter
    @return {boolean} - true if it is in the filter otherwise false 
*/
export const isInputIncluded = (inputValue, filter) => filter.find(val => val === inputValue) ? true : false

/*
    this function checks if the filter value is same as the input value or not 
    @param {string} filter - string of current sort order ('asc' or 'dsc')
    @param {string} inputValue - value to be compared
    @return {boolean} - true if it same otherwise false 
*/
export const isSortInputIncluded = (inputValue, filter) => filter === inputValue
