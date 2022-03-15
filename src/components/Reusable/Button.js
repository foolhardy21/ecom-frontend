import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Button = ({ id, onClick, classes, children }) => {
    const { theme } = useTheme()

    return (
        <button id={id} onClick={onClick} className={`${getTextColor(theme)} ${classes}`}>
            {children}
        </button>
    )
}

export default Button
