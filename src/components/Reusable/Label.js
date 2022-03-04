
const Label = (props) => {

    return (
        <label htmlFor={props.for} className={props.classes} >
            {props.text}
        </label>
    )
}

export default Label