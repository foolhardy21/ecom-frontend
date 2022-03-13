import { useTheme } from "../../contexts/theme.context"

const Card = (props) => {
    const { theme } = useTheme()

    return (

        <article className={`${props.classes} ${theme === 'dark' && 'b-solid b-secondary'} card-dim card-shadow-xs`}>

            {props.children}

        </article>
    )
}

export default Card