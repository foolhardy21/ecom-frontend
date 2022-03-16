import axios from "axios"
import { Card, Icon, Image, Text, Button } from "../Reusable"
import { useCart, useNotification, useTheme, useWishlist } from '../../contexts'
import { getSolidBtnBgColor, getSolidBtnTextColor, getTextColor } from "../../utils"

const ProductCard = ({ prd: {
    _id,
    name,
    company,
    size,
    price,
    offerPrice,
    img: {
        srcSet,
        alt,
        sizes
    },
    rating,
    stock
} }) => {
    const { theme } = useTheme()
    const { setNotification } = useNotification()
    const { cartDispatch } = useCart()
    const { wishlistDispatch } = useWishlist()

    async function handleAddToCart() {
        const userToken = window.localStorage.getItem('userToken')
        try {
            const response = await axios.post('/api/user/cart', {
                product: {
                    _id,
                    name,
                    company,
                    size,
                    price,
                    offerPrice,
                    img: {
                        srcSet,
                        alt,
                        sizes
                    },
                    rating,
                    stock
                }
            }, {
                headers: {
                    authorization: userToken
                }
            })
            const cartItems = response.data.cart
            cartDispatch({ type: 'ADD_TO_CART', payload: cartItems[cartItems.length - 1] })
            setNotification('added to cart.')
            setTimeout(() => setNotification(''), 3000)
        } catch (e) {
            console.log(e)
            setNotification('could not add to cart.')
            setTimeout(() => setNotification(''), 3000)
        }
    }

    async function handleAddToWishlist() {
        const userToken = window.localStorage.getItem('userToken')
        try {
            const response = await axios.post('/api/user/wishlist', {
                product: {
                    _id,
                    name,
                    company,
                    size,
                    price,
                    offerPrice,
                    img: {
                        srcSet,
                        alt,
                        sizes
                    },
                    rating,
                    stock
                }
            }, {
                headers: {
                    authorization: userToken
                }
            })
            const wishlistItems = response.data.wishlist
            wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: wishlistItems[wishlistItems.length - 1] })
            setNotification('added to wishlist.')
            setTimeout(() => setNotification(''), 3000)
        } catch (e) {
            console.log(e)
            setNotification('could not add to wishlist.')
            setTimeout(() => setNotification(''), 3000)
        }
    }

    return (
        <Card classes="pd-xs pos-relative">
            {
                offerPrice &&
                <Text classes="pos-absolute tr-1 bg-warn txt-md txt-600 txt-primary txt-ucase pd-xs">offer</Text>
            }
            {
                stock < 15 && <Text classes='txt-cap pos-absolute tl-0 bg-err txt-secondary txt-md'>{`only ${stock} left.`}</Text>
            }

            <Image srcSet={srcSet} alt={alt} sizes={sizes} />

            <Text classes="txt-md txt-cap txt-primary">{company}</Text>

            <Text classes="txt-md txt-cap txt-primary mg-btm-xs">{name}</Text>

            <div className="flx mg-btm-xs">
                <Text classes='txt-md txt-primary txt-cap mg-right-s'>sizes</Text>
                {
                    size.map(size => <Text key={size} classes='txt-md txt-primary mg-right-xs'>{size}</Text>)
                }
            </div>

            <div className="flx">
                {
                    offerPrice ?
                        <div className="flx flx-column">

                            <div className="flx">

                                <Text
                                    classes="txt-cut txt-md txt-cap txt-off-secondary">rs.
                                    {price}
                                </Text>

                                <Text classes="txt-md txt-cap txt-primary mg-right-xs">
                                    rs. {offerPrice}
                                </Text>

                            </div>

                            <Text classes="txt-md txt-cap txt-success">
                                {Math.round((price - offerPrice) / price * 100)}% off
                            </Text>

                        </div> :

                        <Text classes="txt-md txt-cap txt-primary mg-btm-xs">
                            rs. {price}
                        </Text>
                }

            </div>

            <div className='dis-inblock'>

                <Icon classes={`${rating >= 1 ? 'txt-warn' : 'txt-off-secondary'}`}>
                    star
                </Icon>

                <Icon classes={`${rating >= 2 ? 'txt-warn' : 'txt-off-secondary'}`}>
                    star
                </Icon>

                <Icon classes={`${rating >= 3 ? 'txt-warn' : 'txt-off-secondary'}`} >
                    star
                </Icon>

                <Icon classes={`${rating >= 4 ? 'txt-warn' : 'txt-off-secondary'}`} >
                    star
                </Icon>

                <Icon classes={`${rating >= 5 ? 'txt-warn' : 'txt-off-secondary'}`} >
                    star
                </Icon>

            </div>

            <div className="flx flx-column mg-top-xs">

                <Button onClick={handleAddToCart} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-cap pd-xs`} >add to cart</Button>

                <Button onClick={handleAddToWishlist} classes={`btn-txt ${getTextColor(theme)} txt-md txt-cap pd-xs`} >add to wishlist</Button>

            </div>

        </Card>
    )
}

export default ProductCard