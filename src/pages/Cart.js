import { useEffect } from "react"
import { useCart, useTheme } from "../contexts"
import { getBgColor } from "../utils"
import { Main, Text } from "../components/Reusable"
import { CartHeader, CartSection } from "../components/Cart"
import axios from "axios"

const Cart = () => {
    const { theme } = useTheme()
    const { cartDispatch } = useCart()

    useEffect(() => {
        async function getCart() {
            try {
                const userToken = window.localStorage.getItem('userToken')
                const response = await axios.get('/api/user/cart', {
                    headers: {
                        authorization: userToken
                    }
                })
                return response.data.cart
            } catch (e) {
                console.log(e)
            }
        }
        (async () => {
            const cart = await getCart()
            cart && cartDispatch({ type: 'INIT_CART', payload: cart })
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

                <CartSection />

            </Main>

        </div>
    )
}

export default Cart