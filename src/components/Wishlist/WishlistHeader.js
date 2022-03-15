import { useTheme, useWishlist, useCart } from "../../contexts";
import { getBadgeBgColor, getBadgeTextColor, getTotalCartItems, getTotalWishlistItems } from "../../utils";
import { Header, NavBar, Text, Icon, Button } from "../Reusable/index";
import { Link } from 'react-router-dom'
import { useState } from "react";

const WishlistHeader = () => {
    const { cartState } = useCart()
    const { wishlistState } = useWishlist()
    const { theme, toggleTheme } = useTheme()
    const [isSmallNavVisible, setIsSmallNavVisible] = useState(false)

    function toggleNavVisibility() {
        setIsSmallNavVisible(!isSmallNavVisible)
    }

    return (

        <Header>

            <Link to='/'>
                <Text classes='txt-ucase txt-primary txt-lg'>
                    sneakerstore
                </Text>
            </Link>

            <NavBar id='nav-big'>

                <Link to='/products'>
                    <Button classes='btn-txt txt-primary txt-md txt-lcase mg-right-lg bg-primary'>
                        browse
                    </Button>
                </Link>

                <div className="pos-relative mg-right-lg">

                    {
                        wishlistState.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {getTotalWishlistItems(wishlistState)}
                        </div>
                    }

                    <Link to='/wishlist'>
                        <Icon classes='icon-primary mg-right-s'>
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
                        <Icon classes='icon-primary mg-right-s'>
                            shopping_cart
                        </Icon>
                    </Link>

                </div>

                <Button classes='btn-txt txt-lcase txt-primary bg-primary pd-xs txt-md'>
                    logout
                </Button>

            </NavBar>

            <div className='pos-relative'>

                <Button id='btn-ham' onClick={toggleNavVisibility} classes='btn-txt bg-primary'>

                    <Icon classes='icon-primary'>
                        menu
                    </Icon>

                </Button>

                {
                    isSmallNavVisible &&
                    <NavBar id='nav-small' classes='flx-column flx-center pd-lg bg-primary pos-absolute z-10 tl-0'>

                        <Button onClick={toggleNavVisibility} classes='btn-txt bg-primary'>

                            <Icon classes='icon-primary'>
                                close
                            </Icon>

                        </Button>

                        <Link to='/products'>

                            <Button classes='btn-txt txt-primary txt-md txt-lcase bg-primary'>
                                browse
                            </Button>

                        </Link>

                        <div className="pos-relative mg-top-md">

                            {
                                wishlistState.length > 0 &&
                                <div className={`badge-size-md pos-absolute bl-60 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                                    {getTotalWishlistItems(wishlistState)}
                                </div>
                            }

                            <Link to='/wishlist'>
                                <Icon classes='icon-primary'>
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
                                <Icon classes='icon-primary'>
                                    shopping_cart
                                </Icon>
                            </Link>

                        </div>

                        <Button classes='btn-txt txt-lcase txt-primary bg-primary txt-md mg-top-md'>
                            logout
                        </Button>

                    </NavBar>

                }

            </div>

            <Button onClick={() => toggleTheme()} classes='btn-txt bg-primary pd-xs'>

                <Icon classes="icon-primary">
                    bedtime
                </Icon>

            </Button>

        </Header>

    );
}

export default WishlistHeader;
