
const Card = (props) => {

    return (
        <article className={`${props.classes} card-dim card-shadow-xs`}>
            {props.children}
        </article>
    )
}

export default Card