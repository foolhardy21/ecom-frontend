import { Link } from "react-router-dom"
import { CartItmCard } from "components/Cart"
import { CheckoutAddressCard, CheckoutHeader } from "components/Checkout"
import { AddressSection } from "components/Profile"
import { Main, Section, Text } from "components/Reusable"
import { useAddress, useCart, useTheme } from "contexts"
import { getBgColor, getTextColor } from "utils"

const Checkout = () => {
    const { theme } = useTheme()
    const { cartState } = useCart()
    const { addressState: { addresses } } = useAddress()

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <CheckoutHeader />

            <Main classes='flx flx-column flx-center'>

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>
                    checkout
                </Text>

                <Section id="section-cart" classes='flx flx-row'>

                    <Section id="section-cartitm" classes="flx flx-column mg-right-s">

                        {
                            cartState.cart.map(itm =>
                                <CartItmCard key={itm._id} item={itm} checkoutPage={true} />)
                        }

                    </Section>

                    <CheckoutAddressCard />

                </Section>

                {
                    addresses.length === 0
                        ? <Text classes={`${getTextColor(theme)} txt-md txt-cap mg-top-md`}>You have not added any address, add it by clicking <Link to='/profile'>here</Link></Text>
                        : <AddressSection checkoutPage={true} />
                }

            </Main>

        </div>
    )
}

export default Checkout