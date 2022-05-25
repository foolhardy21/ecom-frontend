import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Alert, Button, Icon, Image, Main, Section, Text } from "components/Reusable"
import { ProductsHeader } from "components/Products"
import { useCart, useProducts, useTheme, useWishlist } from "contexts"
import { getBgColor, getRatingFilterArray, getSolidBtnBgColor, getSolidBtnTextColor, getTextColor } from "utils"
import styles from 'components/Products/products.module.css'
import { ACTION_ADD_TO_CART, ACTION_ADD_TO_WISHLIST, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from "utils/constants.util"

const Product = () => {
    const [currentProduct, setCurrentProduct] = useState({})
    const params = useParams()
    const { isProductInCart, addProductToCart, cartDispatch } = useCart()
    const { isProductInWishlist, addProductToWishlist, wishlistDispatch } = useWishlist()
    const { theme } = useTheme()
    const { productsState: { products, alert }, showProductsAlert } = useProducts()
    const ratingArr = getRatingFilterArray()

    useEffect(() => {
        setCurrentProduct(products.find(product => product._id === params.productId))
    }, [])

    async function handleAddToCart() {
        const addItemResponse = await addProductToCart(currentProduct)
        if (addItemResponse === 404 || addItemResponse === 409 || addItemResponse === 500) {
            showProductsAlert('could not add to cart', ALERT_TYPE_ERROR)
        } else {
            showProductsAlert('added to cart', ALERT_TYPE_SUCCESS)
            cartDispatch({ type: ACTION_ADD_TO_CART, payload: addItemResponse[addItemResponse.length - 1] })
        }
    }

    async function handleAddToWishlist() {
        const addItemResponse = await addProductToWishlist(currentProduct)
        if (addItemResponse === 404 || addItemResponse === 500) {
            showProductsAlert('could not add to wishlist', ALERT_TYPE_ERROR)
        } else if (addItemResponse) {
            showProductsAlert('added to wishlist', ALERT_TYPE_SUCCESS)
            wishlistDispatch({ type: ACTION_ADD_TO_WISHLIST, payload: addItemResponse[addItemResponse.length - 1] })
        }
    }

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <ProductsHeader />

            <div className="pos-absolute mg-xs">
                {
                    alert.message && <Alert type={alert.type}>{alert.message}</Alert>
                }
            </div>

            <div className="flx flx-row">

                <Main classes={`${getBgColor(theme)} ${styles.mainPrdlist} flx flx-column flx-min-center pd-lg`}>


                    <Section classes='flx flx-center pd-md'>

                        <Image srcSet={currentProduct?.img?.srcSet} sizes={currentProduct?.img?.sizes} alt={currentProduct?.img?.alt} classes='mg-right-xlg' />

                        <Section classes='flx flx-column'>

                            <Text classes={`txt-lg txt-cap ${getTextColor(theme)}`}>{currentProduct?.name}</Text>

                            <Text classes={`txt-lg txt-cap mg-btm-md ${getTextColor(theme)}`}>{currentProduct?.company}</Text>

                            <Text classes={`txt-md ${getTextColor(theme)} txt-cap`}>sizes</Text>
                            <div className="flx mg-btm-md">
                                {
                                    currentProduct?.size?.map(size => <Text key={size} classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{size}</Text>)
                                }
                            </div>

                            <Text classes={`txt-md ${getTextColor(theme)} txt-cap mg-btm-md`}>{currentProduct?.gender}</Text>

                            <div className="flx mg-btm-md">
                                {
                                    currentProduct?.offerPrice ?
                                        <div className="flx flx-column">

                                            <div className="flx mg-btm-xs">

                                                <Text
                                                    classes="txt-cut txt-md txt-cap txt-off-secondary mg-right-xs">rs.
                                                    {currentProduct?.price}
                                                </Text>

                                                <Text classes={`txt-md txt-cap ${getTextColor(theme)}`}>
                                                    rs. {currentProduct?.offerPrice}
                                                </Text>

                                            </div>

                                            <Text classes="txt-md txt-cap txt-success">
                                                {Math.round((currentProduct?.price - currentProduct?.offerPrice) / currentProduct?.price * 100)}% off
                                            </Text>

                                        </div> :

                                        <Text classes={`txt-md txt-cap ${getTextColor(theme)}`}>
                                            rs. {currentProduct?.price}
                                        </Text>
                                }

                            </div>

                            <Text classes={`txt-md txt-cap ${currentProduct?.stock < 15 ? 'txt-err' : getTextColor(theme)} mg-btm-md`}>
                                {currentProduct?.stock} pairs left
                            </Text>

                            <div className='dis-inblock'>

                                <Text classes={`txt-md txt-cap ${getTextColor(theme)}`}>
                                    {currentProduct?.rating}/5
                                </Text>

                                {
                                    ratingArr.map(arrayRating => currentProduct?.rating >= arrayRating
                                        ? <Icon key={arrayRating} classes='txt-warn'>
                                            star
                                        </Icon>
                                        : <Icon key={arrayRating} classes='txt-off-secondary'>
                                            star
                                        </Icon>)
                                }
                            </div>

                            <div className="flx flx-column mg-top-md">

                                {
                                    isProductInCart(currentProduct?._id)
                                        ? <Link to='/cart'>
                                            <Button classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-cap pd-xs`} >go to cart</Button>
                                        </Link>
                                        : <Button onClick={handleAddToCart} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-cap pd-xs`} >add to cart</Button>
                                }

                                {
                                    isProductInWishlist(currentProduct?._id)
                                        ? <Link to='/wishlist'>
                                            <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-cap pd-xs`} >go to wishlist</Button>
                                        </Link>
                                        : <Button onClick={handleAddToWishlist} classes={`btn-txt ${getTextColor(theme)} txt-md txt-cap pd-xs`} >add to wishlist</Button>
                                }

                            </div>

                        </Section>

                    </Section>

                </Main>

            </div>


        </div>
    )
}

export default Product