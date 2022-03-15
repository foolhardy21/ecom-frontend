import { CartHeader, CartSection } from "./"

const Cart = () => {

    return (
        <div>
            <CartHeader />



            <main class='flx flx-column flx-center pd-md'>

                <p class='txt-cap txt-lg txt-primary mg-btm-md flx flx-center'>your cart</p>

                <CartSection />

            </main>
        </div>
    )
}

export default Cart