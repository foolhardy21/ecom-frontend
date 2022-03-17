import { useCart } from "../../contexts/cart.context"
import { Section } from "../Reusable"
import { CartItmCard, CartReceiptCard } from "./"

const CartSection = () => {
    const { cartState } = useCart()

    return (

        <Section id="section-cart" classes='flx flx-row'>

            <Section id="section-cartitm" classes="flx flx-column mg-right-s">

                {
                    cartState.map(itm => <CartItmCard key={itm._id} item={itm} />)
                }

            </Section>

            <CartReceiptCard />

        </Section>
    )
}

export default CartSection