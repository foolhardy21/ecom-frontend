import { useNavigate } from "react-router-dom"
import { Card, Text, Button } from "components/Reusable"
import { useAuth, useCart, useCheckout, useTheme } from "contexts"
import { getTextColor, getSolidBtnBgColor, getSolidBtnTextColor, getFinalPrice } from "utils"
import { ACTION_INIT_CART, ALERT_DISPLAY_TIME, ALERT_TYPE_SUCCESS } from "utils/constants.util"
import styles from 'components/Profile/profile.module.css'

const CheckoutAddressCard = () => {
    const navigate = useNavigate()
    const { theme } = useTheme()
    const { cartState: { cart }, removeProductFromCart, cartDispatch, showCartAlert } = useCart()
    const { selectedAddress, selectedAddress: { name, building, street, city, state, country, pincode, phoneNumber }, setSelectedAddress } = useCheckout()
    const { getUser } = useAuth()

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function handlePlaceOrder() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (res) {
            const options = {
                key: process.env.REACT_APP_RZP_ID,
                key_id: process.env.REACT_APP_RZP_ID,
                key_secret: process.env.REACT_APP_RZP_SECRET,
                amount: getFinalPrice(cart) * 100,
                currency: "INR",
                name: "SneakerStore",
                description: "Thank you for shopping with us",
                prefill: {
                    name: name,
                    contact: phoneNumber,
                    email: getUser().email
                },
                notes: { address: `${street}, ${city}` },
                theme: { color: "#000000" },
                handler: async function (response) {
                    for (const product of cart) {
                        await removeProductFromCart(product._id)
                    }
                    showCartAlert('order placed successfully', ALERT_TYPE_SUCCESS)
                    setTimeout(() => {
                        cartDispatch({ type: ACTION_INIT_CART, payload: [] })
                        setSelectedAddress({})
                        navigate('/products')
                    }, ALERT_DISPLAY_TIME + 500)
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        }

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
                    <Button onClick={handlePlaceOrder} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-cap txt-md pd-xs`}>place order</Button>
                </div>
            }

        </Card>
    )
}

export default CheckoutAddressCard