import { useCart } from "../../contexts/cart.context"
import { Header, NavBar, Icon, Text, Button } from "../Reusable"

const CardHeader = () => {
    const { getTotalItems } = useCart()

    return (

        <Header>

            <Text classes='txt-lg txt-primary txt-ucase'>
                sneakerstore
            </Text>

            <NavBar>

                <div className="pos-relative mg-right-lg">

                    <div className="badge-size-md pos-absolute bl-70 txt-md txt-secondary bg-secondary brd-full flx flx-center">
                        {getTotalItems()}
                    </div>

                    <Icon classes='icon-primary'>
                        favorite
                    </Icon>

                </div>

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