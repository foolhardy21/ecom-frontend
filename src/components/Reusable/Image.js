
const Image = (props) => {

    return (
        <img srcSet={props.srcSet} alt={props.alt} sizes={props.sizes} />
    )
}

export default Image