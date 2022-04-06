import { useProducts } from "../../contexts"
import { ProductCard } from "./"
import styles from './products.module.css'

const ProductsSection = () => {
    const { productsState } = useProducts()

    return (
        <section className={`grid grid-maxcols-4 ${styles.gridProducts}`}>
            {
                productsState.products.map(product => <ProductCard key={product._id} prd={product} />)
            }
        </section>
    )
}

export default ProductsSection