import { Link } from "react-router-dom"
import { useCart, useTheme } from "contexts"
import { Button, Card, Main, Text } from "components/Reusable"
import { getTotalDiscount, getTotalPrice, getFinalPrice, getSolidBtnBgColor, getSolidBtnTextColor } from "utils"
import styles from 'components/Checkout/checkout.module.css'

const CartReceiptCard = () => {
    const { cartState: { cart } } = useCart()
    const { theme } = useTheme()

    return (

        <Card classes={`${styles.cardReciept} pd-lg`}>

            <Main classes='flx flx-column'>

                <Text classes='txt-md txt-ucase mg-btm-md'>
                    order receipt
                </Text>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-md mg-right-md">order total</Text>

                    <Text class="txt-cap txt-md">{`
                    rs. ${getTotalPrice(cart)}
                    `}</Text>

                </div>

                <div className='flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-md mg-right-md">order discount</Text>

                    <Text classes="txt-cap txt-success txt-md">{
                        `-rs. ${getTotalDiscount(cart)}`
                    }</Text>

                </div>

                <div className='flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-md mg-right-md">delivery</Text>

                    <Text classes="txt-cap txt-md">rs. 0</Text>

                </div>

                <div className='flx flx-maj-stretch txt-cap'>

                    <Text classes="txt-cap txt-md mg-right-md">total amount</Text>

                    <Text classes="txt-cap txt-md">{`rs. ${getFinalPrice(cart)}`}</Text>

                </div>

            </Main>

            <footer className='mg-top-md flx flx-maj-end'>
                {
                    cart.length > 0 &&
                    <Link to='/checkout'>
                        <Button classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-ucase pd-xs`}>checkout</Button>
                    </Link>
                }
            </footer>

        </Card>
    )
}

export default CartReceiptCard