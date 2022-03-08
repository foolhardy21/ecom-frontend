import { createContext, useContext, useReducer } from "react";
import { productsArr } from "../data/index";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(productsReducer, productsArr)

    function productsReducer(state, action) {

        switch (action.type) {
            case 'INIT':
            case 'SORT_ASC':
            case 'SORT_DSC':
            case 'FILTER_BRAND':
            case 'FILTER_SIZE':
            case 'FILTER_GENDER':
            case 'FILTER_RATING':
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