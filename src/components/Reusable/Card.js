import { useTheme } from "../../contexts/theme.context"

const Card = (props) => {
    const { theme } = useTheme()

    return (
        <div className={`card-dim card-shadow-xs ${theme === 'dark' ? 'b-solid b-secondary' : ''}  ${props.classes}`}>
            {props.children}
        </div>
    )
}

export default Card