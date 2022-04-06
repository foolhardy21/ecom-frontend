import { useEffect } from "react"
import BarLoader from 'react-spinners/BarLoader'
import { Main, Text, Alert } from "components/Reusable"
import { CartHeader, CartSection } from "components/Cart"
import { useCart, useTheme } from "contexts"
import { getBgColor } from "utils"
import { ACTION_INIT_CART, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from "utils/constants.util"

const Cart = () => {
    const { theme } = useTheme()
    const { cartDispatch, getCart, showCartAlert, cartState } = useCart()

    useEffect(() => {
        (async () => {
            const getCartResponse = await getCart()
            if (getCartResponse === 500 || getCartResponse === 404) {
                showCartAlert('could not load the cart', ALERT_TYPE_ERROR)
            } else {
                cartDispatch({ type: ACTION_INIT_CART, payload: getCartResponse })
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
                    cartState.alert.type === ALERT_TYPE_ERROR
                        ? <Alert classes='bg-err mg-btm-s'>{cartState.alert.message}</Alert>
                        : cartState.alert.type === ALERT_TYPE_SUCCESS
                            ? <Alert classes='bg-success mg-btm-s'>{cartState.alert.message}</Alert>
                            : ''
                }

                {
                    cartState.loading
                        ? <BarLoader width={300} height={4} />
                        : <CartSection />
                }

            </Main>

        </div>
    )
}

export default Cart