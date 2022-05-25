import { ProfileHeader } from "components/Profile"
import { Button, Card, Main, Section, Text } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import useTitle from "hooks/useTitle"
import { getBgColor, getBorderColor, getTextColor } from "utils"
import styles from 'components/Profile/profile.module.css'
import { useNavigate } from "react-router-dom"

const Addresses = () => {
    useTitle('Addresses')
    const { theme } = useTheme()
    const navigate = useNavigate()
    const { addressState: { addresses } } = useAddress()

    return (
        <div
            style={{
                minHeight: '100vh',
            }}
            className={getBgColor(theme)}
        >

            <ProfileHeader />

            <Main classes="flx flx-column flx-center">

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>your addresses</Text>

                <Section classes={`grid grid-maxcols-3 ${styles.gridProfile}`}>

                    <Card onClick={() => navigate('/profile/addresses/form')} classes={`${styles.cardAddAddress} flx flx-center`}>
                        <Text classes={`txt-off-secondary txt-lg txt-cap txt-700`}>add address</Text>
                    </Card>

                    {
                        addresses?.map(address => <Card key={address.name} classes={`${styles.cardAddress} flx flx-column flx-maj-stretch pd-xs`}>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{address.name}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.building}, ${address.street}`}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.city}, ${address.state}, ${address.pincode}`}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.country}`}</Text>
                            <Text classes={`${getTextColor(theme)} txt-md txt-cap`}>{`${address.phoneNumber}`}</Text>
                            <div className="flx flx-maj-start flx-min-center">
                                <Button classes={`btn-outlined ${getTextColor(theme)} ${getBorderColor(theme)} txt-md txt-lcase pd-left-xs pd-right-xs mg-right-xs`}>edit</Button>
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