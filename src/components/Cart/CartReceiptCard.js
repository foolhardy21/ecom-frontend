
const CartReceiptCard = () => {

    return (
        <article class='grid-itm2 card-dim card-shadow-xs pd-md'>
            <main class='flx flx-column'>
                <p class='txt-md txt-ucase txt-primary mg-btm-s'>
                    order details
                </p>
                <div class='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>
                    <p class="txt-cap txt-primary txt-md">order total</p>
                    <p class="txt-cap txt-primary txt-md">Rs33500</p>
                </div>
                <div class='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>
                    <p class="txt-cap txt-primary txt-md">order discount</p>
                    <p class="txt-cap txt-success txt-md">-Rs. 16750</p>
                </div>
                <div class='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>
                    <p class="txt-cap txt-primary txt-md">delivery</p>
                    <p class="txt-cap txt-primary txt-md">Rs. 600</p>
                </div>
                <div class='txt-primary flx flx-maj-stretch txt-cap'>
                    <p class="txt-cap txt-primary txt-md">total amount</p>
                    <p class="txt-cap txt-primary txt-md">Rs.17300</p>
                </div>
            </main>
            <footer class='mg-top-md flx flx-column'>
                <button class='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>place
                    order</button>
            </footer>
        </article>
    )
}

export default CartReceiptCard