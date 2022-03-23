const NavBar = ({ id, style, classes, children }) => {

    return (
        <nav id={id} style={style} className={classes}>
            {children}
        </nav>
    )
}

export default NavBar