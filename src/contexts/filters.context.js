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
                filterDispatch
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext)
