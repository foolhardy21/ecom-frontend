import { useTheme } from "../../contexts"
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