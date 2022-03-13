import { useTheme } from "../../contexts/theme.context"
import { getBgColor } from "../../utils"

const Header = (props) => {
    const { theme } = useTheme()

    return (

        <header id="pg-header" className={`flx flx-maj-even flx-min-center pd-top-md pd-btm-md ${getBgColor(theme)}`}>

            {props.children}

        </header>
    )
}

export default Header