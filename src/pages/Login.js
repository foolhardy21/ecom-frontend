import { LoginHeader, LoginCard } from '../components/Login'
import { Main, Alert } from '../components/Reusable'
import { useAlert, useTheme } from "../contexts"
import { getBgColor } from "../utils"

const Login = () => {
    const { theme } = useTheme()
    const { alert } = useAlert()

    return (
        <div style={{
            minHeight: '100vh',
        }} className={getBgColor(theme)}>

            <LoginHeader />

            {
                alert.type === 'error' && <Alert classes='bg-err mg-top-s mg-btm-s'>{alert.message}</Alert>
            }

            <Main classes='flx flx-maj-even mg-top-xxlg'>

                <LoginCard />

            </Main>
        </div>
    );
}

export default Login;
