import { useProducts } from "../../contexts"
import { ProductCard } from "./"

const ProductsSection = () => {
    const { productsState } = useProducts()


    return (
        <section id='grid-wishlist' className="grid grid-maxcols-4">
            {
                productsState.map(product => <ProductCard key={product.id} prd={product} />)
                // products.map(prd => <ProductArticle key={prd.id} prd={prd} />)
            }
        </section>
    )
}

export default ProductsSection