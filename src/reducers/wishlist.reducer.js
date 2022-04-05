import { ACTION_ADD_TO_WISHLIST, ACTION_INIT_WISHLIST, ACTION_REMOVE_ALERT, ACTION_REMOVE_FROM_WISHLIST, ACTION_REMOVE_LOADING, ACTION_SET_ALERT, ACTION_SET_LOADING } from "../utils/constants.util"

export function wishlistReducer(state, action) {
    switch (action.type) {

        case ACTION_INIT_WISHLIST: return { ...state, wishlist: action.payload }

        case ACTION_SET_LOADING: return { ...state, loading: true }

        case ACTION_SET_ALERT: return {
            ...state, alert: {
                message: action.payload.message,
                type: action.payload.type
            }
        }

        case ACTION_REMOVE_ALERT: return {
            ...state,
            alert: {
                message: '',
                type: ''
            }
        }

        case ACTION_REMOVE_LOADING: return { ...state, loading: false }

        case ACTION_ADD_TO_WISHLIST: return { ...state, wishlist: state.wishlist.concat({ ...action.payload }) }

        case ACTION_REMOVE_FROM_WISHLIST: return { ...state, wishlist: state.wishlist.filter(cartItm => cartItm._id !== action.payload) }

        default: return state
    }
}