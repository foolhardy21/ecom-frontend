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

    function resetFilters() {
        filterDispatch({ type: ACTION_RESET_FILTER })
    }

    function handleGenderChecks(e) {
        const checkedGender = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_GENDER, payload: checkedGender })
        }
        else {
            filterDispatch({ type: ACTION_ADD_GENDER, payload: checkedGender })
        }
    }

    function handleRatingCheck(e) {
        const checkedRating = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_RATING, payload: checkedRating })
        }
        else {
            filterDispatch({ type: ACTION_ADD_RATING, payload: checkedRating })
        }
    }

    function handleSizeCheck(e) {
        const checkedSize = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_SIZE, payload: checkedSize })
        }
        else {
            filterDispatch({ type: ACTION_ADD_SIZE, payload: checkedSize })
        }
    }

    function handleBrandCheck(e) {
        const checkedBrand = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: ACTION_REMOVE_BRAND, payload: checkedBrand })
        }
        else {
            filterDispatch({ type: ACTION_ADD_BRAND, payload: checkedBrand })
        }
    }

    function handlePriceChange(e) {
        filterDispatch({ type: ACTION_UPDATE_PRICE, payload: Number(e.target.value) })
    }

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
