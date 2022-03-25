import axios from 'axios'
import { useEffect, createContext, useReducer, useContext } from 'react'
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
    const { getUserToken, isUserLoggedIn } = useAuth()

    useEffect(() => {
        !isUserLoggedIn && wishlistDispatch({ type: 'INIT_WISHLIST', payload: [] })
    }, [isUserLoggedIn])

    function showWishlistAlert(message, type) {
        wishlistDispatch({
            type: 'SET_ALERT', payload: {
                message,
                type
            }
        })
        setTimeout(() => {
            wishlistDispatch({ type: 'REMOVE_ALERT' })
        }, 3000)
    }

    async function removeProductFromWishlist(productId) {
        try {
            const response = await axios.delete(`/api/user/wishlist/${productId}`, {
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
        wishlistDispatch({ type: 'SET_LOADING' })
        try {
            const response = await axios.get('/api/user/wishlist', {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response.data.wishlist
        } catch (e) {
            return e.response.status
        } finally {
            wishlistDispatch({ type: 'REMOVE_LOADING' })
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

            case 'INIT_WISHLIST': return { ...state, wishlist: action.payload }

            case 'SET_LOADING': return { ...state, loading: true }

            case 'SET_ALERT': return {
                ...state, alert: {
                    message: action.payload.message,
                    type: action.payload.type
                }
            }

            case 'REMOVE_ALERT': return {
                ...state,
                alert: {
                    message: '',
                    type: ''
                }
            }

            case 'REMOVE_LOADING': return { ...state, loading: false }

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
                removeProductFromWishlist,
                showWishlistAlert,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext)
