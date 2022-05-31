/**
    this function checks if the input value is already present in the filter array or not
    @param {Array.prototype} filter - array of filter strings
    @param {string} inputValue - value to be checked in filter
    @return {boolean} - true if it is in the filter otherwise false 
*/
export const isInputIncluded = (inputValue, filter) => filter.find(val => val === inputValue) ? true : false

/**
    this function checks if the filter value is same as the input value or not 
    @param {string} filter - string of current sort order ('asc' or 'dsc')
    @param {string} inputValue - value to be compared
    @return {boolean} - true if it same otherwise false 
*/
export const isSortInputIncluded = (inputValue, filter) => filter === inputValue

/**
    * this function is to get the array of sizes from 9 to 12 to be displayed in filter component
    @return {Array.prototype} sizeArr - array of sizes
*/
export const getSizeFilterArray = () => {
    let sizeArr = []
    for (let i = 9; i <= 12; i++) {
        sizeArr.push(i)
    }
    return sizeArr
}

/**
    * this function is to get the array of ratings from 1 to 5 to be displayed in filter component
    @return {Array.prototype} ratingArr - array of ratings
*/
export const getRatingFilterArray = () => {
    let ratingArr = []
    for (let i = 1; i < 6; i++) {
        ratingArr.push(i)
    }
    return ratingArr
}