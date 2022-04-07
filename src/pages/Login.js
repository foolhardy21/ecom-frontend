import { LoginHeader, LoginCard } from 'components/Login'
import { Main, Alert } from 'components/Reusable'
import { useLogin, useTheme } from "contexts"
import useTitle from 'hooks/useTitle'
import { getBgColor } from "utils"

const Login = () => {
    useTitle('Login')
    const { theme } = useTheme()
    const { loginAlert } = useLogin()

    return (
        <div style={{
            minHeight: '100vh',
        }} className={getBgColor(theme)}>

            <LoginHeader />

            <div className='flx flx-center'>
                {
                    loginAlert.message && <Alert type={loginAlert.type}>{loginAlert.message}</Alert>
                }
            </div>

            <Main classes='flx flx-maj-even mg-top-xxlg'>

                <LoginCard />

            </Main>
        </div>
    );
}

export default Login;
