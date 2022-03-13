import { Button, Header, Icon, Input, NavBar, Text } from "../Reusable"

const ProductsHeader = () => {

    return (
        <Header>

            <Text classes="txt-lg txt-primary txt-ucase">sneakerstore</Text>

            <div id="searchbar-pg" className="flx">

                <Input id="input-search" type="text" placeholder="Search" classes="input-s bg-primary txt-md pd-xs" />

                <Icon id="btn-search" classes="icon-primary pd-xs">
                    search
                </Icon>

            </div>

            <NavBar>

                <Icon classes="icon-primary mg-right-s">
                    person
                </Icon>

                <Icon classes="icon-primary mg-right-s">
                    favorite
                </Icon>

                <Icon classes="icon-primary">
                    shopping_cart
                </Icon>

            </NavBar>

            <Button classes='btn-txt txt-primary pd-xs'>

                <Icon classes="icon-primary">
                    bedtime
                </Icon>

            </Button>

        </Header>
    )
}

export default ProductsHeader