import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
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
    const { getUserToken, isUserLoggedIn } = useAuth()

    useEffect(() => {
        !isUserLoggedIn && cartDispatch({ type: 'INIT_CART', payload: [] })
        console.log('ran')
    }, [isUserLoggedIn])

    function showCartAlert(message, type) {
        cartDispatch({
            type: 'SET_ALERT', payload: {
                message,
                type
            }
        })
        setTimeout(() => {
            cartDispatch({
                type: 'REMOVE_ALERT', payload: {
                    message: '',
                    type: '',
                }
            })
        }, 3000)
    }

    const isProductInCart = productId => cartState.cart.some(item => item._id === productId)

    async function decreaseProductQuantity(qty, _id) {
        if (qty > 0) {
            await axios.post(`/api/user/cart/${_id}`, {
                action: {
                    type: 'decrement'
                }
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
            cartDispatch({ type: 'DECREMENT_CART_PRODUCT', payload: _id })
        }
    }

    async function increaseProductQuantity(_id) {
        await axios.post(`/api/user/cart/${_id}`, {
            action: {
                type: 'increment'
            }
        }, {
            headers: {
                authorization: getUserToken()
            }
        })
        cartDispatch({ type: 'INCREMENT_CART_PRODUCT', payload: _id })
    }

    async function removeProductFromCart(productId) {
        try {
            const response = await axios.delete(`/api/user/cart/${productId}`, {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        }
    }

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
            cartDispatch({ type: 'SET_LOADING' })
            const response = await axios.get('/api/user/cart', {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        } finally {
            cartDispatch({ type: 'REMOVE_LOADING' })
        }
    }


    function cartReducer(state, action) {
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

    return (
        <CartContext.Provider
            value={{
                cartState,
                cartDispatch,
                getCart,
                addProductToCart,
                isProductInCart,
                removeProductFromCart,
                showCartAlert,
                decreaseProductQuantity,
                increaseProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)