
const CartItmCard = () => {

    return (
        <article class='flx flx-row cart-item card-shadow-xs mg-btm-s'>
            <img srcset='../assets/1-m.jpg 200w,
                    ../assets/1-s.jpg 150w' alt="shoe" sizes="(max-width: 768px) 150px, 200px" />
            <div class="flx-grow-1 pd-xs">
                <div class="flx flx-maj-start mg-btm-s">
                    <p class='txt-md txt-ucase txt-primary mg-right-s'>nike</p>
                    <p class='txt-md txt-cap txt-primary mg-right-s'>
                        air jordan 5</p>
                    <p class='txt-md txt-ucase txt-primary'>UK 9</p>
                </div>
                <p class='txt-md txt-cap txt-primary'>Rs. 16000</p>
                <p class='txt-md txt-cap txt-success'>50%
                    off</p>
                <div class='flx flx-maj-start flx-min-center'>
                    <p class='txt-md txt-cap txt-primary'>
                        quantity: </p>
                    <button
                        class='btn-outlined b-solid b-secondary pd-xs txt-md txt-primary bg-primary'>-</button>
                    <input type='number' class='txt-md input input-s bg-primary' placeholder='1' />
                    <button
                        class='btn-outlined b-solid b-secondary pd-xs txt-md txt-primary bg-primary'>+</button>
                </div>
                <footer class="flx flx-column">
                    <button class='btn-outlined b-solid b-secondary bg-primary txt-primary txt-cap pd-xs'>remove
                        from cart</button>
                    <button class='btn-outlined b-solid b-secondary bg-primary txt-primary txt-cap pd-xs'>move
                        to wishlist</button>
                </footer>
            </div>
        </article>
    )
}

export default CartItmCard