import { useState, useEffect } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { Button, Icon, Text, Alert, Main } from 'components/Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from 'components/Products'
import { useFilters, useProducts, useTheme } from 'contexts'
import { getBgColor, getTextColor } from 'utils'
import { ACTION_FILTER_PRODUCTS, ACTION_INIT_PRODUCTS, ALERT_TYPE_ERROR } from 'utils/constants.util'
import styles from 'components/Products/products.module.css'
import useTitle from 'hooks/useTitle'

const Products = () => {
    useTitle('Products')
    const [filterVisibility, setFilterVisibility] = useState(false)
    const { getProducts, productsDispatch, productsState, showProductsAlert } = useProducts()
    const { filterState } = useFilters()
    const { theme } = useTheme()

    useEffect(() => {
        (async () => {
            const getProductsResponse = await getProducts()
            if (getProductsResponse === 500) {
                showProductsAlert('could not fetch products', ALERT_TYPE_ERROR)
            } else {
                if (filterState.brandChecks.length > 0) {
                    productsDispatch({ type: ACTION_FILTER_PRODUCTS, payload: { allProducts: getProductsResponse, filterState } })
                } else {
                    productsDispatch({ type: ACTION_INIT_PRODUCTS, payload: getProductsResponse })
                }
            }
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

            <div className='pos-relative mg-xs'>
                {
                    productsState.alert.message && <Alert type={productsState.alert.type}>{productsState.alert.message}</Alert>
                }
            </div>

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