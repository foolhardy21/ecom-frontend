import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Button = (props) => {
    const { theme } = useTheme()

    return (
        <button onClick={props.onClick} className={`${getTextColor(theme)} ${props.classes}`}>
            {props.children}
        </button>
    )
}

export default Button