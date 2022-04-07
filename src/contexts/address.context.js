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
    const [addressToBeUpdated, setAddressToBeUpdated] = useState('')

    function addressReducer(state, { type, payload }) {

        switch (type) {

            case 'ADD_ADDRESS': return { ...state, addresses: state.addresses.concat(payload) }

            case 'UPDATE_ADDRESS': return { ...state, addresses: state.addresses.map(address => address._id === payload._id ? ({ _id: address._id, ...payload.address }) : address) }

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
                setAddressForm,
                addressToBeUpdated,
                setAddressToBeUpdated,
            }}
        >
            {children}
        </AddressContext.Provider>
    )
}

export const useAddress = () => useContext(AddressContext)