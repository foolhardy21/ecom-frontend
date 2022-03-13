import { cartItmArr } from '../data/index'
const { createContext, useContext, useReducer } = require("react");

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartItmArr)

    function cartReducer(state, action) {

        switch (action.type) {

            case 'REMOVE_ITEM': return state.filter(itm => itm.id !== action.payload)

            case 'INCREASE_QUANTITY': return state.map(itm => itm.id === action.payload ? { ...itm, quantity: itm.quantity + 1 } : itm)

            case 'DECREASE_QUANTITY': return state.map(itm => itm.id === action.payload ? { ...itm, quantity: itm.quantity > 0 ? itm.quantity - 1 : 0 } : itm)

            case 'SET_QUANTITY': return state.map(itm => itm.id === action.payload.id ? { ...itm, quantity: action.payload.quantity } : itm)

            case 'SET_SIZE': return state.map(itm => itm.id === action.payload.id ? { ...itm, size: action.payload.size } : itm)

            default: return state

        }
    }

    return (
        <CartContext.Provider
            value={{
                cartState,
                cartDispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)