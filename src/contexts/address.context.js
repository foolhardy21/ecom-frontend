const { createContext, useReducer, useContext, useState } = require("react");

const AddressContext = createContext()

export const AddressProvider = ({ children }) => {
    const [addressState, addressDispatch] = useReducer(addressReducer, {
        addresses: [],
        loading: false,
        alert: {
            message: '',
            type: ''
        }
    })
    const [addressForm, setAddressForm] = useState({
        name: '',
        building: '',
        street: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        phoneNumber: ''
    })

    function addressReducer(state, { type, payload }) {

        switch (type) {

            case 'ADD_ADDRESS': return { ...state, addresses: state.addresses.concat(payload) }

            case 'UPDATE_ADDRESS': return { ...state, addresses: state.address.map(address => address._id === payload._id ? ({ ...payload }) : address) }

            case 'REMOVE_ADDRESS': return { ...state, addresses: state.addresses.filter(address => address._id !== payload) }

            default: return state
        }
    }

    return (
        <AddressContext.Provider
            value={{
                addressState,
                addressDispatch,
                addressForm,
                setAddressForm
            }}
        >
            {children}
        </AddressContext.Provider>
    )
}

export const useAddress = () => useContext(AddressContext)