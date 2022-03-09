import { Button, Text } from "../Reusable"
import { useProducts } from "../../contexts/products.context"
import { useEffect, useState } from "react"

const ProductsFilter = () => {
    const [filterPrice, setFilterPrice] = useState(5000)
    const [priceSortOrder, setPriceSortOrder] = useState('')
    const [gender, setGender] = useState('')
    const [brandChecks, setBrandChecks] = useState([])
    const { productsDispatch } = useProducts()

    // 'nike','adidas', 'air jordan', 'yeezy', 'converse', 'new balance', 'vans'

    // reset every filter on reset

    function handleBrandCheck(e) {

        (brandChecks.indexOf(e.target.value) !== -1)
            ? setBrandChecks(brandChecks.filter(brand => brand !== e.target.value))
            : setBrandChecks([...brandChecks, e.target.value])
    }

    useEffect(() => {
        productsDispatch({
            type: 'FILTER_PRICE', payload: filterPrice
        })
    }, [filterPrice, productsDispatch])

    useEffect(() => {
        priceSortOrder === 'asc' ?
            productsDispatch({ type: 'SORT_ASC' }) :
            priceSortOrder === 'dsc' && productsDispatch({ type: 'SORT_DSC' })

    }, [priceSortOrder, productsDispatch])

    useEffect(() => {
        gender === 'male' ?
            productsDispatch({ type: 'FILTER_GENDER', payload: gender }) :
            gender === 'female' && productsDispatch({ type: 'FILTER_GENDER', payload: gender })

    }, [gender, productsDispatch])

    useEffect(() => {
        brandChecks.length > 0 && productsDispatch({ type: 'FILTER_BRAND', payload: brandChecks })

    }, [brandChecks, productsDispatch])


    return (

        <aside className="aside-filters txt-primary pos-sticky t-0 z-5 pd-s">


            <div className='flx flx-maj-end'>

                <Button onClick={() => productsDispatch({ type: 'INIT' })} classes='btn-txt txt-md txt-lcase txt-primary pd-xs'>
                    reset
                </Button>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt txt-cap mg-btm-xs'>least price</Text>

                <input id="filter-price" type='range' min='5000' max='50000' onChange={(e) => setFilterPrice(Number(e.target.value))} />

                <Text id="filter-priceval" className="txt-md txt-primary">{filterPrice}</Text>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    sort by price
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-asc'
                        onChange={(e) => setPriceSortOrder(e.target.value)} value='asc' className='mg-right-xs' />

                    <label htmlFor='price-asc' className='txt-cap'>low to high</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' name='price-grp' id='price-desc' onChange={(e) => setPriceSortOrder(e.target.value)} value='dsc' className='mg-right-xs' />

                    <label htmlFor='price-desc' className='txt-cap'>high to low</label>

                </div>

            </div>


            <div className='mg-btm-lg flx flx-column'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    gender
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' id='gender-m' name="gender-grp" value='male' onChange={(e) => setGender(e.target.value)} className='mg-right-xs' />

                    <label htmlFor='gender-m' className='txt-cap'>men</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='gender-f' name="gender-grp" value='female' onChange={(e) => setGender(e.target.value)} className='mg-right-xs' />

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

                        <input type='checkbox' id='size-14' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-14' className="txt-cap">14</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-13' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-13' className="txt-cap">13</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-12' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-12' className="txt-cap">12</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-11' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-11' className="txt-cap">11</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-10' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-10' className="txt-cap">10</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-9' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-9' className="txt-cap">9</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-8' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-8' className="txt-cap">8</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-7' name="size-group" className='mg-right-xs' />

                        <label htmlFor='size-7' className="txt-cap">7</label>

                    </div>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>rating</Text>

                <div className='flx flx-min-center'>

                    <input type='radio' id='4-atleast' name="rating-group" className='mg-right-xs' />

                    <label htmlFor='4-atleast' className="txt-cap">atleast 4 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='3-atleast' name="rating-group" className='mg-right-xs' />

                    <label htmlFor='3-atleast' className="txt-cap">atleast 3 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='2-atleast' name="rating-group" className='mg-right-xs' />

                    <label htmlFor='2-atleast' className="txt-cap">atleast 2 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='1-atleast' name="rating-group" className='mg-right-xs' />

                    <label htmlFor='1-atleast' className="txt-cap">atleast 1 star</label>

                </div>

            </div>

        </aside>
    )
}

export default ProductsFilter