import { Main, Text } from "../Reusable"
import { CartHeader, CartSection } from "./"

const Cart = () => {

    return (

        <div>

            <CartHeader />

            <Main classes='flx flx-column flx-center pd-md'>

                <Text classes='txt-cap txt-lg txt-primary mg-btm-md flx flx-center'>
                    your cart
                </Text>

                <CartSection />

            </Main>

        </div>
    )
}

export default Cart