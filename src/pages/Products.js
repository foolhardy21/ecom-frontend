import { useState, useEffect } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { Button, Icon, Text, Alert, Main } from 'components/Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from 'components/Products'
import { useProducts, useTheme } from 'contexts'
import { getBgColor, getTextColor } from 'utils'
import { ACTION_INIT_PRODUCTS, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from 'utils/constants.util'
import styles from 'components/Products/products.module.css'

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


                <Button onClick={() => setFilterVisibility(!filterVisibility)} classes={`${styles.btnFilters} btn-solid bg-secondary flx flx-center pd-xs pos-sticky t-0`}>

                    <Icon classes='icon-secondary'>
                        filter_alt
                    </Icon>

                </Button>

                <Main classes={`${getBgColor(theme)} ${styles.mainPrdlist} flx flx-column flx-min-center`}>

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
                            ? <BarLoader width={300} height={4} />
                            : <ProductsSection />
                    }

                </Main>

            </div>


        </div>
    )
}

export default Products