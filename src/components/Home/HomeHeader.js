import { Button, Header, Icon, NavBar, Text } from "../Reusable"

const HomeHeader = () => {

    return (
        <Header>

            <Text classes="txt-ucase txt-primary txt-lg">
                sneakerstore
            </Text>

            <NavBar>

                <Icon classes='icon-primary mg-right-s'>
                    favorite
                </Icon>

                <Icon classes='icon-primary mg-right-s'>
                    shopping_cart
                </Icon>

                <Button classes='btn-txt txt-lcase txt-primary bg-primary pd-xs txt-md'>
                    login
                </Button>

            </NavBar>

            <Icon id="btn-theme" classes="icon-primary pd-s">
                bedtime
            </Icon>

        </Header>
    )
}

export default HomeHeader