
const ProductsFilter = () => {

    return (
        <aside class="aside-filters txt-primary bg-primary pos-sticky t-0 z-5 pd-s">


            <div class='flx flx-maj-end'>
                <button class='btn-txt txt-md txt-lcase txt-primary bg-primary pd-xs'>
                    reset
                </button>
            </div>


            <div class='mg-btm-lg'>
                <p class='txt txt-cap mg-btm-xs'>price</p>
                <input id="filter-price" type='range' min='10000' max='50000' value='20000' />
                <p id="filter-priceval" class="txt-md txt-primary">20000</p>
            </div>


            <div class='mg-btm-lg'>
                <p class='txt-md txt-cap mg-btm-xs'>
                    sort by price
                </p>
                <div class='flx flx-min-center'>
                    <input type='radio' id='price-asc' name="price-grp" class='mg-right-xs' />
                    <label for='price-asc' class='txt-cap'>low to high</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='radio' id='price-desc' name="price-grp" class='mg-right-xs' />
                    <label for='price-desc' class='txt-cap'>high to low</label>
                </div>
            </div>


            <div class='mg-btm-lg flx flx-column'>
                <p class='txt-md txt-cap mg-btm-xs'>
                    gender
                </p>
                <div class='flx flx-min-center'>
                    <input type='radio' id='gender-m' name="gender-grp" class='mg-right-xs' />
                    <label for='gender-m' class='txt-cap'>men</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='radio' id='gender-f' name="gender-grp" class='mg-right-xs' />
                    <label for='gender-f' class='txt-cap'>women</label>
                </div>
            </div>


            <div class='mg-btm-lg'>
                <p class='txt-md txt-cap mg-btm-xs'>
                    brands
                </p>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='nike-category' class='mg-right-xs' />
                    <label for='nike-category' class='txt-cap'>nike</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='adidas-category' class='mg-right-xs' />
                    <label for='adidas-category' class='txt-cap'>adidas</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='aj-category' class='mg-right-xs' />
                    <label for='aj-category' class='txt-cap'>air jordan</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='yz-category' class='mg-right-xs' />
                    <label for='yz-category' class='txt-cap'>yeezy</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='converse-category' class='mg-right-xs' />
                    <label for='converse-category' class='txt-cap'>converse</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='nbalance-category' class='mg-right-xs' />
                    <label for='nbalance-category' class='txt-cap'>new balance</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='checkbox' id='vans-category' class='mg-right-xs' />
                    <label for='vans-category' class='txt-cap'>vans</label>
                </div>
            </div>


            <div class='mg-btm-lg'>
                <p class='txt-md txt-cap mg-btm-xs'>size</p>
                <div class="grid grid-maxcols-3">
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-14' name="size-group" class='mg-right-xs' />
                        <label for='size-14' class="txt-cap">14</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-13' name="size-group" class='mg-right-xs' />
                        <label for='size-13' class="txt-cap">13</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-12' name="size-group" class='mg-right-xs' />
                        <label for='size-12' class="txt-cap">12</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-11' name="size-group" class='mg-right-xs' />
                        <label for='size-11' class="txt-cap">11</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-10' name="size-group" class='mg-right-xs' />
                        <label for='size-10' class="txt-cap">10</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-9' name="size-group" class='mg-right-xs' />
                        <label for='size-9' class="txt-cap">9</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-8' name="size-group" class='mg-right-xs' />
                        <label for='size-8' class="txt-cap">8</label>
                    </div>
                    <div class='flx flx-min-center'>
                        <input type='checkbox' id='size-7' name="size-group" class='mg-right-xs' />
                        <label for='size-7' class="txt-cap">7</label>
                    </div>
                </div>
            </div>


            <div class='mg-btm-lg'>
                <p class='txt-md txt-cap mg-btm-xs'>rating</p>
                <div class='flx flx-min-center'>
                    <input type='radio' id='4-atleast' name="rating-group" class='mg-right-xs' />
                    <label for='4-atleast' class="txt-cap">atleast 4 stars</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='radio' id='3-atleast' name="rating-group" class='mg-right-xs' />
                    <label for='3-atleast' class="txt-cap">atleast 3 stars</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='radio' id='2-atleast' name="rating-group" class='mg-right-xs' />
                    <label for='2-atleast' class="txt-cap">atleast 2 stars</label>
                </div>
                <div class='flx flx-min-center'>
                    <input type='radio' id='1-atleast' name="rating-group" class='mg-right-xs' />
                    <label for='1-atleast' class="txt-cap">atleast 1 star</label>
                </div>
            </div>

        </aside>
    )
}

export default ProductsFilter