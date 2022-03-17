import { Text, Button, Card, Image } from "../Reusable/index";
import { useCart, useTheme, useWishlist } from "../../contexts";
import { getSolidBtnBgColor, getSolidBtnTextColor } from "../../utils";
import axios from "axios";

const WishlistCard = ({ item }) => {
    const { wishlistDispatch } = useWishlist()
    const { cartDispatch } = useCart()
    const { theme } = useTheme()

    const {
        _id,
        name,
        company,
        img: {
            alt,
            srcSet,
            sizes
        },
        price,
        offerPrice,
        stock
    } = item

    async function handleRemoveFromWishlist() {
        const userToken = window.localStorage.getItem('userToken')
        const response = await axios.delete(`/api/user/wishlist/${_id}`, {
            headers: {
                authorization: userToken
            }
        })
        wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: _id })
    }
    async function handleMoveToCart() {
        const userToken = window.localStorage.getItem('userToken')

        await axios.delete(`/api/user/wishlist/${_id}`, {
            headers: {
                authorization: userToken
            }
        })
        wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: _id })

        const cartResponse = await axios.post('/api/user/cart/', {
            product: {
                _id,
                name,
                company,
                img: {
                    alt,
                    srcSet,
                    sizes
                },
                price,
                offerPrice,
                stock
            }
        }, {
            headers: {
                authorization: userToken
            }
        })
        const cartItems = cartResponse.data.cart
        cartDispatch({ type: 'ADD_TO_CART', payload: cartItems[cartItems.length - 1] })
    }


    return (

        <Card classes='flx flx-column pos-relative'>

            <Button onClick={handleRemoveFromWishlist} classes='pos-absolute tr-1 btn-txt'>

                <span className="material-icons icon-primary">
                    close
                </span>

            </Button>

            {
                offerPrice && <div className="pos-absolute tl-0 bg-warn txt-primary txt-md pd-xs txt-ucase">offer</div>
            }

            <Image srcSet={srcSet} alt={alt} sizes={sizes} classes='img-fit-cover' />

            <footer className='flx flx-column mg-top-xs pd-left-s pd-right-s'>

                <Text classes='txt-md txt-ucase mg-btm-xs'>
                    {company}
                </Text>

                <Text classes='txt-md txt-cap mg-btm-s'>
                    {name}
                </Text>

                <div className="flx">


                    <Text classes={`txt-md txt-cap ${offerPrice && 'txt-cut txt-off-secondary'}`}>
                        {`rs. ${price}`}
                    </Text>

                    {
                        offerPrice &&
                        <Text classes='txt-md txt-cap'>
                            {`rs. ${offerPrice}`}
                        </Text>
                    }

                </div>
                {
                    offerPrice &&
                    <Text classes='txt-md txt-ucase txt-success'>
                        {`${Math.round(100 - (offerPrice / price) * 100, 2)}% off`}
                    </Text>
                }
                {
                    stock <= 15 && <Text classes='txt-err txt-md txt-cap'>{`only ${stock} left`}</Text>
                }

            </footer>

            <Button onClick={handleMoveToCart} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-cap pd-xs mg-top-s`}>
                move to cart
            </Button>

        </Card>
    )
}

export default WishlistCard