import { createContext, useContext, useReducer } from "react";
import { filterReducer } from '../reducers'

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
        filterDispatch({ type: 'RESET' })
    }

    function handleGenderChecks(e) {
        const checkedGender = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_GENDER', payload: checkedGender })
        }
        else {
            filterDispatch({ type: 'ADD_GENDER', payload: checkedGender })
        }
    }

    function handleRatingCheck(e) {
        const checkedRating = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_RATING', payload: checkedRating })
        }
        else {
            filterDispatch({ type: 'ADD_RATING', payload: checkedRating })
        }
    }

    function handleSizeCheck(e) {
        const checkedSize = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_SIZE', payload: checkedSize })
        }
        else {
            filterDispatch({ type: 'ADD_SIZE', payload: checkedSize })
        }
    }

    function handleBrandCheck(e) {
        const checkedBrand = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_BRAND', payload: checkedBrand })
        }
        else {
            filterDispatch({ type: 'ADD_BRAND', payload: checkedBrand })
        }
    }

    function handlePriceChange(e) {
        filterDispatch({ type: 'UPDATE_PRICE', payload: Number(e.target.value) })
    }

    function handlePriceSortOrderChange(e) {
        filterDispatch({ type: 'UPDATE_SORTORDER', payload: e.target.value })
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
