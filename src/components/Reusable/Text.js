
const Text = (props) => {

    return (
        <p id={props.id} className={props.classes}>
            {props.children}
        </p>
    )
}

export default Text