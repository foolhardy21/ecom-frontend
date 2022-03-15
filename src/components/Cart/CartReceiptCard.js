import { useCart } from "../../contexts/cart.context"
import { Button, Card, Main, Text } from "../Reusable"

const CartReceiptCard = () => {
    const { getTotalPrice, getCartTotal, getTotalDiscount } = useCart()

    return (

        <Card classes='pd-lg'>

            <Main classes='flx flx-column'>

                <Text classes='txt-md txt-ucase txt-primary mg-btm-md'>
                    order receipt
                </Text>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">order total</Text>

                    <Text class="txt-cap txt-primary txt-md">{`
                    rs. ${getTotalPrice()}
                    `}</Text>

                </div>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">order discount</Text>

                    <Text classes="txt-cap txt-success txt-md">{
                        `-rs. ${getTotalDiscount()}`
                    }</Text>

                </div>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">delivery</Text>

                    <Text classes="txt-cap txt-primary txt-md">rs. 0</Text>

                </div>

                <div className='txt-primary flx flx-maj-stretch txt-cap'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">total amount</Text>

                    <Text classes="txt-cap txt-primary txt-md">{`rs. ${getCartTotal()}`}</Text>

                </div>

            </Main>

            <footer className='mg-top-md flx flx-column'>

                <Button classes='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>place order</Button>

            </footer>

        </Card>
    )
}

export default CartReceiptCard