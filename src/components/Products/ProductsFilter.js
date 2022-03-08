import { Button, Text } from "../Reusable"

const ProductsFilter = () => {

    return (

        <aside className="aside-filters txt-primary pos-sticky t-0 z-5 pd-s">


            <div className='flx flx-maj-end'>

                <Button classes='btn-txt txt-md txt-lcase txt-primary pd-xs'>
                    reset
                </Button>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt txt-cap mg-btm-xs'>price</Text>

                <input id="filter-price" type='range' min='10000' max='50000' value='20000' />

                <Text id="filter-priceval" className="txt-md txt-primary">20000</Text>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    sort by price
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' id='price-asc' name="price-grp" className='mg-right-xs' />

                    <label for='price-asc' className='txt-cap'>low to high</label>

                </div>

                <div class='flx flx-min-center'>

                    <input type='radio' id='price-desc' name="price-grp" className='mg-right-xs' />

                    <label for='price-desc' className='txt-cap'>high to low</label>

                </div>

            </div>


            <div className='mg-btm-lg flx flx-column'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    gender
                </Text>

                <div className='flx flx-min-center'>

                    <input type='radio' id='gender-m' name="gender-grp" className='mg-right-xs' />

                    <label for='gender-m' className='txt-cap'>men</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='gender-f' name="gender-grp" className='mg-right-xs' />

                    <label for='gender-f' className='txt-cap'>women</label>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>
                    brands
                </Text>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='nike-category' className='mg-right-xs' />

                    <label for='nike-category' className='txt-cap'>nike</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='adidas-category' className='mg-right-xs' />

                    <label for='adidas-category' className='txt-cap'>adidas</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='aj-category' className='mg-right-xs' />

                    <label for='aj-category' className='txt-cap'>air jordan</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='yz-category' className='mg-right-xs' />

                    <label for='yz-category' className='txt-cap'>yeezy</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='converse-category' className='mg-right-xs' />

                    <label for='converse-category' className='txt-cap'>converse</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='nbalance-category' className='mg-right-xs' />

                    <label for='nbalance-category' className='txt-cap'>new balance</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='checkbox' id='vans-category' className='mg-right-xs' />

                    <label for='vans-category' className='txt-cap'>vans</label>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>size</Text>

                <div className="grid grid-maxcols-3">

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-14' name="size-group" className='mg-right-xs' />

                        <label for='size-14' className="txt-cap">14</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-13' name="size-group" className='mg-right-xs' />

                        <label for='size-13' className="txt-cap">13</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-12' name="size-group" className='mg-right-xs' />

                        <label for='size-12' className="txt-cap">12</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-11' name="size-group" className='mg-right-xs' />

                        <label for='size-11' className="txt-cap">11</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-10' name="size-group" className='mg-right-xs' />

                        <label for='size-10' className="txt-cap">10</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-9' name="size-group" className='mg-right-xs' />

                        <label for='size-9' className="txt-cap">9</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-8' name="size-group" className='mg-right-xs' />

                        <label for='size-8' className="txt-cap">8</label>

                    </div>

                    <div className='flx flx-min-center'>

                        <input type='checkbox' id='size-7' name="size-group" className='mg-right-xs' />

                        <label for='size-7' className="txt-cap">7</label>

                    </div>

                </div>

            </div>


            <div className='mg-btm-lg'>

                <Text classes='txt-md txt-cap mg-btm-xs'>rating</Text>

                <div className='flx flx-min-center'>

                    <input type='radio' id='4-atleast' name="rating-group" className='mg-right-xs' />

                    <label for='4-atleast' className="txt-cap">atleast 4 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='3-atleast' name="rating-group" className='mg-right-xs' />

                    <label for='3-atleast' className="txt-cap">atleast 3 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='2-atleast' name="rating-group" className='mg-right-xs' />

                    <label for='2-atleast' className="txt-cap">atleast 2 stars</label>

                </div>

                <div className='flx flx-min-center'>

                    <input type='radio' id='1-atleast' name="rating-group" className='mg-right-xs' />

                    <label for='1-atleast' className="txt-cap">atleast 1 star</label>

                </div>

            </div>

        </aside>
    )
}

export default ProductsFilter