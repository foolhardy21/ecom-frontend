import { useTheme } from "../../contexts/theme.context"
import { getBgColor, getTextColor } from "../../utils/theme.util"

const Input = (props) => {
    const { theme } = useTheme()

    return (
        <input id={props.id} type={props.type} placeholder={props.placeholder} className={`input ${getBgColor(theme)} ${getTextColor(theme)} ${props.classes}`} />
    )
}

export default Input