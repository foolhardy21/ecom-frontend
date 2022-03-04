import NavBar from "../Reusable/NavBar"
import Header from "../Reusable/Header"
import Text from "../Reusable/Text"
import Icon from "../Reusable/Icon"
import Button from "../Reusable/Button"
import { useTheme } from '../../contexts/theme.context'
import { getTextColor } from "../../utils/theme"

const PageHeader = () => {
    const { theme, toggleTheme } = useTheme()

    return (

        <Header>

            <Text classes={`txt-ucase ${getTextColor(theme)} txt-lg`}>
                sneakerstore
            </Text>

            <NavBar>

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'} mg-right-s`}>
                    person
                </Icon>

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'} mg-right-s`}>
                    favorite
                </Icon>

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'}`}>
                    shopping_cart
                </Icon>

            </NavBar>

            <Button onClick={toggleTheme} classes='btn-txt'>

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'} pd-xs`}>
                    {
                        theme === 'light' ? 'bedtime' : 'light_mode'
                    }
                </Icon>

            </Button>

        </Header>

    )
}

export default PageHeader