import { useTheme } from "../../contexts/theme.context"
import { getBorderColor } from "../../utils/theme"

const Card = (props) => {
    const { theme } = useTheme()

    return (

        <article className={`${props.classes} ${theme === 'dark' && 'b-solid'} ${getBorderColor(theme)} card-dim card-shadow-xs`}>

            {props.children}

        </article>
    )
}

export default Card