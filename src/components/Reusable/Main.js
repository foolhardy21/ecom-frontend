import { useTheme } from "../../contexts/theme.context"
import { getBgColor } from "../../utils/theme.util"

const Main = (props) => {
    const { theme } = useTheme()

    return (
        <main className={`flx flx-center ${getBgColor(theme)} ${props.classes}`}>
            {props.children}
        </main>
    )
}

export default Main