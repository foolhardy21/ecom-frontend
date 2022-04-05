import { useState, useEffect } from 'react'
import { Button, Icon, Text, Alert, Main } from '../components/Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from '../components/Products'
import { useProducts, useTheme } from '../contexts'
import { getBgColor, getTextColor } from '../utils'
import '../components/Products/products.css'
import { ACTION_INIT_PRODUCTS, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from '../utils/constants.util'

const Products = () => {
    const [filterVisibility, setFilterVisibility] = useState(false)
    const { getProducts, productsDispatch, productsState, showProductsAlert } = useProducts()
    const { theme } = useTheme()

    useEffect(() => {
        (async () => {
            const getProductsResponse = await getProducts()
            if (getProductsResponse === 500) {
                showProductsAlert('could not fetch products', ALERT_TYPE_ERROR)
            } else if (getProductsResponse) {
                productsDispatch({ type: ACTION_INIT_PRODUCTS, payload: getProductsResponse })
            }
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

                    <Icon classes='icon-secondary'>
                        filter_alt
                    </Icon>

                </Button>

                <Main id="main-prdlist" classes={`${getBgColor(theme)} flx flx-column flx-min-center`}>

                    {
                        productsState.alert.type === ALERT_TYPE_ERROR
                            ? <Alert classes='bg-err'>{productsState.alert.message}</Alert>
                            : productsState.alert.type === ALERT_TYPE_SUCCESS
                                ? <Alert classes='bg-success'>{productsState.alert.message}</Alert>
                                : ''
                    }

                    <Text classes={`txt-lg txt-cap ${getTextColor(theme)} pd-top-lg pd-btm-lg`}>sneakers</Text>

                    {
                        productsState.loading
                            ? <Text classes={`txt-xlg txt-600 ${getTextColor(theme)} txt-cap`}>loading...</Text>
                            : <ProductsSection />
                    }

                </Main>

            </div>


        </div>
    )
}

export default Products