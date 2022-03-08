import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Text = (props) => {
    const { theme } = useTheme()

    return (
        <p className={`${props.classes} ${getTextColor(theme)}`}>
            {props.children}
        </p>
    )
}

export default Text