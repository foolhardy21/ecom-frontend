import { createContext, useContext, useReducer } from "react";
import { wishlistArr } from "../data/index.js";

const WishlistContext = createContext()

export const WishlistProvider = (props) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishListReducer, wishlistArr)

    function wishListReducer(state, action) {

        switch (action.type) {

            case 'REMOVE': return state.filter(itm => itm.id !== action.payload)

            default: return state

        }
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlistState,
                wishlistDispatch
            }}>
            {props.children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
