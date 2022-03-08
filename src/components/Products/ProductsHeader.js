
const ProductsHeader = () => {

    return (
        <header id="pg-header" class="flx flx-maj-even flx-min-center bg-primary pd-top-md pd-btm-md">
            <p class="txt-lg txt-primary txt-ucase">sneakerstore</p>
            <div id="pg-searchbar" class="flx bg-primary">
                <input id="input-search" type="text" placeholder="Search" class="input input-s bg-primary txt-md pd-xs" />
                <span id="btn-search" class="material-icons icon-primary pd-xs">
                    search
                </span>
            </div>
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

export default ProductsHeader