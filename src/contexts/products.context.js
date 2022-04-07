import axios from 'axios'
import { createContext, useContext, useReducer } from "react";
import { productsReducer } from 'reducers';
import { ACTION_REMOVE_ALERT, ACTION_REMOVE_LOADING, ACTION_SET_ALERT, ACTION_SET_LOADING, ALERT_DISPLAY_TIME, API_CATEGORIES, API_PRODUCTS } from 'utils/constants.util';

const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(productsReducer, {
        products: [],
        alert: {
            message: '',
            type: ''
        },
        loading: false
    })

    /* 
     * this function displays the alert on products page
     @params {string} message - message to be displayed
     @params {string} type - type of alert 
    */
    function showProductsAlert(message, type) {
        productsDispatch({
            type: ACTION_SET_ALERT, payload: {
                message,
                type
            }
        })
        setTimeout(() => productsDispatch({ type: ACTION_REMOVE_ALERT }), ALERT_DISPLAY_TIME)
    }

    /* 
     * this function fetches the products
     @return {Array.prototype} response.data.products - products array
     @return {Number} e.response.status - error status code
    */
    async function getProducts() {
        try {
            productsDispatch({ type: ACTION_SET_LOADING })
            const response = await axios.get(API_PRODUCTS)
            return response.data.products
        } catch (e) {
            return e.response.status
        } finally {
            productsDispatch({ type: ACTION_REMOVE_LOADING })
        }
    }

    /* 
     * this function fetches the categories
     @return {Array.prototype} response.data.categories - categories array
     @return {Number} e.response.status - error status code
    */
    async function getCategories() {
        try {
            const response = await axios.get(API_CATEGORIES)
            return response.data.categories
        } catch (e) {
            return e.response.status
        }
    }

    return (
        <ProductsContext.Provider
            value={{
                productsState,
                productsDispatch,
                getProducts,
                showProductsAlert,
                getCategories,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)