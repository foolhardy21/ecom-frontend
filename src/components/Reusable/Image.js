
const Image = (props) => {

    return (
        <img srcSet={props.srcSet} alt={props.alt} sizes={props.sizes} className={`${props.classes}`} />


    )
}

export default Image