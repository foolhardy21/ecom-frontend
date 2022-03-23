import { useTheme } from "../../context/theme-context"
import { getTextColor } from "../../utils"

const Label = ({ for, classes, children }) => {
    const { theme } = useTheme()

    return (
        <label htmlFor={for} className={`${getTextColor(theme)} ${classes}`} >
            {children}
        </label>
    )
}

export default Label