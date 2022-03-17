import { useCart, useWishlist, useTheme } from "../../contexts"
import { getBadgeBgColor, getBadgeTextColor, getBgColor, getIconColor, getTextColor, getTotalCartItems } from "../../utils"
import { Header, NavBar, Icon, Text, Button } from "../Reusable"
import { Link } from 'react-router-dom'
import { useState } from "react"

const CardHeader = () => {
    const { wishlistState } = useWishlist()
    const { cartState } = useCart()
    const { theme, toggleTheme } = useTheme()
    const [isSmallNavVisible, setIsSmallNavVisible] = useState(false)

    function toggleNavVisibility() {
        setIsSmallNavVisible(!isSmallNavVisible)
    }

    return (

        <Header>

            <Link to='/'>
                <Text classes='txt-lg txt-ucase'>
                    sneakerstore
                </Text>
            </Link>

            <NavBar id='nav-big' classes='flx-min-center'>

                <Link to='/products'>
                    <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-lcase mg-right-lg bg-primary`}>
                        browse
                    </Button>
                </Link>

                <div className="pos-relative mg-right-lg">

                    {
                        wishlistState.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {wishlistState.length}
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
                        cartState.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {getTotalCartItems(cartState)}
                        </div>
                    }

                    <Link to='/cart'>
                        <Icon classes={`${getIconColor(theme)} mg-right-s`}>
                            shopping_cart
                        </Icon>
                    </Link>

                </div>

                <Link to='/login'>
                    <Button classes={`btn-txt txt-lcase ${getTextColor(theme)} bg-primary pd-xs txt-md`}>
                        login
                    </Button>
                </Link>

            </NavBar>

            <div className='pos-relative'>

                <Button id='btn-ham' onClick={toggleNavVisibility} classes='btn-txt'>

                    <Icon classes={getIconColor(theme)}>
                        menu
                    </Icon>

                </Button>

                {
                    isSmallNavVisible &&
                    <NavBar id='nav-small' classes={`flx-column flx-center pd-lg ${getBgColor(theme)} pos-absolute z-index tl-0`}>

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
                                wishlistState.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {wishlistState.length}
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
                                cartState.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {getTotalCartItems(cartState)}
                                </div>
                            }

                            <Link to='/cart'>
                                <Icon classes={getIconColor(theme)}>
                                    shopping_cart
                                </Icon>
                            </Link>

                        </div>

                        <Link to='/login'>
                            <Button classes={`btn-txt txt-lcase ${getTextColor(theme)} txt-md mg-top-md`}>
                                login
                            </Button>
                        </Link>

                    </NavBar>

                }

            </div>

            <Button onClick={toggleTheme} classes='btn-txt pd-xs'>

                <Icon classes={getIconColor(theme)}>
                    {
                        theme === 'light' ? 'bedtime' : 'light_mode'
                    }
                </Icon>
            </Button>

        </Header>

    )

}

export default CardHeader