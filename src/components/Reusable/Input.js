import { useTheme } from "../../contexts/theme-context"
import { getBgColor, getTextColor } from "../../utils"

const Input = ({ type, placeholder, value, onChange, classes }) => {
    const { theme } = useTheme()

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}
            className={`${getBgColor(theme)} ${getTextColor(theme)} ${classes}`} />
    )
}

export default Input