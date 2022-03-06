
const Header = (props) => {

    return (
        <header id="pg-header" className={`${props.classes} flx flx-maj-even flx-min-center pd-top-md pd-btm-md`}>
            {props.children}
        </header>
    )
}

export default Header