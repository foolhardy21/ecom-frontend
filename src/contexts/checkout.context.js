import axios from "axios";
import { useAuth } from "./auth.context";

const { createContext, useContext, useState } = require("react");

const CheckoutContext = createContext({})

export const CheckoutProvider = ({ children }) => {
    const [selectedAddress, setSelectedAddress] = useState({})
    const { getUserToken } = useAuth()

    /**
     * this functions adds the product to the cart
     @param {Object.prototype} product - product to be added
     @return {Array.prototype} response.data.cart - updated cart
     @return {Number} e.response.status - error status code
    */
    async function addProductToOrders(product) {
        try {
            await axios.post('/api/user/orders', {
                product
            }, {
                headers: {
                    authorization: getUserToken()
                }
            })
        } catch (e) {
            return e.response.status
        }
    }

    /**
     * this functions fetches the orders
     @return {Array.prototype} response.data.orders - array of ordered products
     @return {Number} e.response.status - error status code
    */
    async function getOrders() {
        try {
            const response = await axios.get('/api/user/orders', {
                headers: {
                    authorization: getUserToken()
                }
            })
            return response
        } catch (e) {
            return e.response.status
        }
    }

    return (
        <CheckoutContext.Provider
            value={{
                selectedAddress,
                setSelectedAddress,
                addProductToOrders,
                getOrders,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckout = () => useContext(CheckoutContext)