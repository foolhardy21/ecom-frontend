
const Card = (props) => {

    return (
        <div className={`card-dim card-shadow-xs ${props.classes}`}>
            {props.children}
        </div>
    )
}

export default Card