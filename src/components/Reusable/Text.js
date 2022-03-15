import { useTheme } from "../../context/theme-context"
import { getTextColor } from "../../utils"

const Text = (props) => {
    const { theme } = useTheme()

    return (
        <p className={`${props.classes} ${getTextColor(theme)}`}>
            {props.children}
        </p>
    )
}

export default Text
