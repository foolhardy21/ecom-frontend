const { createContext, useContext, useState } = require("react");

const ThemeContext = createContext()

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {
                props.children
            }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)