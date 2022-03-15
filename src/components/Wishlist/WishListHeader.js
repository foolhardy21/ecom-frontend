import { useTheme, useWishlist } from "../../contexts";
import { getBadgeBgColor, getBadgeTextColor } from "../../utils";
import { Header, NavBar, Text, Icon, Button } from "../Reusable/index";
import { Link } from 'react-router-dom'

const WishlistHeader = () => {
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

                        <div className={`txt-md badge-size-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} flx flx-center brd-full pos-absolute bl-70`}>
                            {wishlistState.length}
                        </div>
                    }

                    <Link to='/wishlist'>
                        <Icon classes='icon-primary'>
                            favorite
                        </Icon>
                    </Link>

                </div>

                <Link to='/cart'>
                    <Icon classes='icon-primary mg-right-s'>
                        shopping_cart
                    </Icon>
                </Link>

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
