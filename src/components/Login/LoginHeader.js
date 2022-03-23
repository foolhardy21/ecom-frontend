import { Header, Text, Icon, Button, NavBar } from "../Reusable"
import { useTheme } from "../../contexts"

const LoginHeader = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Header>

            <Text classes='txt-ucase txt-primary txt-lg'>sneakerstore</Text>

            <NavBar>

                <Icon classes='mg-right-s'>
                    person
                </Icon>

                <Icon classes='mg-right-s'>
                    favorite
                </Icon>

                <Icon classes='mg-right-s'>
                    shopping_cart
                </Icon>

            </NavBar>

            <Button onClick={toggleTheme} classes='btn-txt'>

                <Icon classes='pd-xs'>
                    {theme === 'light' ? 'bedtime' : 'light_mode'}
                </Icon>

            </Button>

        </Header>
    )
}

export default LoginHeader