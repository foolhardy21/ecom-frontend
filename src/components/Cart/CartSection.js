import { cartItmArr } from "../../data/index"
import { Section } from "../Reusable"
import { CartItmCard } from "./"
import CartReceiptCard from "./CartReceiptCard"

const CartSection = () => {

    return (

        <Section id="section-cart" classes='flx flx-row'>

            <Section id="section-cartitm" classes="flx flx-column mg-right-s">

                {
                    cartItmArr.map(itm => <CartItmCard key={itm.id} item={itm} />)
                }

            </Section>

            <CartReceiptCard />

        </Section>
    )
}

export default CartSection