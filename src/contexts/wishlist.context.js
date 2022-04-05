import axios from 'axios'
import { useEffect, createContext, useReducer, useContext } from 'react'
import { useAuth } from './auth.context'
import { wishlistReducer } from '../reducers'
import { ACTION_INIT_WISHLIST, ACTION_REMOVE_ALERT, ACTION_REMOVE_LOADING, ACTION_SET_ALERT, ACTION_SET_LOADING, ALERT_DISPLAY_TIME, API_WISHLIST } from '../utils/constants.util'

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
    const { getUserToken, isUserLoggedIn } = useAuth()

    useEffect(() => {
        !isUserLoggedIn && wishlistDispatch({ type: ACTION_INIT_WISHLIST, payload: [] })
    }, [isUserLoggedIn])

    function showWishlistAlert(message, type) {
        wishlistDispatch({
            type: ACTION_SET_ALERT, payload: {
                message,
                type
            }
        })
        setTimeout(() => {
            wishlistDispatch({ type: ACTION_REMOVE_ALERT })
        }, ALERT_DISPLAY_TIME)
    }

    async function removeProductFromWishlist(productId) {
        try {
            const response = await axios.delete(`${API_WISHLIST}/${productId}`, {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.cart
        } catch (e) {
            return e.response.status
        }
    }

    async function getWishlist() {
        wishlistDispatch({ type: ACTION_SET_LOADING })
        try {
            const response = await axios.get(API_WISHLIST, {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.wishlist
        } catch (e) {
            return e.response.status
        } finally {
            wishlistDispatch({ type: ACTION_REMOVE_LOADING })
        }
    }

    async function addProductToWishlist(product) {
        try {
            const response = await axios.post(API_WISHLIST, {
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

    return (
        <WishlistContext.Provider
            value={{
                wishlistState,
                wishlistDispatch,
                getWishlist,
                addProductToWishlist,
                isProductInWishlist,
                removeProductFromWishlist,
                showWishlistAlert,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
