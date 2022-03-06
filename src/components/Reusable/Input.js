
const Input = (props) => {

    return (
        <input type={props.type} placeholder={props.placeholder} className={`input ${props.classes}`} />
    )
}

export default Input