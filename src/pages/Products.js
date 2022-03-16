import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Icon, Text } from '../components/Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from '../components/Products'
import { FilterProvider, useProducts, useTheme } from '../contexts'
import { getBgColor, getTextColor } from '../utils'
import '../components/Products/products.css'

const Products = () => {
    const [filterVisibility, setFilterVisibility] = useState(false)
    const { productsDispatch } = useProducts()

    const { theme } = useTheme()

    useEffect(() => {
        async function getAllProducts() {
            try {
                const response = await axios.get('/api/products')
                return response.data.products
            } catch (e) {
                console.log(e)
            }
        }
        (async () => {
            const allProducts = await getAllProducts()
            productsDispatch({ type: 'INIT_PRODUCTS', payload: allProducts })
        })()
    }, [])

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <ProductsHeader />

            <FilterProvider>
                <div className="flx flx-row">

                    {
                        filterVisibility &&
                        <ProductsFilter />
                    }


                    <Button id="btn-filters" onClick={() => setFilterVisibility(!filterVisibility)} classes="btn-solid bg-secondary flx flx-center pd-xs pos-sticky t-0">

                        <Icon classes={`icon-secondary`}>
                            filter_alt
                        </Icon>

                    </Button>

                    <main id="main-prdlist" className={`${getBgColor(theme)} flx flx-column flx-min-center`}>

                        <Text classes={`txt-lg txt-cap ${getTextColor(theme)} pd-top-lg pd-btm-lg`}>sneakers</Text>

                        <ProductsSection />

                    </main>

                </div>
            </FilterProvider>

        </div>
    )
}

export default Products