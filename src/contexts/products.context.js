import axios from 'axios'
import { createContext, useContext, useReducer } from "react";
import { filterProductsByBrand, filterProductsByGender, filterProductsByPrice, filterProductsByRating, filterProductsBySize, sortProductsByAscendingPrice, sortProductsByDescendingPrice } from '../utils/products.util'

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

    async function getProducts() {
        try {
            const response = await axios.get('/api/products')
            return response.data.products
        } catch (e) {
            return e.response.status
        }
    }

    function productsReducer(state, action) {

        switch (action.type) {

            case 'INIT_PRODUCTS': return {
                ...state,
                products: [...action.payload]
            }

            case 'SET_LOADING': return { ...state, loading: true }

            case 'REMOVE_LOADING': return { ...state, loading: false }

            case 'FILTER_PRODUCTS': return filterProducts(action.payload.allProducts, action.payload.filterState)
            default: return state

        }
    }


    function filterProducts(filteredProducts, filterObj) {

        filteredProducts = filterProductsByPrice(filteredProducts, filterObj.filterPrice)

        if (filterObj.genderChecks.length > 0)
            filteredProducts = filterProductsByGender(filteredProducts, filterObj.genderChecks)

        if (filterObj.brandChecks.length > 0)
            filteredProducts = filterProductsByBrand(filteredProducts, filterObj.brandChecks)

        if (filterObj.sizeChecks.length > 0)
            filteredProducts = filterProductsBySize(filteredProducts, Math.max(...filterObj.sizeChecks))

        if (filterObj.ratingChecks.length > 0)
            filteredProducts = filterProductsByRating(filteredProducts, Math.min(...filterObj.ratingChecks))

        if (filterObj.priceSortOrder.length > 0) {
            if (filterObj.priceSortOrder === 'asc') {

                filteredProducts = sortProductsByAscendingPrice(filteredProducts)

            } else if (filterObj.priceSortOrder === 'dsc') {

                filteredProducts = sortProductsByDescendingPrice(filteredProducts)

            }
        }

        return filteredProducts
    }

    return (
        <ProductsContext.Provider
            value={{
                productsState,
                productsDispatch,
                getProducts
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)