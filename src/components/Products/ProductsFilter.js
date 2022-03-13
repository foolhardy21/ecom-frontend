import { Button, Text } from "../Reusable"
import { useProducts } from "../../contexts/products.context"
import { useEffect } from "react"
import { useFilters } from "../../contexts/filters.context"
import { isInputIncluded, isSortInputIncluded } from "../../utils/filterChecks.util"

const ProductsFilter = () => {
    const { filterProducts } = useProducts()
    const { filterState, filterDispatch } = useFilters()

    function resetFilters() {
        filterDispatch({ type: 'RESET' })
    }

    function handleGenderChecks(e) {
        const checkedGender = e.target.value


        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_GENDER', payload: checkedGender })
        }
        else {
            filterDispatch({ type: 'ADD_GENDER', payload: checkedGender })
        }
    }

    function handleRatingCheck(e) {
        const checkedRating = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_RATING', payload: checkedRating })
        }
        else {
            filterDispatch({ type: 'ADD_RATING', payload: checkedRating })
        }
    }

    function handleSizeCheck(e) {
        const checkedSize = Number(e.target.value)

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_SIZE', payload: checkedSize })
        }
        else {
            filterDispatch({ type: 'ADD_SIZE', payload: checkedSize })
        }
    }

    function handleBrandCheck(e) {
        const checkedBrand = e.target.value

        if (!e.target.checked) {
            filterDispatch({ type: 'REMOVE_BRAND', payload: checkedBrand })
        }
        else {
            filterDispatch({ type: 'ADD_BRAND', payload: checkedBrand })
        }
    }

    function handlePriceChange(e) {
        filterDispatch({ type: 'UPDATE_PRICE', payload: Number(e.target.value) })
    }

    function handlePriceSortOrderChange(e) {
        filterDispatch({ type: 'UPDATE_SORTORDER', payload: e.target.value })
    }

    useEffect(() => {
        const filtersObj = { ...filterState }
        filterProducts(filtersObj)
    }, [filterState])


    return (

        <aside className="aside-filters txt-primary pos-sticky t-0 z-5 pd-s">


            <div className='flx flx-maj-end'>

                <Button onClick={resetFilters} classes='btn-txt txt-md txt-lcase txt-primary pd-xs'>
                    reset
                </Button>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt txt-cap mg-btm-xs'>least price</Text>

                <input id="filter-price" type='range' value={filterState.filterPrice} min='5000' max='50000' onChange={(e) => handlePriceChange(e)} />

                <Text id="filter-priceval" className="txt-md txt-primary">{filterState.filterPrice}</Text>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    sort by price
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-asc'
                        onChange={(e) => handlePriceSortOrderChange(e)}
                        value='asc' checked={isSortInputIncluded('asc', filterState.priceSortOrder)} className='mg-right-xs' />

                    <label htmlFor='price-asc' className='txt-cap'>low to high</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-desc' onChange={(e) => handlePriceSortOrderChange(e)} value='dsc' checked={isSortInputIncluded('dsc', filterState.priceSortOrder)} className='mg-right-xs' />

                    <label htmlFor='price-desc' className='txt-cap'>high to low</label>

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

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='nike-category' value='nike' checked={isInputIncluded('nike', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='nike-category' className='txt-cap'>nike</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='adidas-category' value='adidas' checked={isInputIncluded('adidas', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='adidas-category' className='txt-cap'>adidas</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='aj-category' value='air jordan' checked={isInputIncluded('air jordan', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='aj-category' className='txt-cap'>air jordan</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='yz-category' value='yeezy' checked={isInputIncluded('yeezy', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='yz-category' className='txt-cap'>yeezy</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='converse-category' value='converse' checked={isInputIncluded('converse', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='converse-category' className='txt-cap'>converse</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='nbalance-category' value='new balance' checked={isInputIncluded('new balance', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='nbalance-category' className='txt-cap'>new balance</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='vans-category' value='vans' checked={isInputIncluded('vans', filterState.brandChecks)} onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='vans-category' className='txt-cap'>vans</label>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>size</Text>

                <div className="grid grid-maxcols-3">

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-14' name="size-group" value='14' checked={isInputIncluded(14, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-14' className="txt-cap">14</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-13' name="size-group" value='13' checked={isInputIncluded(13, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-13' className="txt-cap">13</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-12' name="size-group" value='12' checked={isInputIncluded(12, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-12' className="txt-cap">12</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-11' name="size-group" value='11' checked={isInputIncluded(11, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-11' className="txt-cap">11</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-10' name="size-group" value='10' checked={isInputIncluded(10, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-10' className="txt-cap">10</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-9' name="size-group" value='9' checked={isInputIncluded(9, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-9' className="txt-cap">9</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-8' name="size-group" value='8' checked={isInputIncluded(8, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-8' className="txt-cap">8</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-7' name="size-group" value='7' checked={isInputIncluded(7, filterState.sizeChecks)} onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-7' className="txt-cap">7</label>

                    </div>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>rating</Text>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='5-atleast' name="rating-group" value='5' checked={isInputIncluded(5, filterState.ratingChecks)} onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='5-atleast' className="txt-cap">5 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='4-atleast' name="rating-group" value='4' checked={isInputIncluded(4, filterState.ratingChecks)} onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='4-atleast' className="txt-cap">4 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='3-atleast' name="rating-group" value='3' checked={isInputIncluded(3, filterState.ratingChecks)} onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='3-atleast' className="txt-cap">3 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='2-atleast' name="rating-group" value='2' checked={isInputIncluded(2, filterState.ratingChecks)} onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='2-atleast' className="txt-cap">2 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='1-atleast' name="rating-group" value='1' checked={isInputIncluded(1, filterState.ratingChecks)} onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='1-atleast' className="txt-cap">1 star</label>

                </div>

            </div>

        </aside>
    )
}

export default ProductsFilter