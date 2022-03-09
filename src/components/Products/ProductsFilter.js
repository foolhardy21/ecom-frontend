import { Button, Text } from "../Reusable"
import { useProducts } from "../../contexts/products.context"
import { useEffect } from "react"
import { useFilters } from "../../contexts/filters.context"

const ProductsFilter = () => {
    const { productsDispatch } = useProducts()
    const { filters, setFilters } = useFilters()

    function reset() {
        setFilters({
            filterPrice: 5000,
            priceSortOrder: '',
            genderChecks: [],
            brandChecks: [],
            sizeChecks: [],
            ratingChecks: []
        })
    }

    function handleGenderChecks(e) {
        const checkedGender = e.target.value

        if (filters.genderChecks.indexOf(checkedGender) !== -1) {
            setFilters((f) => ({ ...f, genderChecks: f.genderChecks.filter(gender => gender !== checkedGender) }))
        }
        else {
            setFilters((f) => ({ ...f, genderChecks: [...f.genderChecks, checkedGender] }))
        }
    }

    function handleRatingCheck(e) {
        const checkedRating = Number(e.target.value)

        if (filters.ratingChecks.indexOf(checkedRating) !== -1) {
            setFilters((f) => ({ ...f, ratingChecks: f.ratingChecks.filter(rate => rate !== checkedRating) }))
        }
        else {
            setFilters((f) => ({ ...f, ratingChecks: [...f.ratingChecks, checkedRating] }))
        }
    }

    function handleSizeCheck(e) {
        const checkedSize = Number(e.target.value)

        if (filters.sizeChecks.indexOf(checkedSize) !== -1) {
            setFilters((f) => ({ ...f, sizeChecks: f.sizeChecks.filter(brand => brand !== checkedSize) }))
        }
        else {
            setFilters((f) => ({ ...f, sizeChecks: [...f.sizeChecks, checkedSize] }))
        }
    }

    function handleBrandCheck(e) {

        (filters.brandChecks.indexOf(e.target.value) !== -1)
            ? setFilters((f) => ({ ...f, brandChecks: f.brandChecks.filter(brand => brand !== e.target.value) }))
            : setFilters((f) => ({ ...filters, brandChecks: [...f.brandChecks, e.target.value] }))
    }

    useEffect(() => {
        productsDispatch({ type: 'FILTER', payload: { ...filters } })
    }, [filters, productsDispatch])


    return (

        <aside className="aside-filters txt-primary pos-sticky t-0 z-5 pd-s">


            <div className='flx flx-maj-end'>

                <Button onClick={() => reset()} classes='btn-txt txt-md txt-lcase txt-primary pd-xs'>
                    reset
                </Button>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt txt-cap mg-btm-xs'>least price</Text>

                <input id="filter-price" type='range' min='5000' max='50000' onChange={(e) => setFilters((f) => ({ ...f, filterPrice: Number(e.target.value) }))} />

                <Text id="filter-priceval" className="txt-md txt-primary">{filters.filterPrice}</Text>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    sort by price
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-asc'
                        onChange={(e) => setFilters((f) => ({ ...f, priceSortOrder: e.target.value }))} value='asc' className='mg-right-xs' />

                    <label htmlFor='price-asc' className='txt-cap'>low to high</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-desc' onChange={(e) => setFilters((f) => ({ ...f, priceSortOrder: e.target.value }))} value='dsc' className='mg-right-xs' />

                    <label htmlFor='price-desc' className='txt-cap'>high to low</label>

                </div>

            </div>


            <div className='mg-btm-lg flx flx-column'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    gender
                </Text>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='gender-m' name="gender-grp" value='male' onChange={(e) => handleGenderChecks(e)} className='mg-right-xs' />

                    <label htmlFor='gender-m' className='txt-cap'>men</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='gender-f' name="gender-grp" value='female' onChange={(e) => handleGenderChecks(e)} className='mg-right-xs' />

                    <label htmlFor='gender-f' className='txt-cap'>women</label>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    brands
                </Text>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='nike-category' value='nike' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='nike-category' className='txt-cap'>nike</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='adidas-category' value='adidas' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='adidas-category' className='txt-cap'>adidas</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='aj-category' value='air jordan' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='aj-category' className='txt-cap'>air jordan</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='yz-category' value='yeezy' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='yz-category' className='txt-cap'>yeezy</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='converse-category' value='converse' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='converse-category' className='txt-cap'>converse</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='nbalance-category' value='new balance' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='nbalance-category' className='txt-cap'>new balance</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='vans-category' value='vans' onChange={(e) => handleBrandCheck(e)} className='mg-right-xs' />

                    <label htmlFor='vans-category' className='txt-cap'>vans</label>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>size</Text>

                <div className="grid grid-maxcols-3">

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-14' name="size-group" value='14' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-14' className="txt-cap">14</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-13' name="size-group" value='13' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-13' className="txt-cap">13</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-12' name="size-group" value='12' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-12' className="txt-cap">12</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-11' name="size-group" value='11' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-11' className="txt-cap">11</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-10' name="size-group" value='10' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-10' className="txt-cap">10</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-9' name="size-group" value='9' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-9' className="txt-cap">9</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-8' name="size-group" value='8' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-8' className="txt-cap">8</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-7' name="size-group" value='7' onChange={(e) => handleSizeCheck(e)} className='mg-right-xs' />

                        <label htmlFor='size-7' className="txt-cap">7</label>

                    </div>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>rating</Text>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='5-atleast' name="rating-group" value='5' onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='5-atleast' className="txt-cap">5 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='4-atleast' name="rating-group" value='4' onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='4-atleast' className="txt-cap">4 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='3-atleast' name="rating-group" value='3' onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='3-atleast' className="txt-cap">3 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='2-atleast' name="rating-group" value='2' onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='2-atleast' className="txt-cap">2 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='1-atleast' name="rating-group" value='1' onChange={(e) => handleRatingCheck(e)} className='mg-right-xs' />

                    <label htmlFor='1-atleast' className="txt-cap">1 star</label>

                </div>

            </div>

        </aside>
    )
}

export default ProductsFilter