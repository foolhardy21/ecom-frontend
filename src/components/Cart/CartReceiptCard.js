import { useCart, useTheme } from "../../contexts"
import { Button, Card, Main, Text } from "../Reusable"
import { getTotalDiscount, getTotalPrice, getFinalPrice, getSolidBtnBgColor, getSolidBtnTextColor } from "../../utils"

const CartReceiptCard = () => {
    const { cartState } = useCart()
    const { theme } = useTheme()

    return (

        <Card classes='pd-lg'>

            <Main classes='flx flx-column'>

                <Text classes='txt-md txt-ucase mg-btm-md'>
                    order receipt
                </Text>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-md mg-right-md">order total</Text>

                    <Text class="txt-cap txt-md">{`
                    rs. ${getTotalPrice(cartState.cart)}
                    `}</Text>

                </div>

                <div className='flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-md mg-right-md">order discount</Text>

                    <Text classes="txt-cap txt-success txt-md">{
                        `-rs. ${getTotalDiscount(cartState.cart)}`
                    }</Text>

                </div>

                <div className='flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-md mg-right-md">delivery</Text>

                    <Text classes="txt-cap txt-md">rs. 0</Text>

                </div>

                <div className='flx flx-maj-stretch txt-cap'>

                    <Text classes="txt-cap txt-md mg-right-md">total amount</Text>

                    <Text classes="txt-cap txt-md">{`rs. ${getFinalPrice(cartState.cart)}`}</Text>

                </div>

            </Main>

            <footer className='mg-top-md flx flx-column'>
                {
                    cartState.length > 0 &&
                    <Button classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-ucase pd-xs`}>place order</Button>
                }
            </footer>

        </Card>
    )
}

export default CartReceiptCard