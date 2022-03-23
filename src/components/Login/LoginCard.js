import { LoginForm } from './'
import { Card, Text, Button, Icon } from '../Reusable'
import { useTheme } from '../../context/theme-context'
import { getBorderColor, getBgColor, getTextColor } from '../../utils'

const LoginCard = () => {
    const { theme } = useTheme()

    return (
        <Card classes='flx flx-column flx-center pd-lg'>

            <Text text='login' classes='txt-cap txt-lg'>
                login
            </Text>

            <LoginForm />

            <Button text='create new account' classes={`${getTextColor(theme)} ${getBgColor(theme)} ${getBorderColor(theme)} btn-outlined txt-md txt-cap b-solid flx flx-center pd-xs mg-top-xs`}>

                <Icon>
                    chevron_right
                </Icon>

            </Button>

        </Card>
    )
}

export default LoginCard