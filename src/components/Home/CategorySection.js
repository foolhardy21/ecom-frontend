import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, Image, Section, Text } from "components/Reusable"
import { useTheme, useFilters, useProducts } from "contexts"
import { getBgColor } from "utils"
import { ACTION_ADD_BRAND } from "utils/constants.util"
import styles from './home.module.css'

const CategorySection = () => {
    const [categories, setCategories] = useState([])
    const { getCategories } = useProducts()
    const { theme } = useTheme()
    const { filterDispatch } = useFilters()

    useEffect(() => {
        (async () => {
            const categories = await getCategories()
            if (!(categories === 404 || categories === 500)) {
                setCategories(categories)
            }
        })()
    }, [])

    function handleCategoryClick(categoryName) {
        filterDispatch({ type: ACTION_ADD_BRAND, payload: categoryName })
    }

    return (

        <Section classes={`grid grid-maxcols-4 ${styles.gridCategory}`}>
            {
                categories.map(({ _id, categoryName, categoryImg: { srcSet, sizes, alt } }) =>

                    <Link key={_id} to='/products'>
                        <Card onClick={() => handleCategoryClick(categoryName)} classes="pos-relative">

                            <Image srcSet={srcSet} sizes={sizes} alt={alt} />

                            <Text classes={`pos-absolute tr-1 ${getBgColor(theme)} txt-md`}>{categoryName}</Text>

                        </Card>
                    </Link>

                )
            }
        </Section>

    )
}

export default CategorySection