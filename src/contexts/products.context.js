import { createContext, useContext, useState } from "react";
import { productsArr } from "../data/index";
import { filterProductsByBrand, filterProductsByGender, filterProductsByPrice, filterProductsByRating, filterProductsBySize, sortProductsByAscendingPrice, sortProductsByDescendingPrice } from '../utils/productsContext.util'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(productsArr)

    function filterProducts(filterObj) {

        let filteredProducts = [...productsArr]

        filteredProducts = filterProductsByPrice(filteredProducts, filterObj.filterPrice)

        if (filterObj.genderChecks.length > 0)
            filteredProducts = filterProductsByGender(filteredProducts, filterObj.genderChecks)

        if (filterObj.brandChecks.length > 0)
            filteredProducts = filterProductsByBrand(filteredProducts, filterObj.brandChecks)

        if (filterObj.sizeChecks.length > 0)
            filteredProducts = filterProductsBySize(filteredProducts, filterObj.sizeChecks)

        if (filterObj.ratingChecks.length > 0)
            filteredProducts = filterProductsByRating(filteredProducts, Math.min(...filterObj.ratingChecks))

        if (filterObj.priceSortOrder.length > 0) {
            if (filterObj.priceSortOrder === 'asc') {

                filteredProducts = sortProductsByAscendingPrice(filteredProducts)

            } else if (filterObj.priceSortOrder === 'dsc') {

                filteredProducts = sortProductsByDescendingPrice(filteredProducts)

            }
        }

        setProducts([...filteredProducts])
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                filterProducts
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)