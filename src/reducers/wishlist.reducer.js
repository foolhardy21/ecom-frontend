export function wishlistReducer(state, action) {
    switch (action.type) {

        case 'INIT_WISHLIST': return { ...state, wishlist: action.payload }

        case 'SET_LOADING': return { ...state, loading: true }

        case 'SET_ALERT': return {
            ...state, alert: {
                message: action.payload.message,
                type: action.payload.type
            }
        }

        case 'REMOVE_ALERT': return {
            ...state,
            alert: {
                message: '',
                type: ''
            }
        }

        case 'REMOVE_LOADING': return { ...state, loading: false }

        case 'ADD_TO_WISHLIST': return { ...state, wishlist: state.wishlist.concat({ ...action.payload }) }

        case 'REMOVE_FROM_WISHLIST': return { ...state, wishlist: state.wishlist.filter(cartItm => cartItm._id !== action.payload) }

        default: return state
    }
}