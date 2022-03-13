import { Header, Text, NavBar, Icon, Button } from '../Reusable'
import { useTheme } from '../../contexts/theme.context'

const SignupHeader = () => {
    const { theme, toggleTheme } = useTheme()

    return (

        <Header>

            <Text classes='txt-ucase txt-lg'>
                sneakerstore
            </Text>

            <NavBar>

                <Icon classes='mg-right-s'>
                    person
                </Icon>

                <Icon classes='mg-right-s'>
                    favorite
                </Icon>

                <Icon>
                    shopping_cart
                </Icon>

            </NavBar>

            <Button onClick={toggleTheme} classes='btn-txt'>

                <Icon classes='pd-xs'>
                    {
                        theme === 'light' ? 'bedtime' : 'light_mode'
                    }
                </Icon>

            </Button>

        </Header>

    )
}

export default SignupHeader