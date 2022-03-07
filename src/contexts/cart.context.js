import { cartItmArr } from '../data/index'
const { createContext, useContext, useReducer } = require("react");

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartItmArr)

    const getTotalPrice = () => cartState.reduce((total, curr) => total + (curr.price * curr.quantity), 0)

    const getTotalDiscount = () => cartState.reduce((total, curr) => curr.offerPrice ? total + (curr.quantity * (curr.price - curr.offerPrice)) : total, 0)

    const getTotalOfferPrice = () => cartState.reduce((total, curr) => curr.offerPrice ? total + (curr.offerPrice * curr.quantity) : total, 0)

    const getCartTotal = () => cartState.reduce((total, curr) => curr.offerPrice ? total + (curr.offerPrice * curr.quantity) : total + (curr.price * curr.quantity), 0)

    const getTotalItems = () => cartState.reduce((total, curr) => total + curr.quantity, 0)

    function cartReducer(state, action) {

        switch (action.type) {

            case 'REMOVE': return state.filter(itm => itm.id !== action.payload)

            case 'INCREASE': return state.map(itm => itm.id === action.payload ? { ...itm, quantity: itm.quantity + 1 } : itm)

            case 'DECREASE': return state.map(itm => itm.id === action.payload ? { ...itm, quantity: itm.quantity > 0 ? itm.quantity - 1 : 0 } : itm)

            default: return state

        }
    }

    return (
        <CartContext.Provider
            value={{
                cartState,
                cartDispatch,
                getTotalPrice,
                getTotalDiscount,
                getTotalOfferPrice,
                getCartTotal,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)