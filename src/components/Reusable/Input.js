import { useTheme } from "../../contexts/theme.context"
import { getBgColor, getTextColor } from "../../utils"

const Input = (props) => {
    const { theme } = useTheme()

    return (

        <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className={`${getTextColor(theme)} ${getBgColor(theme)} ${props.classes}`} />

    )
}

export default Input