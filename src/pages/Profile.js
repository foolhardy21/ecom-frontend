import { AddressForm, AddressSection, ProfileHeader } from "components/Profile"
import { Main, Text, Alert } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import { getBgColor, getTextColor } from "utils"

const Profile = () => {
    const { theme } = useTheme()
    const { addressState: { alert } } = useAddress()

    return (
        <div
            style={{
                minHeight: '100vh',
            }}
            className={getBgColor(theme)}
        >
            <ProfileHeader />

            <div className="pos-relative mg-xs">
                {
                    alert.message && <Alert type={alert.type}>{alert.message}</Alert>
                }
            </div>

            <Main classes="flx flx-column flx-center">

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md`}>your addresses</Text>


                <AddressForm />

                <AddressSection />

            </Main>

        </div>
    )
}

export default Profile