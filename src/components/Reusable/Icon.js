
const Icon = (props) => {

    return (
        <span id={props.id} className={`material-icons ${props.classes}`} >
            {props.iconName}
        </span>
    )
}

export default Icon