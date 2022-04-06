import { ACTION_ADD_TO_CART, ACTION_DECREMENT_CART_PRODUCT, ACTION_INCREMENT_CART_PRODUCT, ACTION_INIT_CART, ACTION_REMOVE_ALERT, ACTION_REMOVE_FROM_CART, ACTION_REMOVE_LOADING, ACTION_SET_ALERT, ACTION_SET_LOADING } from "utils/constants.util"

export function cartReducer(state, action) {
    switch (action.type) {

        case ACTION_INIT_CART: return { ...state, cart: action.payload }

        case ACTION_SET_LOADING: return { ...state, loading: true }

        case ACTION_REMOVE_LOADING: return { ...state, loading: false }

        case ACTION_SET_ALERT: return {
            ...state, alert: {
                message: action.payload.message,
                type: action.payload.type,
            }
        }

        case ACTION_REMOVE_ALERT: return {
            ...state, alert: {
                message: '',
                type: ''
            }
        }

        case ACTION_ADD_TO_CART: return { ...state, cart: state.cart.concat({ ...action.payload }) }

        case ACTION_REMOVE_FROM_CART: return { ...state, cart: state.cart.filter(cartItm => cartItm._id !== action.payload) }

        case ACTION_INCREMENT_CART_PRODUCT: return { ...state, cart: state.cart.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty + 1 }) : cartItm) }

        case ACTION_DECREMENT_CART_PRODUCT: return { ...state, cart: state.cart.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty - 1 }) : cartItm) }

        default: return state

    }

}