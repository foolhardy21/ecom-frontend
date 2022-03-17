import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTheme, useFilters } from "../../contexts"
import { getBgColor } from "../../utils"
import { Card, Image, Section, Text } from "../Reusable"

const CategorySection = () => {
    const { theme } = useTheme()
    const { filterDispatch } = useFilters()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await axios.get('/api/categories')
                return response.data.categories
            } catch (e) {
                console.log(e)
            }
        }
        (async () => {
            const categories = await getCategories()
            setCategories(categories)
        })()
    }, [])

    function handleCategoryClick(categoryName) {
        filterDispatch({ type: 'ADD_BRAND', payload: categoryName })
    }

    return (

        <Section id='grid-category' classes="grid grid-maxcols-4">

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