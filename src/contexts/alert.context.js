const { createContext, useState, useContext } = require("react");

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({
        message: '',
        type: ''
    })

    function showAlert(message, type) {
        setAlert({
            message,
            type
        })
        setTimeout(() => setAlert({
            message: '',
            type: ''
        }), 3000)
    }

    return (
        <AlertContext.Provider
            value={{
                alert,
                showAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext)
