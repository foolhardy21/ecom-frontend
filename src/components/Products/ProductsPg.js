import '../../stylesheet/products-pg.css'
import { useState } from 'react'
import { FilterProvider } from '../../contexts/filters.context'
import { Button, Icon, Text } from '../Reusable'
import { ProductsHeader, ProductsFilter, ProductsSection } from './'
import { getBgColor, getTextColor } from '../../utils/theme.util'
import { useTheme } from '../../contexts/theme.context'

const ProductsPg = () => {
    const [filterVisibility, setFilterVisibility] = useState(false)
    const { theme } = useTheme()

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <ProductsHeader />

            <div className="flx flx-row">

                <FilterProvider>
                    {
                        filterVisibility &&
                        <ProductsFilter />
                    }

                </FilterProvider>

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

        </div>
    )
}

export default ProductsPg