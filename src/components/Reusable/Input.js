import { getBgColor, getTextColor } from '../../utils/theme.util'
import { useTheme } from '../../contexts/theme.context'

const Input = (props) => {
    const { theme } = useTheme()

    return (
        <input type={props.type} className={`input ${getBgColor(theme)} ${getTextColor(theme)} ${props.classes}`} placeholder={props.placeholder} />
    )
}

export default Input