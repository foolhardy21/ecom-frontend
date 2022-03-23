import { useCart, useTheme } from "../../contexts"
import { getBorderColor, getTextColor } from "../../utils"
import { Button, Card, Image, Input, Text } from "../Reusable"

const CartItmCard = ({ item: { id, name, company, img: { srcSet, alt, sizes }, quantity, size, price, offerPrice } }) => {
    const { cartState, cartDispatch } = useCart()
    const { theme } = useTheme()

    function setQuantity(e) {
        cartDispatch({
            type: 'SET_QUANTITY', payload: {
                id: id,
                quantity: Number(e.target.value)
            }
        })
    }

    function setSize(e) {
        cartDispatch({
            type: 'SET_SIZE', payload: {
                id: id,
                size: Number(e.target.value)
            }
        })
    }

    function increaseItemQuantity() {
        cartDispatch({ type: 'INCREASE_QUANTITY', payload: id })
    }

    function decreaseItemQuantity() {
        cartDispatch({ type: 'DECREASE_QUANTITY', payload: id })
    }

    function removeItemFromCart() {
        cartDispatch({ type: 'REMOVE_ITEM', payload: id })
    }

    return (

        <Card classes='flx flx-row mg-btm-s'>

            <Image srcSet={srcSet} alt={alt} sizes={sizes} />

            <div className="flx-grow-1 pd-left-s pd-right-s pd-top-xs">

                <div className="flx">

                    <Text classes='txt-md txt-ucase mg-right-s'>{company}</Text>

                    <Text classes='txt-md txt-cap'>{name}</Text>

                </div>

                <Text classes='txt-md txt-ucase mg-top-s'>{`UK ${size}`}</Text>

                {/* after merging run a map on productsData.size */}
                <select onChange={(e) => setSize(e)}>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                </select>



                <div className="flx mg-top-s">

                    {
                        offerPrice && <Text classes='txt-md txt-cap txt-off-secondary txt-cut'>{`rs. ${offerPrice}`}</Text>
                    }

                    <Text classes='txt-md txt-cap'>{`rs. ${price}`}</Text>

                </div>

                {
                    offerPrice && <Text classes='txt-md txt-cap txt-success'>{`${Math.round(100 - offerPrice / price * 100)}% off`}</Text>
                }


                <div className='flx flx-min-center mg-top-xs'>

                    <Text classes='txt-md txt-cap mg-right-xs'>quantity:</Text>

                    <Button onClick={decreaseItemQuantity} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>-</Button>

                    <Input type='number' value={cartState.quantity} onChange={(e) => setQuantity(e)} classes={`txt-md ${getTextColor(theme)} input-s pd-left-xs`} placeholder={quantity} />

                    <Button onClick={increaseItemQuantity} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>+</Button>

                </div>

                <footer className="flx flx-column mg-top-md">

                    <Button onClick={removeItemFromCart} classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-cap txt-md pd-xs`}>remove from cart</Button>

                    <Button classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-cap txt-md pd-xs`}>move to wishlist</Button>

                </footer>

            </div>

        </Card>
    )
}

export default CartItmCard