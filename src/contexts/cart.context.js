import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./auth.context";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        alert: {
            message: '',
            type: ''
        },
        loading: false
    })
    const { getUserToken } = useAuth()

    const isProductInCart = productId => cartState.cart.some(item => item._id === productId)

    async function addProductToCart(product) {
        try {
            const response = await axios.post('/api/user/cart', {
                product
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        }
    }

    async function getCart() {
        try {
            const response = await axios.get('/api/user/cart', {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        }
    }

    function cartReducer(state, action) {
        switch (action.type) {

            case 'INIT_CART': return { ...state, cart: [...action.payload] }

            case 'ADD_TO_CART': return { ...state, cart: state.cart.concat({ ...action.payload }) }

            case 'REMOVE_FROM_CART': return { ...state, cart: state.cart.filter(cartItm => cartItm._id !== action.payload) }

            case 'INCREMENT_CART_ITEM': return { ...state, cart: state.cart.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty + 1 }) : cartItm) }

            case 'DECREMENT_CART_ITEM': return { ...state, cart: state.cart.map(cartItm => cartItm._id === action.payload ? ({ ...cartItm, qty: cartItm.qty - 1 }) : cartItm) }

            default: return state

        }

    }

    return (
        <CartContext.Provider
            value={{
                cartState,
                cartDispatch,
                getCart,
                addProductToCart,
                isProductInCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)