import { ACTION_ADD_ADDRESS, ACTION_REMOVE_ADDRESS, ACTION_REMOVE_ALERT, ACTION_SET_ALERT, ACTION_UPDATE_ADDRESS } from "utils/constants.util"

export function addressReducer(state, { type, payload }) {

    switch (type) {

        case ACTION_SET_ALERT: return {
            ...state, alert: {
                message: payload.message,
                type: payload.type,
            }
        }

        case ACTION_REMOVE_ALERT: return {
            ...state, alert: {
                message: '',
                type: ''
            }
        }

        case ACTION_ADD_ADDRESS: return { ...state, addresses: state.addresses.concat(payload) }

        case ACTION_UPDATE_ADDRESS: return { ...state, addresses: state.addresses.map(address => address._id === payload._id ? ({ _id: address._id, ...payload.address }) : address) }

        case ACTION_REMOVE_ADDRESS: return { ...state, addresses: state.addresses.filter(address => address._id !== payload) }

        default: return state
    }
}