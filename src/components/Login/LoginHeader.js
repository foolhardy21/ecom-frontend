import { useState } from "react"
import { Link } from 'react-router-dom'
import { Header, Text, Icon, Button, NavBar } from "components/Reusable"
import { useTheme } from "contexts"
import { getBgColor, getTextColor, getIconColor } from 'utils'

const LoginHeader = () => {
    const [isSmallNavVisible, setIsSmallNavVisible] = useState(false)
    const { theme, toggleTheme } = useTheme()

    function toggleNavVisibility() {
        setIsSmallNavVisible(!isSmallNavVisible)
    }

    return (
        <Header>

            <Link to='/'>
                <Text classes='txt-lg txt-ucase'>
                    sneakerstore
                </Text>
            </Link>

            <NavBar id='nav-big' classes='flx-min-center'>

                <Link to='/products'>
                    <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-lcase mg-right-lg`}>
                        browse
                    </Button>
                </Link>

                <Link to='/wishlist'>
                    <Icon classes={`${getIconColor(theme)} mg-right-lg`}>
                        favorite
                    </Icon>
                </Link>


                <Link to='/cart'>
                    <Icon classes={`${getIconColor(theme)} mg-right-lg`}>
                        shopping_cart
                    </Icon>
                </Link>


                <Link to='/signup'>
                    <Button classes={`btn-txt txt-lcase ${getTextColor(theme)} pd-xs txt-md`}>
                        signup
                    </Button>
                </Link>

            </NavBar>

            <div className='pos-relative'>

                <Button id='btn-ham' onClick={toggleNavVisibility} classes='btn-txt mg-top-xs'>

                    <Icon classes={getIconColor(theme)}>
                        menu
                    </Icon>

                </Button>

                {
                    isSmallNavVisible &&
                    <NavBar id='nav-small' classes={`flx-column pd-md ${getBgColor(theme)} pos-absolute z-index tl-0 b-solid`}>

                        <Button onClick={toggleNavVisibility} classes='btn-txt mg-btm-xs'>

                            <Icon classes={getIconColor(theme)}>
                                close
                            </Icon>

                        </Button>

                        <Link to='/products'>

                            <Button classes={`btn-txt ${getTextColor(theme)} txt-md txt-lcase mg-btm-xs`}>
                                browse
                            </Button>

                        </Link>

                        <Link to='/wishlist'>
                            <Icon classes={`${getIconColor(theme)} mg-btm-xs`}>
                                favorite
                            </Icon>
                        </Link>

                        <Link to='/cart'>
                            <Icon classes={`flx ${getIconColor(theme)} mg-btm-xs`}>
                                shopping_cart
                            </Icon>
                        </Link>

                        <Link to='/signup'>
                            <Button classes={`btn-txt txt-lcase ${getTextColor(theme)} txt-md`}>
                                signup
                            </Button>
                        </Link>

                    </NavBar>

                }

            </div>

            <Button onClick={toggleTheme} classes='btn-txt pd-xs'>

                <Icon classes={getIconColor(theme)}>
                    {
                        theme === 'light' ? 'bedtime' : 'light_mode'
                    }
                </Icon>
            </Button>

        </Header>
    )
}

export default LoginHeader