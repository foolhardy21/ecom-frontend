const Image = ({ srcSet, alt, sizes }) => {

    return (
        <img srcSet={srcSet} alt={alt} sizes={sizes} />
    )
}

export default Image
