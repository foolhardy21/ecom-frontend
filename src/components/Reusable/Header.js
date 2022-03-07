
const Header = (props) => {

    return (
        <header id="pg-header" class='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>
            {props.children}
        </header>
    )
}

export default Header