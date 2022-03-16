import { useState } from 'react'
import { Header, Text, NavBar, Icon, Button } from '../Reusable'
import { getTextColor, getBgColor, getIconColor } from '../../utils'
import { useTheme } from '../../contexts'
import { Link } from 'react-router-dom'

const SignupHeader = () => {
    const { theme, toggleTheme } = useTheme()
    // const { wishlistState } = useWishlist()
    // const { cartState } = useCart()
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

                    {/* {
                        wishlistState.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {getTotalWishlistItems(wishlistState)}
                        </div>
                    } */}

                    <Link to='/wishlist'>
                        <Icon classes={`${getIconColor(theme)} mg-right-s`}>
                            favorite
                        </Icon>
                    </Link>

                </div>

                <div className="pos-relative mg-right-lg">

                    {/* {
                        cartState.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {getTotalCartItems(cartState)}
                        </div>
                    } */}

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

                <Button id='btn-ham' onClick={toggleNavVisibility} classes='btn-txt mg-top-xs'>

                    <Icon classes={getIconColor(theme)}>
                        menu
                    </Icon>

                </Button>

                {
                    isSmallNavVisible &&
                    <NavBar id='nav-small' classes={`flx-column flx-center pd-md ${getBgColor(theme)} pos-absolute z-index tl-0 b-solid`}>

                        <Button onClick={toggleNavVisibility} classes='btn-txt mg-left-xs mg-btm-s'>

                            <Icon classes={`${getIconColor(theme)}`}>
                                close
                            </Icon>

                        </Button>

                        <Link to='/products'>

                            <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-lcase`}>
                                browse
                            </Button>

                        </Link>

                        <div className="flx flx-center pos-relative mg-top-md">

                            {/* {
                                wishlistState.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {getTotalWishlistItems(wishlistState)}
                                </div>
                            } */}

                            <Link to='/wishlist'>
                                <Icon classes={getIconColor(theme)}>
                                    favorite
                                </Icon>
                            </Link>

                        </div>

                        <div className="flx flx-center pos-relative mg-top-md">

                            {/* {
                                cartState.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {getTotalCartItems(cartState)}
                                </div>
                            } */}

                            <Link to='/cart'>
                                <Icon classes={getIconColor(theme)}>
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

                }

            </div >

            <Button onClick={toggleTheme} classes='btn-txt pd-xs'>

                <Icon classes={getIconColor(theme)}>
                    {
                        theme === 'light' ? 'bedtime' : 'light_mode'
                    }
                </Icon>
            </Button>

        </Header >
    )
}

export default SignupHeader