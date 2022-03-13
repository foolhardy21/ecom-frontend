import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Text = (props) => {
    const { theme } = useTheme()

    return (
        <p id={props.id} className={`${getTextColor(theme)} ${props.classes}`}>
            {props.children}
        </p>
    )
}

export default Text