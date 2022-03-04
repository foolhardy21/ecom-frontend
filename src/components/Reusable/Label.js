
const Label = (props) => {

    return (
        <label htmlFor={props.for} onClick={props.onClick} className={props.classes}>
            {props.children}
        </label>
    )
}

export default Label