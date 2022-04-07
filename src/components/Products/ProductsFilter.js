import { useEffect, useState } from "react"
import { Button, Label, Text } from "components/Reusable"
import { useProducts, useTheme, useFilters } from "contexts"
import { getTextColor, getBgColor, isInputIncluded, isSortInputIncluded, getRatingFilterArray, getSizeFilterArray } from "utils"
import { ACTION_FILTER_PRODUCTS, ALERT_TYPE_ERROR } from "utils/constants.util"
import styles from './products.module.css'

const ProductsFilter = () => {
    const { productsDispatch, getProducts, showProductsAlert, getCategories } = useProducts()
    const { filterState, handleBrandCheck, handleGenderChecks, handlePriceChange, handlePriceSortOrderChange, handleRatingCheck, handleSizeCheck, resetFilters } = useFilters()
    const { theme } = useTheme()
    const [categories, setCategories] = useState([])
    let sizeArr = getSizeFilterArray()
    let ratingArr = getRatingFilterArray()

    useEffect(() => {
        (async () => {
            const getProductsResponse = await getProducts()
            if (getProductsResponse === 500) {
                showProductsAlert('could not get products', ALERT_TYPE_ERROR)
            } else {
                productsDispatch({ type: ACTION_FILTER_PRODUCTS, payload: { allProducts: getProductsResponse, filterState } })
            }
        })()
    }, [filterState])

    useEffect(() => {
        (async () => {
            const categories = await getCategories()
            if (categories === 404 || categories === 500) {
                showProductsAlert('could not get categories', ALERT_TYPE_ERROR)
            } else {
                setCategories(categories)
            }
        })()
    }, [])

    return (

        <aside className={`${styles.asideFilters} ${getTextColor(theme)} ${getBgColor(theme)} pos-sticky t-0 z-5 pd-s`}>

            <div className='flx flx-maj-end'>

                <Button onClick={resetFilters} classes='btn-txt txt-md txt-lcase txt-primary pd-xs'>
                    reset all
                </Button>

            </div>

            <div className='mg-btm-lg'>

                <Text classes='txt txt-cap mg-btm-xs'>least price</Text>

                <input id="filter-price" type='range' value={filterState.filterPrice} min='5000' max='50000' onChange={(e) => handlePriceChange(e)} />

                <Text classes="txt-md txt-primary">{filterState.filterPrice}</Text>

            </div>

            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    sort by price
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-asc'
                        value='asc' onChange={(e) => handlePriceSortOrderChange(e)} checked={isSortInputIncluded('asc', filterState.priceSortOrder)} className='mg-right-xs' />

                    <Label htmlFor='price-asc' classes='txt-cap txt-md'>low to high</Label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-desc' onChange={(e) => handlePriceSortOrderChange(e)} value='dsc' checked={isSortInputIncluded('dsc', filterState.priceSortOrder)} className='mg-right-xs' />

                    <Label htmlFor='price-desc' classes='txt-cap txt-md'>high to low</Label>

                </div>

            </div>

            <div className='mg-btm-lg flx flx-column'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    gender
                </Text>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='gender-m' value='male' checked={isInputIncluded('male', filterState.genderChecks)} onChange={(e) => handleGenderChecks(e)} className='mg-right-xs' />

                    <label htmlFor='gender-m' className='txt-cap'>men</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='gender-f' value='female' checked={isInputIncluded('female', filterState.genderChecks)} onChange={(e) => handleGenderChecks(e)} className='mg-right-xs' />

                    <label htmlFor='gender-f' className='txt-cap'>women</label>

                </div>

            </div>

            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    brands
                </Text>

                {
                    categories.map(({ categoryName, id }) => <div key={id} className='flx flx-min-center'>

                        <input type='checkbox' id={`${categoryName}-category`} value={categoryName} checked={isInputIncluded(categoryName, filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                        <label htmlFor={`${categoryName}-category`} className='txt-cap'>{categoryName}</label>

                    </div>)
                }

            </div>

            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>size</Text>

                <div className="grid grid-maxcols-3">

                    {
                        sizeArr.map(size => <div key={size} className='flx flx-min-center'>

                            <input type='checkbox' id={`size-${size}`} name="size-group" value={size} checked={isInputIncluded(size, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                            <label htmlFor={`size-${size}`} className="txt-cap">{size}</label>

                        </div>)
                    }

                </div>

            </div>

            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>rating</Text>

                {
                    ratingArr.map(rating => <div key={rating} className='flx flx-min-center'>

                        <input type='checkbox' id={`${rating}-atleast`} name="rating-group" value={rating} checked={isInputIncluded(rating, filterState.ratingChecks)} onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                        <label htmlFor={`${rating}-atleast`} className="txt-cap">{`${rating} stars`}</label>

                    </div>)
                }

            </div>

        </aside>
    )
}

export default ProductsFilter