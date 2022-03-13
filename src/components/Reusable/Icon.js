import { useTheme } from "../../context/theme-context"
import { getIconColor } from '../../utils'

const Icon = (props) => {
    const { theme } = useTheme()

    return (
        <span id={props.id} className={`material-icons ${getIconColor(theme)} ${props.classes}`} >
            {props.children}
        </span>
    )
}

export default Icon