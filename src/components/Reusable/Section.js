
const Section = (props) => {

    return (
        <section id={props.id} className={props.classes}>
            {props.children}
        </section>
    )
}

export default Section