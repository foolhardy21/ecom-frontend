import { createContext, useContext, useReducer } from "react";
import { filterProductsByBrand, filterProductsByGender, filterProductsByPrice, filterProductsByRating, filterProductsBySize, sortProductsByAscendingPrice, sortProductsByDescendingPrice } from '../utils/products.util'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(productsReducer, [])

    function productsReducer(state, action) {

        switch (action.type) {

            case 'INIT_PRODUCTS': return [...action.payload]
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
                productsDispatch
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)