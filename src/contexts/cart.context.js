import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./auth.context";
import { cartReducer } from '../reducers'
import { ACTION_DECREMENT_CART_PRODUCT, ACTION_INCREMENT_CART_PRODUCT, ACTION_INIT_CART, ACTION_REMOVE_ALERT, ACTION_REMOVE_LOADING, ACTION_SET_ALERT, ACTION_SET_LOADING, API_CART } from "../utils/constants.util";

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
        !isUserLoggedIn && cartDispatch({ type: ACTION_INIT_CART, payload: [] })
    }, [isUserLoggedIn])

    function showCartAlert(message, type) {
        cartDispatch({
            type: ACTION_SET_ALERT, payload: {
                message,
                type
            }
        })
        setTimeout(() => {
            cartDispatch({
                type: ACTION_REMOVE_ALERT, payload: {
                    message: '',
                    type: '',
                }
            })
        }, 3000)
    }

    const isProductInCart = productId => cartState.cart.some(item => item._id === productId)

    async function decreaseProductQuantity(qty, _id) {
        if (qty > 0) {
            await axios.post(`${API_CART}/${_id}`, {
                action: {
                    type: 'decrement'
                }
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
            cartDispatch({ type: ACTION_DECREMENT_CART_PRODUCT, payload: _id })
        }
    }

    async function increaseProductQuantity(_id) {
        await axios.post(`${API_CART}/${_id}`, {
            action: {
                type: 'increment'
            }
        }, {
            headers: {
                authorization: getUserToken()
            }
        })
        cartDispatch({ type: ACTION_INCREMENT_CART_PRODUCT, payload: _id })
    }

    async function removeProductFromCart(productId) {
        try {
            const response = await axios.delete(`${API_CART}/${productId}`, {
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
            const response = await axios.post(API_CART, {
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
            cartDispatch({ type: ACTION_SET_LOADING })
            const response = await axios.get(API_CART, {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        } finally {
            cartDispatch({ type: ACTION_REMOVE_LOADING })
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