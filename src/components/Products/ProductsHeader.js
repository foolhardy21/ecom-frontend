import { useState } from "react"
import { Link } from 'react-router-dom'
import { useTheme, useCart, useWishlist, useAuth, useProducts } from "contexts"
import { Button, Header, Icon, Input, NavBar, Text } from "components/Reusable"
import { getIconColor, getBgColor, getTextColor, getTotalCartItems, getBadgeBgColor, getBadgeTextColor } from 'utils'
import { THEME_LIGHT, ACTION_INIT_PRODUCTS } from "utils/constants.util"

const ProductsHeader = () => {
    const [isSmallNavVisible, setSmallNavVisible] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const { theme, toggleTheme } = useTheme()
    const { wishlistState } = useWishlist()
    const { cartState } = useCart()
    const { getProducts, productsDispatch } = useProducts()
    const { isUserLoggedIn, logoutUser } = useAuth()

    function toggleNavVisibility() {
        setSmallNavVisible(!isSmallNavVisible)
    }

    async function handleSearchSubmit() {
        const getProductsResponse = await getProducts()
        const filteredProducts = getProductsResponse.filter(prd => prd.name.toLowerCase().includes(searchQuery.toLowerCase()) || prd.company.toLowerCase().includes(searchQuery.toLowerCase()))
        productsDispatch({ type: ACTION_INIT_PRODUCTS, payload: filteredProducts })
    }

    return (
        <Header>

            <Link to='/'>
                <Text classes='txt-lg txt-ucase'>
                    sneakerstore
                </Text>
            </Link>

            <div id="pg-searchbar" className="flx">

                <Input id="input-search" type="text" placeholder="search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} classes={`input-s ${getTextColor(theme)} txt-md`} />

                <Button onClick={handleSearchSubmit} classes='btn-txt'>
                    <Icon classes={`${getIconColor(theme)} pd-xs`}>
                        search
                    </Icon>
                </Button>

            </div>

            <NavBar id='nav-big' classes='flx-min-center'>

                <Link to='/products'>
                    <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-lcase mg-right-lg bg-primary`}>
                        browse
                    </Button>
                </Link>

                <div className="pos-relative mg-right-lg">

                    {
                        wishlistState.wishlist.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {wishlistState.wishlist.length}
                        </div>
                    }

                    <Link to='/wishlist'>
                        <Icon classes={`${getIconColor(theme)} mg-right-s`}>
                            favorite
                        </Icon>
                    </Link>

                </div>

                <div className="pos-relative mg-right-lg">

                    {
                        cartState.cart.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {getTotalCartItems(cartState.cart)}
                        </div>
                    }

                    <Link to='/cart'>
                        <Icon classes={`${getIconColor(theme)} mg-right-s`}>
                            shopping_cart
                        </Icon>
                    </Link>

                </div>

                {
                    isUserLoggedIn
                        ? <Link to='/'>
                            <Button onClick={logoutUser} classes={`btn-txt txt-lcase ${getTextColor(theme)} bg-primary pd-xs txt-md`}>
                                logout
                            </Button>
                        </Link>
                        :
                        <Link to='/login'>
                            <Button classes={`btn-txt txt-lcase ${getTextColor(theme)} bg-primary pd-xs txt-md`}>
                                login
                            </Button>
                        </Link>
                }

            </NavBar>

            <div className='pos-relative'>

                <Button id='btn-ham' onClick={toggleNavVisibility} classes='btn-txt'>

                    <Icon classes={getIconColor(theme)}>
                        menu
                    </Icon>

                </Button>

                {
                    isSmallNavVisible &&
                    <NavBar id='nav-small' classes={`flx-column pd-lg ${getBgColor(theme)} pos-absolute z-index tl-0`}>

                        <Button onClick={toggleNavVisibility} classes='btn-txt'>

                            <Icon classes={getIconColor(theme)}>
                                close
                            </Icon>

                        </Button>

                        <Link to='/products'>

                            <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-lcase`}>
                                browse
                            </Button>

                        </Link>

                        <div className="pos-relative mg-top-md">

                            {
                                wishlistState.wishlist.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {wishlistState.wishlist.length}
                                </div>
                            }

                            <Link to='/wishlist'>
                                <Icon classes={getIconColor(theme)}>
                                    favorite
                                </Icon>
                            </Link>

                        </div>

                        <div className="pos-relative mg-top-md">

                            {
                                cartState.cart.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {getTotalCartItems(cartState.cart)}
                                </div>
                            }

                            <Link to='/cart'>
                                <Icon classes={getIconColor(theme)}>
                                    shopping_cart
                                </Icon>
                            </Link>

                        </div>

                        {
                            isUserLoggedIn
                                ? <Link to='/'>
                                    <Button onClick={logoutUser} classes={`btn-txt txt-lcase ${getTextColor(theme)} bg-primary pd-xs txt-md`}>
                                        logout
                                    </Button>
                                </Link>
                                :
                                <Link to='/login'>
                                    <Button classes={`btn-txt txt-lcase ${getTextColor(theme)} bg-primary pd-xs txt-md`}>
                                        login
                                    </Button>
                                </Link>
                        }

                    </NavBar>

                }

            </div>

            <Button onClick={toggleTheme} classes='btn-txt pd-xs'>

                <Icon classes={getIconColor(theme)}>
                    {
                        theme === THEME_LIGHT ? 'bedtime' : 'light_mode'
                    }
                </Icon>
            </Button>

        </Header>
    )
}

export default ProductsHeader