
const Input = (props) => {

    return (
        <input id={props.id} type={props.type} placeholder={props.placeholder} className={`input ${props.classes}`} />
    )
}

export default Input