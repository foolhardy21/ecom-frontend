import { useTheme } from "contexts"
import { getTextColor } from "utils"

const Label = ({ htmlFor, onClick, classes, children }) => {
    const { theme } = useTheme()

    return (
        <label htmlFor={htmlFor} onClick={onClick} className={`${getTextColor(theme)} ${classes}`} >
            {children}
        </label>
    )
}

export default Label