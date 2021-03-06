import { useNavigate } from "react-router-dom"
import { ProfileHeader } from "components/Profile"
import { Main, Text, Alert, Section, Button } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import { getBgColor, getTextColor } from "utils"
import styles from 'components/Profile/profile.module.css'
import useTitle from "hooks/useTitle"

const Profile = () => {
    useTitle('Profile')
    const navigate = useNavigate()
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

                <Text classes={`${getTextColor(theme)} txt-lg txt-cap mg-top-md mg-btm-md`}>your profile</Text>

                <Section classes={`grid grid-maxcols-3 ${styles.gridProfile}`}>

                    <Button onClick={() => navigate('/profile/account')} classes={`btn-outlined ${theme === 'dark' && 'b-solid b-secondary'} ${getTextColor(theme)} pd-s txt-md txt-cap`}>
                        account
                    </Button>

                    <Button onClick={() => navigate('/profile/addresses')} classes={`btn-outlined ${theme === 'dark' && 'b-solid b-secondary'} ${getTextColor(theme)} pd-s txt-md txt-cap`}>
                        adddresses
                    </Button>

                </Section>

            </Main>

        </div>
    )
}

export default Profile