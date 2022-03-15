import { useTheme, useWishlist, useCart } from "../../contexts";
import { getBadgeBgColor, getBadgeTextColor, getTotalCartItems, getTotalWishlistItems } from "../../utils";
import { Header, NavBar, Text, Icon, Button } from "../Reusable/index";
import { Link } from 'react-router-dom'

const WishlistHeader = () => {
    const { cartState } = useCart()
    const { theme, toggleTheme } = useTheme()
    const { wishlistState } = useWishlist()

    return (

        <Header>

            <Link to='/'>
                <Text classes='txt-ucase txt-primary txt-lg'>
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

            <Button onClick={() => toggleTheme()} classes='btn-txt bg-primary pd-xs'>

                <Icon classes="icon-primary">
                    bedtime
                </Icon>

            </Button>

        </Header>

    );
}

export default WishlistHeader;
