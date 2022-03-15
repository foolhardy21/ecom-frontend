import { useCart } from "../../contexts/cart.context"
import { useTheme } from "../../contexts/theme.context"
import { getBorderColor } from "../../utils/theme.util"
import { Button, Card, Image, Input, Text } from "../Reusable"

const CartItmCard = ({ item: { id, name, company, img: { srcSet, alt, sizes }, quantity, size, price, offerPrice } }) => {
    const { cartDispatch } = useCart()
    const { theme } = useTheme()

    return (

        <Card classes='flx flx-row mg-btm-s'>

            <Image srcSet={srcSet} alt={alt} sizes={sizes} />

            <div className="flx-grow-1 pd-left-s pd-right-s pd-top-xs">

                <div className="flx">

                    <Text classes='txt-md txt-ucase mg-right-s'>{company}</Text>

                    <Text classes='txt-md txt-cap'>{name}</Text>

                </div>

                <Text classes='txt-md txt-ucase mg-top-s'>{`UK ${size}`}</Text>



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

                    <Button onClick={() => cartDispatch({ type: 'DECREASE', payload: id })} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>-</Button>

                    <Input type='number' classes={`txt-md input-s pd-left-xs`} placeholder={quantity} />

                    <Button onClick={() => cartDispatch({ type: 'INCREASE', payload: id })} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>+</Button>

                </div>

                <footer className="flx flx-column mg-top-md">

                    <Button onClick={() => cartDispatch({ type: 'REMOVE', payload: id })} classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-cap txt-md pd-xs`}>remove from cart</Button>

                    <Button classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-cap txt-md pd-xs`}>move to wishlist</Button>

                </footer>

            </div>

        </Card>
    )
}

export default CartItmCard