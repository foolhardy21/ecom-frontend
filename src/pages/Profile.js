import { AddressForm, AddressSection, ProfileHeader } from "components/Profile"
import { Main, Text } from "components/Reusable"
import { useTheme } from "contexts"
import { getBgColor, getTextColor } from "utils"

const Profile = () => {
    const { theme } = useTheme()
    // before adding address to the list, if address with same id exists then replace it else append it in the list.
    // on edit click, set the form input state to that particular address object

    return (
        <div
            style={{
                minHeight: '100vh',
            }}
            className={getBgColor(theme)}
        >
            <ProfileHeader />

            <Main classes="flx flx-column flx-center">

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md`}>your addresses</Text>

                <AddressForm />

                <AddressSection />

            </Main>

        </div>
    )
}

export default Profile