import { Button, Card, Image, Text } from "components/Reusable"
import { useCart, useTheme, useWishlist } from "contexts"
import { getBorderColor, getTextColor } from "utils"
import { ACTION_ADD_TO_WISHLIST, ACTION_DECREMENT_CART_PRODUCT, ACTION_INCREMENT_CART_PRODUCT, ACTION_REMOVE_FROM_CART, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from "utils/constants.util"

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
    const { cartDispatch, removeProductFromCart, increaseProductQuantity, decreaseProductQuantity, showCartAlert } = useCart()
    const { wishlistDispatch, addProductToWishlist, showWishlistAlert, isProductInWishlist } = useWishlist()
    const { theme } = useTheme()

    async function handleRemoveFromCart() {
        const removeFromCartResponse = await removeProductFromCart(_id)
        if (removeFromCartResponse === 404 || removeFromCartResponse === 500) {
            showCartAlert('could not remove the product', ALERT_TYPE_ERROR)
        } else {
            showCartAlert('product removed from cart', ALERT_TYPE_SUCCESS)
            cartDispatch({ type: ACTION_REMOVE_FROM_CART, payload: _id })
        }
    }

    async function handleMoveToWishlist() {
        handleRemoveFromCart()
        if (!isProductInWishlist(_id)) {
            const addToWishlistResponse = await addProductToWishlist(item)
            if (addToWishlistResponse === 404 || addToWishlistResponse === 500) {
                showWishlistAlert('could not remove the product', ALERT_TYPE_ERROR)
            } else if (addToWishlistResponse) {
                wishlistDispatch({ type: ACTION_ADD_TO_WISHLIST, payload: addToWishlistResponse[addToWishlistResponse.length - 1] })
            }
        } else {
            showCartAlert('product is already in wishlist', ALERT_TYPE_ERROR)
        }
    }

    async function handleIncreaseQty() {
        const increaseQtyResponse = await increaseProductQuantity(_id)
        if (increaseQtyResponse === 404 || increaseQtyResponse === 500) {
            showCartAlert('could not increase the quantity', ALERT_TYPE_ERROR)
        } else {
            showCartAlert('quantity increased by 1', ALERT_TYPE_SUCCESS)
            cartDispatch({ type: ACTION_INCREMENT_CART_PRODUCT, payload: _id })
        }
    }

    async function handleDecreaseQty() {
        if (qty > 0) {
            const decreaseQtyResponse = await decreaseProductQuantity(_id)
            if (decreaseQtyResponse === 404 || decreaseQtyResponse === 500) {
                showCartAlert('could not decrease the quantity', ALERT_TYPE_ERROR)
            } else {
                showCartAlert('quantity decreased by 1', ALERT_TYPE_SUCCESS)
                cartDispatch({ type: ACTION_DECREMENT_CART_PRODUCT, payload: _id })
            }
        } else {
            showCartAlert('quantity is already 0', ALERT_TYPE_ERROR)
        }
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

                    <Button onClick={handleDecreaseQty} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>-</Button>

                    <Text classes={`txt-md ${getTextColor(theme)} mg-left-xlg mg-right-xlg`}>
                        {qty}
                    </Text>

                    <Button onClick={handleIncreaseQty} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-md pd-left-xs pd-right-xs`}>+</Button>

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