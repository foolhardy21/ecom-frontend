import { useNavigate } from "react-router-dom"
import { Card, Text, Button } from "components/Reusable"
import { useCart, useCheckout, useTheme } from "contexts"
import { getTextColor, getSolidBtnBgColor, getSolidBtnTextColor } from "utils"
import { ACTION_INIT_CART } from "utils/constants.util"

const CheckoutAddressCard = () => {
    const navigate = useNavigate()
    const { theme } = useTheme()
    const { cartState: { cart }, removeProductFromCart, cartDispatch } = useCart()
    const { selectedAddress, selectedAddress: { name, building, street, city, state, country, pincode, phoneNumber }, setSelectedAddress } = useCheckout()

    async function handlePlaceOrder() {
        for (const product of cart) {
            await removeProductFromCart(product._id)
        }
        cartDispatch({ type: ACTION_INIT_CART, payload: [] })
        setSelectedAddress({})
        navigate('/products')
    }

    return (
        <Card classes='pos-relative pd-xs'>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{name}</Text>

            <div className="flx mg-btm-xs">

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{building}</Text>

                <Text classes={`${getTextColor(theme)} txt-md`}>{street}</Text>

            </div>

            <div className="flx mg-btm-xs">

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{city}</Text>

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{state}</Text>

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{country}</Text>

                <Text classes={`${getTextColor(theme)} txt-md`}>{pincode}</Text>

            </div>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{phoneNumber}</Text>

            {
                Object.keys(selectedAddress).length > 0 &&
                <Button onClick={handlePlaceOrder} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md pd-xs`}>place order</Button>
            }

        </Card>
    )
}

export default CheckoutAddressCard