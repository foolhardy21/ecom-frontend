import { useCart, useTheme } from "../../contexts"
import { getBadgeBgColor, getBadgeTextColor, getTotalItems } from "../../utils"
import { Header, NavBar, Icon, Text, Button } from "../Reusable"
import { Link } from 'react-router-dom'

const CardHeader = () => {
    const { cartState } = useCart()
    const { theme, toggleTheme } = useTheme()

    return (

        <Header>

            <Link to='/'>
                <Text classes='txt-lg txt-primary txt-ucase'>
                    sneakerstore
                </Text>
            </Link>

            <NavBar>

                <Link to='/wishlist'>
                    <Icon classes='icon-primary mg-right-s'>
                        favorite
                    </Icon>
                </Link>

                <div className="pos-relative mg-right-lg">

                    {
                        cartState.length > 0 &&
                        <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                            {getTotalItems(cartState)}
                        </div>
                    }

                    <Link to='/cart'>
                        <Icon classes='icon-primary mg-right-s'>
                            shopping_cart
                        </Icon>
                    </Link>

                </div>


                <Button classes={`btn-txt ${theme === 'light' ? 'txt-primary' : 'txt-secondary'} txt-lcase txt-md pd-xs`}>
                    logout
                </Button>

            </NavBar>

            <Button onClick={toggleTheme} classes='btn-txt pd-xs'>

                <Icon>
                    {
                        theme === 'light' ? 'bedtime' : 'light_mode'
                    }
                </Icon>
            </Button>

        </Header>

    )

}

export default CardHeader