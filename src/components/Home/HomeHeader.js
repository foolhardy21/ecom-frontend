import { Button, Header, Icon, NavBar, Text } from "../Reusable"
import { Link } from 'react-router-dom'

const HomeHeader = () => {

    return (
        <Header>

            <Link to='/'>
                <Text classes="txt-ucase txt-primary txt-lg">
                    sneakerstore
                </Text>
            </Link>

            <NavBar>

                <Link to='/wishlist'>
                    <Icon classes='icon-primary mg-right-s'>
                        favorite
                    </Icon>
                </Link>

                <Link to='/cart'>
                    <Icon classes='icon-primary mg-right-s'>
                        shopping_cart
                    </Icon>
                </Link>

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