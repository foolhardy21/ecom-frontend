import { createContext, useContext, useReducer } from "react";
import { productsArr } from "../data/index";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(productsReducer, productsArr)

    function productsReducer(state, action) {

        switch (action.type) {
            case 'INIT': console.log('init'); return state
            case 'SORT_ASC': console.log('a'); return state
            case 'SORT_DSC': console.log('d'); return state
            case 'FILTER_BRAND': console.log('filter brand', action.payload); return state
            case 'FILTER_SIZE':
            case 'FILTER_GENDER': console.log('filter gender', action.payload); return state
            case 'FILTER_RATING':
            case 'FILTER_PRICE': console.log('filter price', action.payload); return state
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