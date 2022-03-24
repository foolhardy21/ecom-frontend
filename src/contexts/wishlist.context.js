import axios from 'axios'
import { createContext, useReducer, useContext } from 'react'
import { useAuth } from './auth.context'

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
        wishlist: [],
        alert: {
            message: '',
            type: ''
        },
        loading: false
    })
    const { getUserToken } = useAuth()

    async function getWishlist() {
        const userToken = window.localStorage.getItem('userToken')
        try {
            const response = await axios.get('/api/user/wishlist', {
                headers: {
                    authorization: userToken
                }
            })
            return response.data.wishlist
        } catch (e) {
            return e.response.status
        }
    }

    async function addProductToWishlist(product) {
        try {
            const response = await axios.post('/api/user/wishlist', {
                product
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.wishlist
        } catch (e) {
            return e.response.status
        }
    }

    const isProductInWishlist = productId => wishlistState.wishlist.some(item => item._id === productId)

    function wishlistReducer(state, action) {
        switch (action.type) {

            case 'INIT_WISHLIST': return { ...state, wishlist: [...action.payload] }

            case 'ADD_TO_WISHLIST': return { ...state, wishlist: state.wishlist.concat({ ...action.payload }) }

            case 'REMOVE_FROM_WISHLIST': return { ...state, wishlist: state.wishlist.filter(cartItm => cartItm._id !== action.payload) }

            default: return state
        }
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlistState,
                wishlistDispatch,
                getWishlist,
                addProductToWishlist,
                isProductInWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
