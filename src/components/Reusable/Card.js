import { useTheme } from "../../contexts"

const Card = ({ id, children, classes }) => {
    const { theme } = useTheme()

    return (
        <article id={id} className={`card-dim card-shadow-xs ${theme === 'dark' && 'b-solid b-secondary'} ${classes}`}>
            {children}
        </article>
    )
}

export default Card