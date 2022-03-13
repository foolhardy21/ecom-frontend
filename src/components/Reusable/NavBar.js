
const NavBar = (props) => {

    return (
        <nav id={props.id} style={props.style} className={props.classes}>
            {props.children}
        </nav>
    )
}

export default NavBar