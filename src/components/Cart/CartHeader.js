import { useCart, useTheme } from "../../contexts"
import { getBadgeBgColor, getBadgeTextColor, getTotalItems } from "../../utils"
import { Header, NavBar, Icon, Text, Button } from "../Reusable"

const CardHeader = () => {
    const { cartState } = useCart()
    const { theme, toggleTheme } = useTheme()

    return (

        <Header>

            <Text classes='txt-lg txt-primary txt-ucase'>
                sneakerstore
            </Text>

            <NavBar>

                <div className="pos-relative mg-right-lg">

                    <div className={`badge-size-md pos-absolute bl-70 txt-md ${getBadgeTextColor(theme)} ${getBadgeBgColor(theme)} brd-full flx flx-center`}>
                        {getTotalItems(cartState)}
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