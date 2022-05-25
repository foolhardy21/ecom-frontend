import { createContext, useReducer, useContext, useState } from "react";
import { addressReducer } from "reducers";
import { ACTION_REMOVE_ALERT, ACTION_SET_ALERT, ALERT_DISPLAY_TIME } from "utils/constants.util";

const AddressContext = createContext({})

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
    console.log(addressState.addresses)
    function showAddressAlert(message, type) {
        addressDispatch({
            type: ACTION_SET_ALERT, payload: {
                message,
                type
            }
        })
        setTimeout(() => addressDispatch({ type: ACTION_REMOVE_ALERT }), ALERT_DISPLAY_TIME)
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
                showAddressAlert
            }}
        >
            {children}
        </AddressContext.Provider>
    )
}

export const useAddress = () => useContext(AddressContext)