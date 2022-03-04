
const Text = (props) => {

    return (
        <p id={props.id} className={props.classes}>
            {props.text}
        </p>
    )
}

export default Text