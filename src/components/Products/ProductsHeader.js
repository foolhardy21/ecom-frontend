import { useState } from "react"
import { useTheme } from "../../contexts/theme.context"
import { Button, Header, Icon, Input, NavBar, Text } from "../Reusable"
import { getIconColor } from '../../utils/theme.util'

const ProductsHeader = () => {
    const [isSmallNavVisible, setSmallNavVisible] = useState(false)
    const { theme, toggleTheme } = useTheme()

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

                <Icon classes={`${getIconColor(theme)} mg-right-s`}>
                    person
                </Icon>

                <Icon classes={`${getIconColor(theme)} mg-right-s`}>
                    favorite
                </Icon>

                <Icon classes={`${getIconColor(theme)}`}>
                    shopping_cart
                </Icon>

            </NavBar>

            <div className="pos-relative mg-top-s mg-btm-s">
                <Button onClick={() => setSmallNavVisible(true)} classes='btn-txt bg-primary'>

                    <Icon id='btn-ham' classes={`${getIconColor(theme)}`}>
                        menu
                    </Icon>

                </Button>

                <NavBar id='nav-small' style={{
                    display: isSmallNavVisible ? 'flex' : 'none'
                }} classes='bg-primary flx flx-column flx-center pos-absolute tl-0 z-10 b-solid pd-s'>

                    <Button onClick={() => setSmallNavVisible(false)} classes='btn-txt bg-primary'>

                        <Icon id='btn-close-small' classes={`${getIconColor(theme)} mg-btm-lg`}>
                            close
                        </Icon>

                    </Button>

                    <Icon classes={`${getIconColor(theme)} mg-btm-s`}>
                        person
                    </Icon>

                    <Icon classes={`${getIconColor(theme)} mg-btm-s`}>
                        favorite
                    </Icon>

                    <Icon classes={`${getIconColor(theme)} mg-btm-s`}>
                        shopping_cart
                    </Icon>

                </NavBar>

            </div>

            <Button onClick={toggleTheme} classes='btn-txt bg-primary pd-xs'>

                <Icon classes={`${getIconColor(theme)}`}>
                    {`${theme === 'light' ? 'bedtime' : 'light_mode'} `}
                </Icon>

            </Button>

        </Header>
    )
}

export default ProductsHeader