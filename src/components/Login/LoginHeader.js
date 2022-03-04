import Header from "../Reusable/Header"
import NavBar from "../Reusable/NavBar"
import Icon from "../Reusable/Icon"
import Text from "../Reusable/Text"

const LoginHeader = () => {

    return (
        <Header>

            <Text classes='txt-ucase txt-primary txt-lg' text='sneakerstore' />

            <NavBar>
                <Icon classes='icon-primary mg-right-s' iconName='person' />

                <Icon classes='icon-primary mg-right-s' iconName='favorite' />

                <Icon classes='icon-primary' iconName='shopping_cart' />
            </NavBar>

            <Icon classes='icon-primary pos-absolute tr-1 pd-s' id='btn-theme' iconName='bedtime' />

        </Header>
    )
}

export default LoginHeader