import { useTheme } from "../../contexts/theme.context"
import { getBgColor } from "../../utils/theme.util"

const Header = (props) => {
    const { theme } = useTheme()

    return (
        <header id="header-pg" className={`${getBgColor(theme)} flx flx-maj-even flx-min-center pd-top-md pd-btm-md`}>
            {props.children}
        </header>
    )
}

export default Header