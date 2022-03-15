import { useTheme } from "../../contexts/theme.context"
import { getBgColor } from "../../utils/theme.util"
import { Main, Text } from "../Reusable"
import { CartHeader, CartSection } from "./"

const Cart = () => {
    const { theme } = useTheme()

    return (

        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <CartHeader />

            <Main classes='flx flx-column flx-center pd-md'>

                <Text classes='txt-cap txt-lg mg-btm-md flx flx-center'>
                    your cart
                </Text>

                <CartSection />

            </Main>

        </div>
    )
}

export default Cart