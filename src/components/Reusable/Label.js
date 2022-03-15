import { useTheme } from "../../context/theme-context"
import { getTextColor } from "../../utils"

const Label = (props) => {
    const { theme } = useTheme()

    return (
        <label htmlFor={props.for} onClick={props.onClick} className={`${getTextColor(theme)} ${props.classes}`} >
            {props.children}

        </label>
    )
}

export default Label