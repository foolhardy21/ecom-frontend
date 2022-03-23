import { useTheme } from "../../contexts"
import { getBgColor } from "../../utils"

const Main = ({ classes, children }) => {
    const { theme } = useTheme()

    return (
        <main className={`flx ${getBgColor(theme)} ${classes}`}>
            {children}
        </main>
    )
}

export default Main