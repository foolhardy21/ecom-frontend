import { createContext, useReducer, useContext } from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, [])

    function wishlistReducer(state, action) {
        switch (action.type) {

            case 'INIT_WISHLIST': return [...action.payload]

            case 'ADD_TO_WISHLIST': return state.concat({ ...action.payload })

            case 'REMOVE_FROM_WISHLIST': return state.filter(wishlistItm => wishlistItm._id !== action.payload)

            default: return state
        }
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlistState,
                wishlistDispatch
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
