
const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.classes}>
            {props.text} {props.children}
        </button>
    )
}

export default Button