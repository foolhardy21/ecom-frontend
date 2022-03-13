import { useTheme } from '../../context/theme-context'

const Card = (props) => {
    const { theme } = useTheme()

    return (
        <article className={`card-dim card-shadow-xs ${theme === 'dark' && 'b-solid b-secondary'} ${props.classes}`}>
            {props.children}
        </article>
    )
}

export default Card