
const HomeHeader = () => {

    return (
        <header id="pg-header" class='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>
            <span class="txt-ucase txt-primary txt-lg">
                sneakerstore
            </span>
            <nav class='flx flx-min-center'>
                <span class='material-icons icon-primary mg-right-s'>
                    favorite
                </span>
                <span class='material-icons icon-primary mg-right-s'>
                    shopping_cart
                </span>
                <button class='btn-solid txt-ucase txt-secondary bg-secondary pd-xs txt-md mg-right-s'>
                    login
                </button>
            </nav>
            <span id="btn-theme" class="material-icons icon-primary pd-s">
                bedtime
            </span>
        </header>
    )
}

export default HomeHeader