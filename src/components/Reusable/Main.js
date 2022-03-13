import { getBgColor } from '../../utils'
import { useTheme } from '../../contexts/theme.context'

const Main = (props) => {
    const { theme } = useTheme()

    return (

        <main className={`${props.classes} ${getBgColor(theme)}`}>

            {props.children}

        </main>
    )
}

export default Main