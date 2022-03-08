import { useProducts } from "../../contexts/products.context"
import ProductArticle from "./ProductArticle"

const ProductsSection = () => {
    const { productsState } = useProducts()

    return (
        <section className="grid grid-maxcols-4">
            {
                productsState.map(prd => <ProductArticle key={prd.id} prd={prd} />)
            }
        </section>
    )
}

export default ProductsSection