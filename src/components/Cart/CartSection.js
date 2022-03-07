import { CartItmCard } from "./"
import CartReceiptCard from "./CartReceiptCard"

const CartSection = () => {

    return (
        <section class='grid grid-maxcols-2'>

            <section class="grid-itm1 flx flx-column">

                <CartItmCard />

                <CartItmCard />

            </section>

            <CartReceiptCard />

        </section>
    )
}

export default CartSection