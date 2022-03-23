import { useTheme } from "../../contexts/theme-context"
import { getTextColor } from "../../utils"

const Text = ({ classes, children }) => {
    const { theme } = useTheme()

    return (
        <p className={`${getTextColor(theme)} ${classes}`}>
            {children}
        </p>
    )
}

export default Text