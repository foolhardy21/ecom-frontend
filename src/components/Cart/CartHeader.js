import { Header, NavBar, Icon, Text, Button } from "../Reusable"

const CardHeader = () => {

    return (

        <Header>

            <Text classes='txt-lg txt-primary txt-ucase'>
                sneakerstore
            </Text>

            <NavBar>

                <Icon classes='icon-primary mg-right-s'>
                    favorite
                </Icon>

                <Icon classes='icon-primary mg-right-s'>
                    shopping_cart
                </Icon>

                <Button classes='btn-txt txt-primary bg-primary txt-lcase txt-md pd-xs'>
                    logout
                </Button>

            </NavBar>

            <Icon>
                bedtime
            </Icon>

        </Header>

    )

}

export default CardHeader