import Card from "../Reusable/Card"
import Text from "../Reusable/Text"
import Button from "../Reusable/Button"
import Icon from "../Reusable/Icon"
import LoginForm from "./LoginForm"

const LoginCard = () => {

    return (
        <Card classes='flx flx-column flx-center pd-lg mg-top-lg'>

            <Text text='login' classes='txt-cap txt-lg txt-primary' />

            <LoginForm />

            <Button text='create new account' classes='btn-outlined txt-primary txt-md txt-cap bg-primary b-solid b-secondary flx flx-center pd-xs mg-top-xs'>

                <Icon classes='icon-primary' iconName='chevron_right' />

            </Button>

        </Card>
    )
}

export default LoginCard