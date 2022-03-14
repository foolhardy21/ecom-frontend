const Image = props => {

    return (
        <img srcSet={props.srcSet} sizes={props.sizes} alt={props.alt} className={props.classes} />
    )
}

export default Image