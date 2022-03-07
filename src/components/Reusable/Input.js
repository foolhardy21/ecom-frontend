
const Input = (props) => {

    return (
        <input type={props.type} className={`input ${props.classes}`} placeholder={props.placeholder} />
    )
}

export default Input