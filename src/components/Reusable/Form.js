
const Form = (props) => {

    return (
        <form className={props.classes}>
            {props.children}
        </form>
    )
}

export default Form