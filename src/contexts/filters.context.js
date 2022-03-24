import { createContext, useContext, useReducer } from "react";

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


    function filterReducer(state, action) {

        switch (action.type) {

            case 'RESET': return {
                filterPrice: 5000,
                priceSortOrder: '',
                genderChecks: [],
                brandChecks: [],
                sizeChecks: [],
                ratingChecks: []
            }

            case 'UPDATE_PRICE': return { ...state, filterPrice: action.payload }

            case 'UPDATE_SORTORDER': return { ...state, priceSortOrder: action.payload }

            case 'ADD_GENDER': return { ...state, genderChecks: [...state.genderChecks, action.payload] }

            case 'REMOVE_GENDER': return { ...state, genderChecks: state.genderChecks.filter(gender => gender !== action.payload) }

            case 'ADD_BRAND': return { ...state, brandChecks: [...state.brandChecks, action.payload] }

            case 'REMOVE_BRAND': return { ...state, brandChecks: state.brandChecks.filter(brand => brand !== action.payload) }

            case 'ADD_SIZE': return { ...state, sizeChecks: [...state.sizeChecks, action.payload] }

            case 'REMOVE_SIZE': return { ...state, sizeChecks: state.sizeChecks.filter(size => size !== action.payload) }

            case 'ADD_RATING': return { ...state, ratingChecks: [...state.ratingChecks, action.payload] }

            case 'REMOVE_RATING': return { ...state, ratingChecks: state.ratingChecks.filter(rating => rating !== action.payload) }

            default: return state
        }
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
