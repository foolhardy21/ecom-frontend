import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./";
import { cartReducer } from 'reducers'
import { ACTION_INIT_CART, ACTION_REMOVE_ALERT, ACTION_REMOVE_LOADING, ACTION_SET_ALERT, ACTION_SET_LOADING, ALERT_DISPLAY_TIME, API_CART } from "utils/constants.util";

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

    /* 
     * this function displays the alert on cart page
     @params {string} message - message to be displayed
     @params {string} type - type of alert 
    */
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
        }, ALERT_DISPLAY_TIME)
    }

    /* 
     * this function checks if the product is in cart or not
     @params {string} productId - _id of the product to be checked
     @return {boolean}
    */
    const isProductInCart = productId => cartState.cart.some(item => item._id === productId)

    /* 
     * this function decreases the cart product's quantity
    @params {Number} qty - current quantity of the product 
    @params {string} _id - _id of the product to be updated
    */
    async function decreaseProductQuantity(_id) {
        try {
            await axios.post(`${API_CART}/${_id}`, {
                action: {
                    type: 'decrement'
                }
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
        } catch (e) {
            return e.response.status
        }
    }

    /* 
     * this function decreases the cart product's quantity
    @params {string} _id - _id of the product to be updated
    */
    async function increaseProductQuantity(_id) {
        try {
            await axios.post(`${API_CART}/${_id}`, {
                action: {
                    type: 'increment'
                }
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
        } catch (e) {
            return e.response.status
        }
    }

    /* 
     * this functions removes the product from the cart
     @params {string} productIdd - product to be removed
     @return {Array.prototype} response.data.cart - updated cart
     @return {Number} e.response.status - error status code
    */
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

    /* 
     * this functions adds the product to the cart
     @params {Object.prototype} product - product to be added
     @return {Array.prototype} response.data.cart - updated cart
     @return {Number} e.response.status - error status code
    */
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

    /* 
     * this functions fetches the cart
     @return {Array.prototype} response.data.cart - array of cart products
     @return {Number} e.response.status - error status code
    */
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