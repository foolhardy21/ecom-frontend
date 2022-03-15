import { useTheme } from "../../context/theme-context"
import { getTextColor } from "../../utils"

const Text = (props) => {
    const { theme } = useTheme()

    return (
        <p id={props.id} className={`${getTextColor(theme)} ${props.classes}`}>
            {props.children}
        </p>
    )
}

export default Text
