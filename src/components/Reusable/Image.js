const Image = ({ srcSet, alt, sizes, classes }) => {

    return (
        <img srcSet={srcSet} alt={alt} sizes={sizes} className={classes} />
    )
}

export default Image