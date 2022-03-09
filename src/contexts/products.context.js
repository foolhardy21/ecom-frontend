import { createContext, useContext, useReducer } from "react";
import { productsArr } from "../data/index";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(productsReducer, productsArr)

    function filterProducts(filterObj) {

        let filteredProducts = [...productsArr]

        filteredProducts = filteredProducts.filter(prd => prd.price >= filterObj.filterPrice)
        if (filterObj.genderChecks.length > 0)
            filteredProducts = filteredProducts.filter(prd => filterObj.genderChecks.indexOf(prd.gender) !== -1)
        if (filterObj.brandChecks.length > 0)
            filteredProducts = filteredProducts.filter(prd => filterObj.brandChecks.indexOf(prd.company) !== -1)
        if (filterObj.sizeChecks.length > 0)
            filteredProducts = filteredProducts.filter(prd => filterObj.sizeChecks.indexOf(prd.size) !== -1)
        if (filterObj.ratingChecks.length > 0)
            filteredProducts = filteredProducts.filter(prd => filterObj.ratingChecks.indexOf(prd.rating) !== -1)

        filteredProducts = (filterObj.priceSortOrder.length > 0) ?
            (filterObj.priceSortOrder === 'asc') ? [...filteredProducts.sort((a, b) => a.price - b.price)]
                : [...filteredProducts.sort((a, b) => b.price - a.price)]
            : filteredProducts
        return [...filteredProducts]
    }

    function productsReducer(state, action) {

        switch (action.type) {

            case 'FILTER': return filterProducts(action.payload)

            default: return state
        }

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