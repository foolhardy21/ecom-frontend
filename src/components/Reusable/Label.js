import { useTheme } from "../../contexts/theme-context"
import { getTextColor } from "../../utils"

const Label = ({ htmlFor, classes, children }) => {
    const { theme } = useTheme()

    return (
        <label htmlFor={htmlFor} className={`${getTextColor(theme)} ${classes}`} >
            {children}
        </label>
    )
}

export default Label