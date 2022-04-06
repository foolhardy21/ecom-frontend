import { useCart } from "contexts"
import { Section } from "components/Reusable"
import { CartItmCard, CartReceiptCard } from "./"

const CartSection = () => {
    const { cartState } = useCart()

    return (

        <Section id="section-cart" classes='flx flx-row'>

            <Section id="section-cartitm" classes="flx flx-column mg-right-s">

                {
                    cartState.cart.map(itm => <CartItmCard key={itm._id} item={itm} />)
                }

            </Section>

            <CartReceiptCard />

        </Section>
    )
}

export default CartSection