import { useWishlist, useCart, useTheme } from '../../contexts'
import { getBadgeBgColor, getBadgeTextColor, getTotalCartItems, getTotalWishlistItems } from '../../utils'
import { Button, Header, Icon, NavBar, Text } from "../Reusable"
import { Link } from 'react-router-dom'

const HomeHeader = () => {
    const { theme } = useTheme()
    const { wishlistState } = useWishlist()
    const { cartState } = useCart()

    return (
        <Header>

            <Link to='/'>
                <Text classes="txt-ucase txt-primary txt-lg">
                    sneakerstore
                </Text>
            </Link>

            <NavBar>

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

            <Icon classes="icon-primary pd-xs">
                bedtime
            </Icon>

        </Header>
    )
}

export default HomeHeader