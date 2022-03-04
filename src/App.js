import { useEffect } from "react";
import Login from "./components/Login/Login";
import { useTheme } from "./context/theme-context";
import { getBgColor } from "./utils/theme-util";

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        // document
        // document.body.classList.add(getBgColor(theme))
    }, [theme])

    return (
        <>
            <Login />
        </>
    );
}

export default App;
