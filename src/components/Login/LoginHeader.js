import Header from "../Reusable/Header"
import NavBar from "../Reusable/NavBar"
import Icon from "../Reusable/Icon"
import Text from "../Reusable/Text"
import Button from "../Reusable/Button"
import { useTheme } from "../../context/theme-context"
import { getTextColor } from "../../utils/theme-util"

const LoginHeader = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Header>

            <Text classes={`txt-ucase ${getTextColor(theme)} txt-primary txt-lg`} text='sneakerstore' />

            <NavBar>
                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'} mg-right-s`} iconName='person' />

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'} mg-right-s`} iconName='favorite' />

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'}`} iconName='shopping_cart' />
            </NavBar>

            <Button onClick={toggleTheme} classes='btn-txt'>
                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'} pd-xs`} id='btn-theme' iconName={`${theme === 'light' ? 'bedtime' : 'light_mode'}`} />
            </Button>

        </Header>
    )
}

export default LoginHeader