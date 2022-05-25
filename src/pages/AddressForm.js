import { AddressFormSection, ProfileHeader } from "components/Profile"
import { Main, Text } from "components/Reusable"
import { useTheme } from "contexts"
import useTitle from "hooks/useTitle"
import { getBgColor, getTextColor } from "utils"

const AddressForm = () => {
    useTitle('Address')
    const { theme } = useTheme()

    return (
        <div
            style={{
                minHeight: '100vh',
            }}
            className={getBgColor(theme)}
        >

            <ProfileHeader />

            <Main classes="flx flx-column flx-center">

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>add a new address</Text>

                <AddressFormSection />

            </Main>

        </div>
    )
}

export default AddressForm