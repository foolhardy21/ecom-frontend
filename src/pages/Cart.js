import { useEffect } from "react"
import { Main, Text, Alert } from "../components/Reusable"
import { CartHeader, CartSection } from "../components/Cart"
import { useCart, useTheme } from "../contexts"
import { getBgColor } from "../utils"

const Cart = () => {
    const { theme } = useTheme()
    const { cartDispatch, getCart } = useCart()
    // const { alert, showAlert } = useAlert()  

    useEffect(() => {
        (async () => {
            const getCartResponse = await getCart()

            if (getCartResponse === 500 || getCartResponse === 404) {
                // showAlert('you are not logged in', 'error')
            } else if (getCartResponse) {
                cartDispatch({ type: 'INIT_CART', payload: getCartResponse })
            }
        })()
    }, [cartDispatch])

    return (

        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >

            <CartHeader />

            <Main classes='flx flx-column flx-center pd-md'>

                <Text classes='txt-cap txt-lg mg-btm-md flx flx-center'>
                    your cart
                </Text>

                {
                    alert.type === 'error' && <Alert classes='bg-err mg-top-s mg-btm-s'>{alert.message}</Alert>
                }

                <CartSection />

            </Main>

        </div>
    )
}

export default Cart