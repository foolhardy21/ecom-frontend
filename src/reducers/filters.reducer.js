import { ACTION_ADD_BRAND, ACTION_ADD_GENDER, ACTION_ADD_RATING, ACTION_ADD_SIZE, ACTION_REMOVE_BRAND, ACTION_REMOVE_GENDER, ACTION_REMOVE_RATING, ACTION_REMOVE_SIZE, ACTION_RESET_FILTER, ACTION_UPDATE_PRICE, ACTION_UPDATE_SORTORDER } from "../utils/constants.util"

export function filterReducer(state, action) {

    switch (action.type) {

        case ACTION_RESET_FILTER: return {
            filterPrice: 5000,
            priceSortOrder: '',
            genderChecks: [],
            brandChecks: [],
            sizeChecks: [],
            ratingChecks: []
        }

        case ACTION_UPDATE_PRICE: return { ...state, filterPrice: action.payload }

        case ACTION_UPDATE_SORTORDER: return { ...state, priceSortOrder: action.payload }

        case ACTION_ADD_GENDER: return { ...state, genderChecks: [...state.genderChecks, action.payload] }

        case ACTION_REMOVE_GENDER: return { ...state, genderChecks: state.genderChecks.filter(gender => gender !== action.payload) }

        case ACTION_ADD_BRAND: return { ...state, brandChecks: [...state.brandChecks, action.payload] }

        case ACTION_REMOVE_BRAND: return { ...state, brandChecks: state.brandChecks.filter(brand => brand !== action.payload) }

        case ACTION_ADD_SIZE: return { ...state, sizeChecks: [...state.sizeChecks, action.payload] }

        case ACTION_REMOVE_SIZE: return { ...state, sizeChecks: state.sizeChecks.filter(size => size !== action.payload) }

        case ACTION_ADD_RATING: return { ...state, ratingChecks: [...state.ratingChecks, action.payload] }

        case ACTION_REMOVE_RATING: return { ...state, ratingChecks: state.ratingChecks.filter(rating => rating !== action.payload) }

        default: return state
    }
}