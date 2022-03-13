import { useTheme } from "../../context/theme-context"
import { getBgColor } from "../../utils/theme-util"

const Main = (props) => {
    const { theme } = useTheme()

    return (
        <main style={{
            minWidth: '100vw',
        }} className={`${getBgColor(theme)} ${props.classes}`}>

            {props.children}

        </main>
    )
}

export default Main