import { useTheme } from "../../contexts/theme.context"
import { getTextColor } from "../../utils/theme.util"

const Button = ({ onClick, classes, children }) => {

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    )
}

export default Button