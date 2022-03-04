import Card from "../Reusable/Card"
import Text from "../Reusable/Text"
import Button from "../Reusable/Button"
import Icon from "../Reusable/Icon"
import LoginForm from "./LoginForm"
import { useTheme } from '../../context/theme-context'
import { getBorderColor, getBgColor, getTextColor } from '../../utils/theme-util'

const LoginCard = () => {
    const { theme } = useTheme()

    return (
        <Card classes={`${theme === 'dark' && 'b-solid b-secondary'} flx flx-column flx-center pd-lg`}>

            <Text text='login' classes={`${getTextColor(theme)} txt-cap txt-lg`} />

            <LoginForm />

            <Button text='create new account' classes={`${getTextColor(theme)} ${getBgColor(theme)} ${getBorderColor(theme)} btn-outlined txt-md txt-cap b-solid flx flx-center pd-xs mg-top-xs`}>

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'}`} iconName='chevron_right' />

            </Button>

        </Card>
    )
}

export default LoginCard