import { useTheme } from "../../context/theme-context"
import { getTextColor } from "../../utils"

const Text = (props) => {
    const { theme } = useTheme()

    return (
        <p className={`${getTextColor(theme)} ${props.classes}`}>
            {props.children}
        </p>
    )
}

export default Text
