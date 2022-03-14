import Header from "../Reusable/Header";
import NavBar from "../Reusable/NavBar";
import Text from "../Reusable/Text";
import Icon from "../Reusable/Icon";
import Button from "../Reusable/Button";


const WishListHeader = () => {

    return (

        <Header>

            <Text classes='txt-ucase txt-primary txt-lg'>
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
                    logout
                </Button>

            </NavBar>

            <Button classes='btn-txt bg-primary pd-xs'>

                <Icon classes="icon-primary">
                    bedtime
                </Icon>

            </Button>

        </Header>

    );
}

export default WishListHeader;
