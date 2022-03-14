import { createContext, useContext, useReducer } from "react";
import { wishlistArr } from "../data/index.js";

const WishListContext = createContext()

export const WishListProvider = (props) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishListReducer, wishlistArr)

    function wishListReducer(state, action) {

        switch (action.type) {

            case 'REMOVE': return state.filter(itm => itm.id !== action.payload)

            default: return state

        }
    }

    return (
        <WishListContext.Provider
            value={{
                wishlistState,
                wishlistDispatch
            }}>
            {props.children}
        </WishListContext.Provider>
    )
}

export const useWishlist = () => useContext(WishListContext)
