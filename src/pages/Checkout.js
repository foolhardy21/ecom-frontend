import { Link } from "react-router-dom"
import { CartItmCard } from "components/Cart"
import { CheckoutAddressCard, CheckoutHeader } from "components/Checkout"
import { Alert, Button, Card, Main, Section, Text } from "components/Reusable"
import { useAddress, useCart, useCheckout, useTheme } from "contexts"
import { getBgColor, getTextColor, getBorderColor } from "utils"
import useTitle from "hooks/useTitle"
import styles from 'components/Profile/profile.module.css'

const Checkout = () => {
    useTitle('Checkout')
    const { theme } = useTheme()
    const { cartState } = useCart()
    const { addressState: { addresses } } = useAddress()
    const { selectedAddress, setSelectedAddress } = useCheckout()


    function handleAddressSelect(id) {
        setSelectedAddress(addresses.find(address => address._id === id))
    }

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <CheckoutHeader />

            <div className="pos-relative mg-xs">
                {
                    cartState.alert.message && <Alert type={cartState.alert.type} classes='mg-btm-s'>{cartState.alert.message}</Alert>
                }
            </div>

            <Main classes='flx flx-column flx-center'>

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>
                    checkout
                </Text>


                <Section id="section-cart" classes='flx flx-row'>

                    <Section id="section-cartitm" classes="flx flx-column flx-center mg-right-s">

                        {
                            cartState.cart.map(itm =>
                                <CartItmCard key={itm._id} item={itm} checkoutPage={true} />)
                        }

                    </Section>

                    {
                        Object.keys(selectedAddress).length > 0 && <CheckoutAddressCard />
                    }

                </Section>

                {
                    addresses.length === 0
                        ? <Text classes={`txt-err txt-md txt-500 txt-cap mg-top-md`}>You have not added any address, add it <Link to='/profile/addresses'>here</Link></Text>
                        : <>
                            <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-lg mg-btm-s`}>your addresses</Text>
                            {
                                addresses?.map(address => <Card key={address._id} classes={`${styles.cardAddress} flx flx-column flx-maj-stretch pd-xs`}>

                                    <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{address.name}</Text>

                                    <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.building}, ${address.street}`}</Text>

                                    <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.city}, ${address.state}, ${address.pincode}`}</Text>

                                    <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.country}`}</Text>

                                    <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.phoneNumber}`}</Text>

                                    <div className="flx flx-maj-end flx-min-center">
                                        <Button onClick={() => handleAddressSelect(address._id)} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${getTextColor(theme)} txt-md pd-left-xs pd-right-xs`}>set as default</Button>
                                    </div>

                                </Card>
                                )
                            }
                        </>
                }

            </Main>

        </div>
    )
}

export default Checkout