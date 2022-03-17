import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Icon, Text } from '../components/Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from '../components/Products'
import { useNotification, useProducts, useTheme } from '../contexts'
import { getBgColor, getTextColor } from '../utils'
import '../components/Products/products.css'

const Products = () => {
    const [filterVisibility, setFilterVisibility] = useState(false)
    const { productsDispatch } = useProducts()
    const { theme } = useTheme()
    const { notification } = useNotification()

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
    }, [productsDispatch])

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <ProductsHeader />

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

                    <div className='flx flx-center'>

                        {
                            (notification === 'added to cart.' || notification === 'added to wishlist.') &&
                            <div className='flx flx-maj-start flx-min-center txt-md txt-primary bg-success alert-size-s pd-xs'>
                                <Icon classes='icon-primary mg-right-s'>
                                    check_circle
                                </Icon>
                                <Text classes='txt-md txt-cap'>{notification}</Text>
                            </div>
                        }
                        {
                            (notification === 'could not add to cart.' || notification === 'could not add to wishlist.') &&
                            <div className='flx flx-maj-start flx-min-center txt-md txt-primary bg-err alert-size-s pd-xs'>
                                <Icon classes='icon-primary mg-right-s'>
                                    error
                                </Icon>
                                <Text classes='txt-md txt-cap'>{notification}</Text>
                            </div>
                        }
                    </div>

                    <Text classes={`txt-lg txt-cap ${getTextColor(theme)} pd-top-lg pd-btm-lg`}>sneakers</Text>

                    <ProductsSection />

                </main>

            </div>


        </div>
    )
}

export default Products