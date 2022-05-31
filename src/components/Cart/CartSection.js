import { useCart } from "contexts"
import { Section } from "components/Reusable"
import { CartItmCard, CartReceiptCard } from "./"

const CartSection = () => {
    const { cartState: { cart } } = useCart()

    return (

        <Section id="section-cart" classes='flx flx-row'>

            <Section id="section-cartitm" classes={`flx flx-column flx-maj-stretch mg-right-s`}>

                {
                    cart?.map(itm => <CartItmCard key={itm._id} item={itm} />)
                }

            </Section>

            <CartReceiptCard />

        </Section>
    )
}

export default CartSection