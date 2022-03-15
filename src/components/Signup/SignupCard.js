import SignupForm from "./SignupForm"
import Card from "../Reusable/Card"
import Text from "../Reusable/Text"
import Button from "../Reusable/Button"
import Icon from "../Reusable/Icon"
import { getBgColor, getBorderColor, getTextColor } from "../../utils/theme"
import { useTheme } from "../../contexts/theme.context"

const SignupCard = () => {
    const { theme } = useTheme()

    return (

        <Card classes='flx flx-column flx-center pd-lg mg-top-lg'>

            <Text classes={`txt-cap txt-lg ${getTextColor(theme)}`}>
                signup
            </Text>

            <SignupForm />

            <Button classes={`btn-outlined ${getBgColor(theme)} ${getTextColor(theme)} ${getBorderColor(theme)} b-solid txt-md flx flx-center txt-cap pd-xs mg-top-xs`}>
                already have an account

                <Icon classes={`${theme === 'light' ? 'icon-primary' : 'icon-secondary'}`}>

                    chevron_right

                </Icon>

            </Button>

        </Card>
    )
}

export default SignupCard