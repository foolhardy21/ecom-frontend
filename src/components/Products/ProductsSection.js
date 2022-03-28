import { useProducts } from "../../contexts"
import { ProductCard } from "./"

const ProductsSection = () => {
    const { productsState } = useProducts()

    return (
        <section id='grid-wishlist' className="grid grid-maxcols-4">
            {
                productsState.products.map(product => <ProductCard key={product._id} prd={product} />)
            }
        </section>
    )
}

export default ProductsSection