import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, [])

    async function getCart() {
        try {
            const userToken = window.localStorage.getItem('userToken')
            const response = await axios.get('/api/user/cart', {
                headers: {
                    authorization: userToken
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        }
    }

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
                cartDispatch,
                getCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)