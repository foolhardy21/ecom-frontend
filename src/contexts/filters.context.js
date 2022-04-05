import { createContext, useContext, useReducer } from "react";
import { filterReducer } from '../reducers'
import { ACTION_ADD_BRAND, ACTION_ADD_GENDER, ACTION_ADD_RATING, ACTION_ADD_SIZE, ACTION_REMOVE_BRAND, ACTION_REMOVE_GENDER, ACTION_REMOVE_RATING, ACTION_REMOVE_SIZE, ACTION_RESET_FILTER, ACTION_UPDATE_PRICE, ACTION_UPDATE_SORTORDER } from "../utils/constants.util";

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        filterPrice: 5000,
        priceSortOrder: '',
        genderChecks: [],
        brandChecks: [],
        sizeChecks: [],
        ratingChecks: []
    })

    /* 
     * this function resets the filters to initial values
    */
    function resetFilters() {
        filterDispatch({ type: ACTION_RESET_FILTER })
    }

    /* 
     * this function checks or unchecks the gender checkbox in the filter component
     @params {Object.prototype} e - triggering event in dom
    */
    function handleGenderChecks(e) {
        const checkedGender = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_GENDER, payload: checkedGender })
        }
        else {
            filterDispatch({ type: ACTION_ADD_GENDER, payload: checkedGender })
        }
    }

    /* 
     * this function checks or unchecks the rating checkbox in the filter component
     @params {Object.prototype} e - triggering event in dom
    */
    function handleRatingCheck(e) {
        const checkedRating = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_RATING, payload: checkedRating })
        }
        else {
            filterDispatch({ type: ACTION_ADD_RATING, payload: checkedRating })
        }
    }

    /* 
    * this function checks or unchecks the size checkbox in the filter component
    @params {Object.prototype} e - triggering event in dom
   */
    function handleSizeCheck(e) {
        const checkedSize = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_SIZE, payload: checkedSize })
        }
        else {
            filterDispatch({ type: ACTION_ADD_SIZE, payload: checkedSize })
        }
    }

    /* 
    * this function checks or unchecks the brand checkbox in the filter component
    @params {Object.prototype} e - triggering event in dom
    */
    function handleBrandCheck(e) {
        const checkedBrand = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_BRAND, payload: checkedBrand })
        }
        else {
            filterDispatch({ type: ACTION_ADD_BRAND, payload: checkedBrand })
        }
    }

    /* 
    * this function updates the price value in the filter component
     @params {Object.prototype} e - triggering event in dom
    */
    function handlePriceChange(e) {
        filterDispatch({ type: ACTION_UPDATE_PRICE, payload: Number(e.target.value) })
    }

    /* 
    * this function updates the sort order in the filter component
    @params {Object.prototype} e - triggering event in dom
    */
    function handlePriceSortOrderChange(e) {
        filterDispatch({ type: ACTION_UPDATE_SORTORDER, payload: e.target.value })
    }

    return (
        <FilterContext.Provider
            value={{
                filterState,
                filterDispatch,
                handleBrandCheck,
                handleGenderChecks,
                handlePriceChange,
                handlePriceSortOrderChange,
                handleRatingCheck,
                handleSizeCheck,
                resetFilters
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext)
