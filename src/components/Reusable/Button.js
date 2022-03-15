import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Button = (props) => {
    const { theme } = useTheme()

    return (
        <button id={props.id} onClick={props.onClick} className={`${getTextColor(theme)} ${props.classes}`}>
            {props.children}
        </button>
    )
}

export default Button
