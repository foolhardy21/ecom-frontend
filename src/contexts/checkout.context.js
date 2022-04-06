const { createContext, useContext, useState } = require("react");

const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {
    const [selectedAddress, setSelectedAddress] = useState({})

    return (
        <CheckoutContext.Provider
            value={{
                selectedAddress,
                setSelectedAddress
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckout = () => useContext(CheckoutContext)