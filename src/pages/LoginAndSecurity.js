import { ProfileHeader } from "components/Profile"
import { Card, Text } from "components/Reusable"
import { useAuth, useTheme } from "contexts"
import useTitle from "hooks/useTitle"
import { getBgColor, getTextColor } from "utils"
import styles from 'components/Profile/profile.module.css'

const LoginAndSecurity = () => {
    useTitle('Account')
    const { theme } = useTheme()
    const { getUser } = useAuth()

    return (
        <div
            style={{
                minHeight: '100vh',
            }}
            className={getBgColor(theme)}
        >
            <ProfileHeader />

            <Text classes={`txt-lg txt-cap ${getTextColor(theme)} flx flx-center mg-top-lg`}>your account</Text>

            <div className="flx flx-center mg-md">
                <Card classes={`${styles.cardAddress} flx flx-column pd-xs`}>
                    <Text classes={`txt-md txt-cap txt-500 ${getTextColor(theme)} mg-top-md`}>email</Text>
                    <Text classes={`txt-md ${getTextColor(theme)}`}>{getUser().email}</Text>
                    <Text classes={`txt-md txt-cap txt-500 ${getTextColor(theme)} mg-top-md`}>account created at</Text>
                    <Text classes={`txt-md ${getTextColor(theme)}`}>{`${new Date(getUser().createdAt).getDate()}-${new Date(getUser().createdAt).getMonth()}-${new Date(getUser().createdAt).getFullYear()}`}</Text>
                    <Text classes={`txt-md txt-cap txt-500 ${getTextColor(theme)} mg-top-md`}>name</Text>
                    <Text classes={`txt-md ${getTextColor(theme)}`}>{`${getUser().firstName} ${getUser().lastName}`}</Text>
                </Card>
            </div>

        </div>
    )
}

export default LoginAndSecurity