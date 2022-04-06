import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTheme, useFilters, useProducts } from "../../contexts"
import { getBgColor } from "../../utils"
import { ACTION_ADD_BRAND } from "../../utils/constants.util"
import { Card, Image, Section, Text } from "../Reusable"
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
                categories.map(category => <Link key={category._id} to='/products'>
                    <Card onClick={() => handleCategoryClick(category.categoryName)} classes="pos-relative">

                        <Image srcSet={category.categoryImg.srcSet} sizes={category.categoryImg.sizes} alt={category.categoryImg.alt} />

                        <Text classes={`pos-absolute tr-1 ${getBgColor(theme)} txt-md`}>{category.categoryName}</Text>

                    </Card>
                </Link>
                )
            }

        </Section>

    )
}

export default CategorySection