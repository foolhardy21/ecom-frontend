import { useTheme } from '../../contexts'

const Card = ({ classes, children }) => {
    const { theme } = useTheme()

    return (
        <article className={`card-dim card-shadow-xs ${theme === 'dark' && 'b-solid b-secondary'} ${classes}`}>
            {children}
        </article>
    )
}

export default Card
