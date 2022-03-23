import { useTheme } from "../../context/theme-context"
import { getBgColor } from "../../utils/theme-util"

const Main = ({ classes, children }) => {
    const { theme } = useTheme()

    return (
        <main style={{
            minWidth: '100vw',
        }} className={`${getBgColor(theme)} ${classes}`}>

            {children}

        </main>
    )
}

export default Main