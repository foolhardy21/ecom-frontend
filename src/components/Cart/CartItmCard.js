import axios from "axios"
import { useCart, useTheme, useWishlist } from "../../contexts"
import { getBorderColor, getTextColor } from "../../utils"
import { Button, Card, Image, Text } from "../Reusable"

const CartItmCard = ({ item }) => {
    const { _id,
        name,
        company,
        img: {
            srcSet,
            alt,
            sizes
        },
        qty,
        size,
        price,
        offerPrice,
        stock,
        rating } = item
    const { cartDispatch, removeProductFromCart, showCartAlert } = useCart()
    const { wishlistDispatch, addProductToWishlist, showWishlistAlert } = useWishlist()
    const { theme } = useTheme()

    async function handleRemoveFromCart() {
        const removeFromCartResponse = await removeProductFromCart(_id)
        if (removeFromCartResponse === 404 || removeFromCartResponse === 500) {
            showCartAlert('could not remove the product', 'error')
        } else if (removeFromCartResponse) {
            cartDispatch({ type: 'REMOVE_FROM_CART', payload: _id })
        }
    }

    async function handleMoveToWishlist() {
        const removeFromCartResponse = await removeProductFromCart(_id)
        if (removeFromCartResponse === 404 || removeFromCartResponse === 500) {
            showCartAlert('could not remove the product', 'error')
        } else if (removeFromCartResponse) {
            cartDispatch({ type: 'REMOVE_FROM_CART', payload: _id })
        }

        const addToWishlistResponse = await addProductToWishlist(item)
        if (addToWishlistResponse === 404 || addToWishlistResponse === 500) {
            showWishlistAlert('could not remove the product', 'error')
        } else if (addToWishlistResponse) {
            wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: addToWishlistResponse[addToWishlistResponse.length - 1] })
        }
    }

    async function increaseItemQuantity() {
        const userToken = window.localStorage.getItem('userToken')
        await axios.post(`/api/user/cart/${_id}`, {
            action: {
                type: 'increment'
            }
        }, {
            headers: {
                authorization: userToken
            }
        })
        cartDispatch({ type: 'INCREMENT_CART_ITEM', payload: _id })
    }

    async function decreaseItemQuantity() {
        const userToken = window.localStorage.getItem('userToken')
        await axios.post(`/api/user/cart/${_id}`, {
            action: {
                type: 'decrement'
            }
        }, {
            headers: {
                authorization: userToken
            }
        })
        cartDispatch({ type: 'DECREMENT_CART_ITEM', payload: _id })
    }


    return (

        <Card classes='flx flx-row mg-btm-s'>

            <Image srcSet={srcSet} alt={alt} sizes={sizes} />

            <div className="flx-grow-1 pd-left-s pd-right-s pd-top-xs">

                <div className="flx">

                    <Text classes='txt-md txt-ucase mg-right-s'>{company}</Text>

                    <Text classes='txt-md txt-cap'>{name}</Text>

                </div>

                <Text classes='txt-md txt-cap mg-top-s'>sizes</Text>

                <select>
                    {
                        size.map(sizeNumber =>
                            <option key={sizeNumber} value={sizeNumber}>
                                {sizeNumber}
                            </option>
                        )
                    }
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

                    <Text classes={`txt-md ${getTextColor(theme)} mg-left-xlg mg-right-xlg`}>
                        {qty}
                    </Text>

                    <Button onClick={increaseItemQuantity} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>+</Button>

                </div>

                <footer className="flx flx-column mg-top-md">

                    <Button onClick={handleRemoveFromCart} classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-cap txt-md pd-xs`}>remove from cart</Button>

                    <Button onClick={handleMoveToWishlist} classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-cap txt-md pd-xs`}>move to wishlist</Button>

                </footer>

            </div>

        </Card>
    )
}

export default CartItmCard