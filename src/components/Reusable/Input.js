import { useTheme } from "../../contexts/theme.context"
import { getBgColor, getTextColor } from "../../utils/theme.util"

const Input = ({ id, type, placeholder, classes }) => {
    const { theme } = useTheme()

    return (
        <input id={id} type={type} placeholder={placeholder} className={`input ${getBgColor(theme)} ${getTextColor(theme)} ${classes}`} />
    )
}

export default Input