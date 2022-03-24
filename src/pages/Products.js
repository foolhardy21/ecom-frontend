import { useState, useEffect } from 'react'
import { Button, Icon, Text, Alert, Main } from '../components/Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from '../components/Products'
import { useProducts, useTheme } from '../contexts'
import { getBgColor, getTextColor } from '../utils'
import '../components/Products/products.css'

const Products = () => {
    const [filterVisibility, setFilterVisibility] = useState(false)
    const { getProducts, productsDispatch, productsState, showProductsAlert } = useProducts()
    const { theme } = useTheme()

    useEffect(() => {
        (async () => {
            productsDispatch({ type: 'SET_LOADING' })
            const getProductsResponse = await getProducts()
            if (getProductsResponse === 500) {
                showProductsAlert('could not fetch products', 'error')
            } else if (getProductsResponse) {
                productsDispatch({ type: 'REMOVE_LOADING' })
                productsDispatch({ type: 'INIT_PRODUCTS', payload: getProductsResponse })
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
                        productsState.alert.type === 'error'
                            ? <Alert classes='bg-err'>{productsState.alert.message}</Alert>
                            : productsState.alert.type === 'success'
                                ? <Alert classes='bg-success'>{productsState.alert.message}</Alert>
                                : ''
                    }

                    <Text classes={`txt-lg txt-cap ${getTextColor(theme)} pd-top-lg pd-btm-lg`}>sneakers</Text>

                    {
                        productsState.loading ? <Text classes='txt-xlg txt-600 txt-success txt-cap'>loading...</Text> : <ProductsSection />
                    }

                </Main>

            </div>


        </div>
    )
}

export default Products