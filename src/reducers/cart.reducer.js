export function cartReducer(state, action) {
    switch (action.type) {

        case 'INIT_CART': return { ...state, cart: action.payload }

        case 'SET_LOADING': return { ...state, loading: true }

        case 'REMOVE_LOADING': return { ...state, loading: false }

        case 'SET_ALERT': return {
            ...state, alert: {
                message: action.payload.message,
                type: action.payload.type,
            }
        }

        case 'REMOVE_ALERT': return {
            ...state, alert: {
                message: '',
                type: ''
            }
        }

        case 'ADD_TO_CART': return { ...state, cart: state.cart.concat({ ...action.payload }) }

        case 'REMOVE_FROM_CART': return { ...state, cart: state.cart.filter(cartItm => cartItm._id !== action.payload) }

        case 'INCREMENT_CART_PRODUCT': return { ...state, cart: state.cart.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty + 1 }) : cartItm) }

        case 'DECREMENT_CART_PRODUCT': return { ...state, cart: state.cart.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty - 1 }) : cartItm) }

        default: return state

    }

}