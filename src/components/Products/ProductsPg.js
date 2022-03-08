import ProductsFilter from "./ProductsFilter"
import ProductsHeader from "./ProductsHeader"
import ProductsSection from "./ProductsSection"

const ProductsPg = () => {

    return (
        <div>

            <ProductsHeader />

            <div class="flx flx-row">

                <ProductsFilter />

                <button id="btn-filters" class="btn-solid bg-secondary flx flx-center pd-xs pos-sticky t-0">
                    <span class="material-icons icon-secondary">
                        filter_alt
                    </span>
                </button>

                <main id="main-prdlist" class="bg-primary flx flx-column flx-min-center">

                    <p class="txt-lg txt-cap txt-primary pd-top-lg pd-btm-lg">sneakers</p>

                    <ProductsSection />

                </main>

            </div>

        </div>
    )
}

export default ProductsPg