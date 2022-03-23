import { useTheme } from "../../contexts/theme-context"
import { getIconColor } from '../../utils'

const Icon = ({ id, classes, children }) => {
    const { theme } = useTheme()

    return (
        <span id={id} className={`material-icons ${getIconColor(theme)} ${classes}`} >
            {children}
        </span>
    )
}

export default Icon