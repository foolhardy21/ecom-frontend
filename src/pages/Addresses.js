import { ProfileHeader } from "components/Profile"
import { Alert, Button, Card, Main, Section, Text } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import useTitle from "hooks/useTitle"
import { getBgColor, getBorderColor, getTextColor } from "utils"
import styles from 'components/Profile/profile.module.css'
import { useNavigate } from "react-router-dom"

const Addresses = () => {
    useTitle('Addresses')
    const { theme } = useTheme()
    const navigate = useNavigate()
    const { addressState: { addresses, alert }, setAddressToBeUpdated } = useAddress()

    const handleEditAddress = (id) => {
        setAddressToBeUpdated(addresses.find(address => address._id === id))
        navigate('/profile/addresses/form')
    }

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

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>your addresses</Text>

                <Section classes={`grid grid-maxcols-3 ${styles.gridProfile}`}>

                    <Card onClick={() => navigate('/profile/addresses/form')} classes={`${styles.cardAddAddress} flx flx-center`}>
                        <Text classes={`txt-off-secondary txt-lg txt-cap txt-700`}>add address</Text>
                    </Card>

                    {
                        addresses?.map(address => <Card key={address._id} classes={`${styles.cardAddress} flx flx-column flx-maj-stretch pd-xs`}>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{address.name}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.building}, ${address.street}`}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.city}, ${address.state}, ${address.pincode}`}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.country}`}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.phoneNumber}`}</Text>
                            <div className="flx flx-maj-start flx-min-center">
                                <Button onClick={() => handleEditAddress(address._id)} classes={`btn-outlined ${getTextColor(theme)} ${getBorderColor(theme)} txt-md txt-lcase pd-left-xs pd-right-xs mg-right-xs`}>edit</Button>
                                <Button classes={`btn-outlined ${getTextColor(theme)} ${getBorderColor(theme)} txt-md txt-lcase pd-left-xs pd-right-xs mg-right-xs`}>remove</Button>
                                {
                                    !address.default && <Button classes={`btn-outlined ${getTextColor(theme)} ${getBorderColor(theme)} txt-md txt-lcase pd-left-xs pd-right-xs`}>set as default</Button>
                                }
                            </div>
                        </Card>
                        )
                    }

                </Section>

            </Main>


        </div>
    )
}

export default Addresses