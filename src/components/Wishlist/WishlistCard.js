import { Text, Button, Card, Image, Icon } from "components/Reusable";
import { useCart, useTheme, useWishlist } from "contexts";
import { getRatingFilterArray, getSolidBtnBgColor, getSolidBtnTextColor } from "utils";
import { ACTION_ADD_TO_CART, ACTION_REMOVE_FROM_WISHLIST, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from "utils/constants.util";

const WishlistCard = ({ item }) => {
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
        stock,
        rating,
    } = item
    const { wishlistDispatch, removeProductFromWishlist, showWishlistAlert } = useWishlist()
    const { cartDispatch, addProductToCart, isProductInCart } = useCart()
    const { theme } = useTheme()
    const ratingArr = getRatingFilterArray()


    async function handleRemoveFromWishlist() {
        const removeFromWishlistResponse = await removeProductFromWishlist(_id)
        if (removeFromWishlistResponse === 404 || removeFromWishlistResponse === 500) {
            showWishlistAlert('could not remove from wishlist', ALERT_TYPE_ERROR)
        } else {
            showWishlistAlert('removed from the wishlist', ALERT_TYPE_SUCCESS)
            wishlistDispatch({ type: ACTION_REMOVE_FROM_WISHLIST, payload: _id })
        }
    }

    async function handleMoveToCart() {
        handleRemoveFromWishlist()
        if (!isProductInCart(_id)) {
            const addToCartReponse = await addProductToCart(item)
            if (addToCartReponse === 404 || addToCartReponse === 500) {
                showWishlistAlert('could not add to cart', ALERT_TYPE_ERROR)
            } else if (addToCartReponse) {
                cartDispatch({ type: ACTION_ADD_TO_CART, payload: addToCartReponse[addToCartReponse.length - 1] })
            }
        } else {
            showWishlistAlert('product is already in cart', ALERT_TYPE_ERROR)
        }
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

                <Text classes='txt-md txt-ucase'>
                    {company}
                </Text>

                <Text classes='txt-md txt-cap mg-btm-xs'>
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

                <div className='dis-inblock mg-top-xs'>

                    {
                        ratingArr.map(arrayRating => rating >= arrayRating
                            ? <Icon key={arrayRating} classes='txt-warn'>
                                star
                            </Icon>
                            : <Icon key={arrayRating} classes='txt-off-secondary'>
                                star
                            </Icon>)
                    }

                </div>

            </footer>

            <Button onClick={handleMoveToCart} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-cap pd-xs mg-top-s`}>
                move to cart
            </Button>

        </Card>
    )
}

export default WishlistCard