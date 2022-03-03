
const Header = () => {

    return (
        <header id="pg-header" class='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>
            <span class="txt-ucase txt-primary txt-lg">
                sneakerstore
            </span>
            <nav class="flx flx-min-center">
                <span class="material-icons icon-primary mg-right-s">
                    person
                </span>
                <span class="material-icons icon-primary mg-right-s">
                    favorite
                </span>
                <span class="material-icons icon-primary">
                    shopping_cart
                </span>
            </nav>
            <span id="btn-theme" class="material-icons pos-absolute tr-1 icon-primary pd-s">
                bedtime
            </span>

        </header>
    )
}

export default Header