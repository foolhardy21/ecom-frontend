import { useTheme } from "../../contexts/theme.context"
import { getBgColor } from "../../utils/theme.util"

const Main = ({ classes, children }) => {
    const { theme } = useTheme()

    return (
        <main className={`flx ${getBgColor(theme)} ${classes}`}>
            {children}
        </main>
    )
}

export default Main