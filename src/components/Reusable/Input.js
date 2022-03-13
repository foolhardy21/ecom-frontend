import { useTheme } from "../../context/theme-context"
import { getBgColor, getTextColor } from "../../utils"

const Input = (props) => {
    const { theme } = useTheme()

    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}
            className={`${getBgColor(theme)} ${getTextColor(theme)} ${props.classes}`} />
    )
}

export default Input