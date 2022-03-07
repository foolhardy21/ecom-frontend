import { cartItmArr } from "../../data"
import { Button, Card, Main, Text } from "../Reusable"

const CartReceiptCard = () => {

    return (

        <Card classes='pd-lg'>

            <Main classes='flx flx-column'>

                <Text classes='txt-md txt-ucase txt-primary mg-btm-md'>
                    order receipt
                </Text>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">order total</Text>

                    <Text class="txt-cap txt-primary txt-md">{`
                    rs. ${cartItmArr.reduce((prev, curr) => prev + curr.price, 0)}
                    `}</Text>

                </div>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">order discount</Text>

                    <Text classes="txt-cap txt-success txt-md">{
                        `-rs. ${cartItmArr.reduce((prev, curr) => curr.offerPrice ? prev + (curr.price - curr.offerPrice) : prev, 0)}`
                    }</Text>

                </div>

                <div className='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">delivery</Text>

                    <Text classes="txt-cap txt-primary txt-md">rs. 0</Text>

                </div>

                <div className='txt-primary flx flx-maj-stretch txt-cap'>

                    <Text classes="txt-cap txt-primary txt-md mg-right-md">total amount</Text>

                    <Text classes="txt-cap txt-primary txt-md">{`rs. ${cartItmArr.reduce((prev, curr) => curr.offerPrice ? prev + curr.offerPrice : prev + curr.price, 0)}`}</Text>

                </div>

            </Main>

            <footer className='mg-top-md flx flx-column'>

                <Button classes='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>place order</Button>

            </footer>

        </Card>
    )
}

export default CartReceiptCard