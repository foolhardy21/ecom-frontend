import { Text } from "components/Reusable"
import { getTextColor } from "utils"
import { useProducts, useTheme } from "../../contexts"
import { ProductCard } from "./"
import styles from './products.module.css'

const ProductsSection = () => {
    const { theme } = useTheme()
    const { productsState: { products } } = useProducts()

    return (
        <section className={`grid grid-maxcols-4 ${styles.gridProducts}`}>
            {
                products.length > 0 ? products?.map(product => <ProductCard key={product._id} prd={product} />) : <Text classes={`${getTextColor(theme)} txt-lg txt-cap`}>no products available</Text>
            }
        </section>
    )
}

export default ProductsSection