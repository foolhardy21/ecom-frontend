import { useTheme } from "../../contexts/theme.context"

const Card = ({ children, classes }) => {
    const { theme } = useTheme()

    return (
        <article className={`card-dim card-shadow-xs ${theme === 'dark' && 'b-solid b-secondary'} ${classes}`}>
            {children}
        </article>
    )
}

export default Card