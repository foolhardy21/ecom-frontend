import axios from "axios"
import { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    async function loginUser(email, password) {
        try {
            const response = await axios.post('/api/auth/login', {
                email,
                password,
            })
            setIsUserLoggedIn(true)
            return response.status
        } catch (e) {
            return e.response.status
        }
    }

    async function signupUser(email, password, firstName, lastName) {
        try {
            const response = await axios.post('/api/auth/signup', {
                email,
                password,
                firstName,
                lastName,
            })
            return response.status
        } catch (e) {
            return e.response.status
        }
    }

    function logoutUser() {
        window.localStorage.removeItem('userToken')
        setIsUserLoggedIn(false)

    }

    const getUserToken = () => window.localStorage.getItem('userToken')

    return (
        <AuthContext.Provider
            value={{
                isUserLoggedIn,
                loginUser,
                signupUser,
                logoutUser,
                getUserToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)