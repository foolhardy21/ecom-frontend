import { useTheme } from "../../contexts/theme.context"
import { getBgColor } from "../../utils/theme.util"

const Main = (props) => {
    const { theme } = useTheme()

    return (
        <main className={`${props.classes} ${getBgColor(theme)}`}>
            {props.children}
        </main>
    )
}

export default Main