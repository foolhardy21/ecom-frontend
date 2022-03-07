
const NavBar = (props) => {

    return (
        <nav className={`flx flx-min-center ${props.classes}`}>
            {props.children}
        </nav>
    )
}

export default NavBar