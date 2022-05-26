import { useNavigate } from "react-router-dom"
import { Card, Text, Button } from "components/Reusable"
import { useCart, useCheckout, useTheme } from "contexts"
import { getTextColor, getSolidBtnBgColor, getSolidBtnTextColor } from "utils"
import { ACTION_INIT_CART, ALERT_DISPLAY_TIME, ALERT_TYPE_SUCCESS } from "utils/constants.util"
import styles from 'components/Profile/profile.module.css'

const CheckoutAddressCard = () => {
    const navigate = useNavigate()
    const { theme } = useTheme()
    const { cartState: { cart }, removeProductFromCart, cartDispatch, showCartAlert } = useCart()
    const { selectedAddress, selectedAddress: { name, building, street, city, state, country, pincode, phoneNumber }, setSelectedAddress } = useCheckout()

    async function handlePlaceOrder() {
        for (const product of cart) {
            await removeProductFromCart(product._id)
        }
        showCartAlert(' order placed successfully', ALERT_TYPE_SUCCESS)
        setTimeout(() => {
            cartDispatch({ type: ACTION_INIT_CART, payload: [] })
            setSelectedAddress({})
            navigate('/products')
        }, ALERT_DISPLAY_TIME + 500)

    }

    return (
        <Card classes={`${styles.cardAddress} flx flx-column flx-maj-stretch pd-xs`}>

            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{name}</Text>

            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${building}, ${street}`}</Text>

            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${city}, ${state}, ${pincode}`}</Text>

            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${country}`}</Text>

            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${phoneNumber}`}</Text>
            {
                Object.keys(selectedAddress).length > 0 &&
                <div className="flx flx-maj-end mg-top-s">
                    <Button onClick={handlePlaceOrder} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md pd-xs`}>place order</Button>
                </div>
            }

        </Card>
    )
}

export default CheckoutAddressCard