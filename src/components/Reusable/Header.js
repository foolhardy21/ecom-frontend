import { useTheme } from "../../context/theme-context"
import { getBgColor } from "../../utils/theme-util"

const Header = ({ children }) => {
    const { theme } = useTheme()

    return (
        <header id="pg-header" className={`flx flx-maj-even flx-min-center pd-top-md pd-btm-md ${getBgColor(theme)}`}>
            {children}
        </header>
    )
}

export default Header
