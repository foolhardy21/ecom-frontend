import { createContext, useContext, useReducer, useState } from "react";
import { productsArr } from "../data/index";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        filterPrice: 5000,
        priceSortOrder: '',
        genderChecks: [],
        brandChecks: [],
        sizeChecks: [],
        ratingChecks: []
    })
    const [productsState, productsDispatch] = useReducer(productsReducer, productsArr)

    function productsReducer(state, action) {

        switch (action.type) {

            case 'FILTER': let filteredProducts = [...productsArr]

                filteredProducts = filteredProducts.filter(prd => prd.price >= filters.filterPrice)
                if (filters.genderChecks.length > 0)
                    filteredProducts = filteredProducts.filter(prd => filters.genderChecks.indexOf(prd.gender) !== -1)
                if (filters.brandChecks.length > 0)
                    filteredProducts = filteredProducts.filter(prd => filters.brandChecks.indexOf(prd.company) !== -1)
                if (filters.sizeChecks.length > 0)
                    filteredProducts = filteredProducts.filter(prd => filters.sizeChecks.indexOf(prd.size) !== -1)
                if (filters.ratingChecks.length > 0)
                    filteredProducts = filteredProducts.filter(prd => filters.ratingChecks.indexOf(prd.rating) !== -1)

                filteredProducts = (filters.priceSortOrder.length > 0) ?
                    (filters.priceSortOrder === 'asc') ? [...filteredProducts.sort((a, b) => a.price - b.price)]
                        : [...filteredProducts.sort((a, b) => b.price - a.price)]
                    : filteredProducts
                return [...filteredProducts]

            default: return state
        }

    }

    return (
        <ProductsContext.Provider
            value={{
                productsState,
                productsDispatch,
                filters,
                setFilters
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)