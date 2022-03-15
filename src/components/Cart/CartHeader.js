import { useCart } from "../../contexts/cart.context"
import { useTheme } from "../../contexts/theme.context"
import { getBadgeBgColor, getBadgeTextColor } from "../../utils/theme.util"
import { Header, NavBar, Icon, Text, Button } from "../Reusable"

const CardHeader = () => {
    const { getTotalItems } = useCart()
    const { theme, toggleTheme } = useTheme()

    return (

        <Header>

            <Text classes='txt-lg txt-primary txt-ucase'>
                sneakerstore
            </Text>

            <NavBar>

                <div className="pos-relative mg-right-lg">

                    <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                        {getTotalItems()}
                    </div>

                    <Icon classes='icon-primary'>
                        favorite
                    </Icon>

                </div>

                <Icon classes='icon-primary mg-right-s'>
                    shopping_cart
                </Icon>

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