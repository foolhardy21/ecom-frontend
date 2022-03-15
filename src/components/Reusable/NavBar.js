const NavBar = ({ id, style, classes, children }) => {

    return (
        <nav id={id} className={`flx flx-min-center ${classes}`}>
            {children}
        </nav>
    )
}

export default NavBar
