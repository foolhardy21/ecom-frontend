import NavBar from "../Reusable/NavBar"
import Header from "../Reusable/Header"
import Text from "../Reusable/Text"
import Icon from "../Reusable/Icon"
import Button from "../Reusable/Button"

const PageHeader = () => {

    return (
        <Header>

            <Text classes='txt-ucase txt-primary txt-lg'>
                sneakerstore
            </Text>

            <NavBar>

                <Icon classes='icon-primary mg-right-s'>
                    person
                </Icon>

                <Icon classes='icon-primary mg-right-s'>
                    favorite
                </Icon>

                <Icon classes='icon-primary'>
                    shopping_cart
                </Icon>

            </NavBar>

            <Button classes='btn-txt'>

                <Icon classes='icon-primary pd-xs'>
                    bedtime
                </Icon>

            </Button>

        </Header>
    )
}

export default PageHeader