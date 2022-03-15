import SignupForm from "./SignupForm"
import Card from "../Reusable/Card"
import Text from "../Reusable/Text"
import Button from "../Reusable/Button"
import Icon from "../Reusable/Icon"

const SignupCard = () => {

    return (
        <Card classes='flx flx-column flx-center pd-lg mg-top-lg'>

            <Text classes='txt-cap txt-lg'>
                signup
            </Text>

            <SignupForm />

            <Button classes='btn-outlined txt-primary txt-md b-solid b-primary flx flx-center txt-cap pd-xs mg-top-xs'>
                already have an account

                <Icon classes='icon-primary'>
                    chevron_right
                </Icon>

            </Button>

        </Card>
    )
}

export default SignupCard