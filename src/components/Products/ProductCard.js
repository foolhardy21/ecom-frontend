import { Link } from "react-router-dom"
import { Card, Icon, Image, Text, Button } from "../Reusable"
import { useCart, useProducts, useTheme, useWishlist } from '../../contexts'
import { getSolidBtnBgColor, getSolidBtnTextColor, getTextColor } from "../../utils"

const ProductCard = ({ prd }) => {
    const { _id,
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
        stock } = prd
    const { theme } = useTheme()
    const { showProductsAlert } = useProducts()
    const { cartDispatch, addProductToCart, isProductInCart } = useCart()
    const { wishlistDispatch, addProductToWishlist, isProductInWishlist } = useWishlist()

    async function handleAddToCart() {
        const addItemResponse = await addProductToCart(prd)
        if (addItemResponse === 404 || addItemResponse === 500) {
            showProductsAlert('could not add to cart', 'error')
        } else if (addItemResponse) {
            showProductsAlert('added to cart', 'success')
            cartDispatch({ type: 'ADD_TO_CART', payload: addItemResponse[addItemResponse.length - 1] })
        }
    }

    async function handleAddToWishlist() {
        const addItemResponse = await addProductToWishlist(prd)
        if (addItemResponse === 404 || addItemResponse === 500) {
            showProductsAlert('could not add to wishlist', 'error')
        } else if (addItemResponse) {
            showProductsAlert('added to wishlist', 'success')
            wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: addItemResponse[addItemResponse.length - 1] })
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

                {
                    isProductInCart(_id)
                        ? <Link to='/cart'>
                            <Button classes={`btn-solid ${getSolidBtnTextColor(theme)} ${getSolidBtnBgColor(theme)} txt-md txt-cap pd-xs`} >go to cart</Button>
                        </Link>
                        : <Button onClick={handleAddToCart} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-cap pd-xs`} >add to cart</Button>
                }

                {
                    isProductInWishlist(_id)
                        ? <Link to='/wishlist'>
                            <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-cap pd-xs`} >go to wishlist</Button>
                        </Link>
                        : <Button onClick={handleAddToWishlist} classes={`btn-txt ${getTextColor(theme)} txt-md txt-cap pd-xs`} >add to wishlist</Button>
                }

            </div>

        </Card>
    )
}

export default ProductCard