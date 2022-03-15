const Icon = (props) => {
    return (
        <span id={props.id} className={`material-icons ${props.classes}`}>
            {props.children}
        </span>
    )
}

export default Icon
