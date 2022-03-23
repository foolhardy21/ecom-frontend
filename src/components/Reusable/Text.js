import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Text = ({ id, classes, children }) => {
    const { theme } = useTheme()

    return (
        <p id={id} className={`${getTextColor(theme)} ${classes}`}>
            {children}
        </p>
    )
}

export default Text