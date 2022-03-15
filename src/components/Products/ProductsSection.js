import { useProducts } from "../../contexts"
import { ProductArticle } from "./"

const ProductsSection = () => {
    const { products } = useProducts()

    return (
        <section className="grid grid-maxcols-4">
            {
                products.map(prd => <ProductArticle key={prd.id} prd={prd} />)
            }
        </section>
    )
}

export default ProductsSection