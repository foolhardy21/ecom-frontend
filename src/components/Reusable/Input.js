
const Input = (props) => {

    return (
        <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className={props.classes} />
    )
}

export default Input