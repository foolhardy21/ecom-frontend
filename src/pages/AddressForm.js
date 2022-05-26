import { AddressFormSection, ProfileHeader } from "components/Profile"
import { Alert, Main, Text } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import useTitle from "hooks/useTitle"
import { getBgColor, getTextColor } from "utils"

const AddressForm = () => {
    useTitle('Address')
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

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>add a new address</Text>

                <AddressFormSection />

            </Main>

        </div>
    )
}

export default AddressForm