import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, [])

    function cartReducer(state, action) {
        switch (action.type) {

            case 'INIT_CART': return [...action.payload]

            case 'ADD_TO_CART': return state.concat({ ...action.payload })

            case 'REMOVE_FROM_CART': return state.filter(cartItm => cartItm._id !== action.payload)

            case 'INCREMENT_CART_ITEM': return state.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty + 1 }) : cartItm)

            case 'DECREMENT_CART_ITEM': return state.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty - 1 }) : cartItm)

            default: return state

        }

    }

    return (
        <CartContext.Provider
            value={{
                cartState,
                cartDispatch
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)