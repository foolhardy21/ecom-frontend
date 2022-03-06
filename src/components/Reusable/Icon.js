import { useTheme } from "../../contexts/theme.context"
import { getIconColor } from "../../utils/theme.util"

const Icon = (props) => {
    const { theme } = useTheme()

    return (
        <span className={`material-icons ${getIconColor(theme)} ${props.classes}`}>
            {props.children}
        </span>
    )
}

export default Icon