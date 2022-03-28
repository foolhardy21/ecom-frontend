import axios from 'axios'
import { createContext, useContext, useReducer } from "react";
import { productsReducer } from '../reducers';

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(productsReducer, {
        products: [],
        alert: {
            message: '',
            type: ''
        },
        loading: false
    })

    function showProductsAlert(message, type) {
        productsDispatch({
            type: 'SET_ALERT', payload: {
                message,
                type
            }
        })

        setTimeout(() => productsDispatch({ type: 'REMOVE_ALERT' }), 3000)

    }

    async function getProducts() {
        try {
            productsDispatch({ type: 'SET_LOADING' })
            const response = await axios.get('/api/products')
            return response.data.products
        } catch (e) {
            return e.response.status
        } finally {
            productsDispatch({ type: 'REMOVE_LOADING' })
        }
    }

    async function getCategories() {
        try {
            const response = await axios.get('/api/categories')
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