import { useState } from "react"
import { Button, Header, Icon, Input, NavBar, Text } from "../Reusable"

const ProductsHeader = () => {
    const [isSmallNavVisible, setSmallNavVisible] = useState(false)

    return (
        <Header>

            <Text classes="txt-lg txt-primary txt-ucase">sneakerstore</Text>

            <div id="searchbar-pg" className="flx">

                <Input id="input-search" type="text" placeholder="Search" classes="input-s bg-primary txt-md pd-xs" />

                <Icon id="btn-search" classes="icon-primary pd-xs">
                    search
                </Icon>

            </div>

            <NavBar id='nav-big' classes='flx flx-min-center'>

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

            <div className="pos-relative mg-top-s mg-btm-s">
                <Button onClick={() => setSmallNavVisible(true)} classes='btn-txt bg-primary'>

                    <Icon id='btn-ham' classes='icon-primary'>
                        menu
                    </Icon>

                </Button>

                <NavBar id='nav-small' style={{
                    display: isSmallNavVisible ? 'flex' : 'none'
                }} classes='bg-primary flx flx-column flx-center pos-absolute tl-0 z-10 b-solid pd-s'>

                    <Button onClick={() => setSmallNavVisible(false)} classes='btn-txt bg-primary'>

                        <Icon id='btn-close-small' classes='icon-primary mg-btm-s'>
                            close
                        </Icon>

                    </Button>

                    <Icon classes="icon-primary mg-btm-s">
                        person
                    </Icon>

                    <Icon classes="icon-primary mg-btm-s">
                        favorite
                    </Icon>

                    <Icon classes="icon-primary mg-btm-s">
                        shopping_cart
                    </Icon>

                </NavBar>

            </div>

            <Icon classes="icon-primary">
                bedtime
            </Icon>

        </Header>
    )
}

export default ProductsHeader