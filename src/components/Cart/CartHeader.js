
const CardHeader = () => {

    return (
        <header id="pg-header" class='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>
            <span class="txt-ucase txt-primary txt-lg">
                sneakerstore
            </span>
            <nav class='flx flx-min-center'>
                <span class='material-icons icon-primary mg-right-xs'>
                    favorite
                </span>
                <span class='material-icons icon-primary mg-right-s pos-relative'>
                    shopping_cart
                    <div
                        class="pos-absolute tl-60 badge-size-s txt-md pd-xs flx flx-center brd-full txt-secondary bg-secondary">
                        2
                    </div>
                </span>
                <button class='btn-txt txt-primary bg-primary txt-cap txt-md pd-xs'>
                    logout
                </button>
            </nav>
            <span id="btn-theme" class="material-icons pos-absolute tr-1 icon-primary pd-s">
                bedtime
            </span>
        </header>

    )

}

export default CardHeader