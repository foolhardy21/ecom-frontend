import { createContext, useContext, useState, useReducer } from "react";
import { isEmailInvalid, isPasswordInvalid } from "../utils";

const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const initialLoginFormValues = {
        email: {
            value: '',
            error: false
        },
        password: {
            value: '',
            error: false
        },
        passwordInputType: 'password',
    }
    const [loginFormState, loginFormDispatch] = useReducer(loginFormReducer, initialLoginFormValues)
    const [loginAlert, setLoginAlert] = useState({
        type: '',
        message: ''
    })

    function isFormInvalid() {
        let validationError = false

        if (isEmailInvalid(loginFormState.email.value)) {
            validationError = true
            loginFormDispatch({ type: 'SET_EMAIL_ERROR' })
            setTimeout(() => loginFormDispatch({ type: 'REMOVE_EMAIL_ERROR' }), 3000)
        }
        if (isPasswordInvalid(loginFormState.password.value)) {
            validationError = true
            loginFormDispatch({ type: 'SET_PASSWORD_ERROR' })
            setTimeout(() => loginFormDispatch({ type: 'REMOVE_PASSWORD_ERROR' }), 3000)
        }
        return validationError
    }

    function showLoginAlert(message, type) {
        setLoginAlert({
            message,
            type
        })
        setTimeout(() => setLoginAlert({
            message: '',
            type: ''
        }), 3000)
    }



    function loginFormReducer(state, action) {

        switch (action.type) {

            case 'INIT_FORM': return {
                ...state,
                email: {
                    ...state.email,
                    value: ''
                },
                password: {
                    ...state.password,
                    value: ''
                },
                passwordInputType: 'password'
            }
            case 'UPDATE_EMAIL': return {
                ...state, email: {
                    ...state.email,
                    value: action.payload
                }
            }
            case 'UPDATE_PASSWORD': return {
                ...state, password: {
                    ...state.password,
                    value: action.payload
                }
            }
            case 'TOGGLE_PASSWORD_TYPE': return { ...state, passwordInputType: state.passwordInputType === 'password' ? 'text' : 'password' }

            case 'SET_EMAIL_ERROR': return {
                ...state, email: {
                    ...state.email,
                    error: true
                }
            }
            case 'REMOVE_EMAIL_ERROR': return {
                ...state, email: {
                    ...state.email,
                    error: false
                }
            }
            case 'SET_PASSWORD_ERROR': return {
                ...state, password: {
                    ...state.password,
                    error: true
                }
            }
            case 'REMOVE_PASSWORD_ERROR': return {
                ...state, password: {
                    ...state.password,
                    error: false
                }
            }

            default: return state
        }
    }


    return (
        <LoginContext.Provider
            value={{
                loginFormState,
                loginFormDispatch,
                isFormInvalid,
                loginAlert,
                showLoginAlert,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)
