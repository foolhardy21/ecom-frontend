import { LoginHeader, LoginCard } from '../components/Login'
import { Main } from '../components/Reusable'
import { useTheme } from "../contexts"
import { getBgColor } from "../utils"

const Login = () => {
    const { theme } = useTheme()

    return (
        <div style={{
            minHeight: '100vh',
        }} className={`${getBgColor(theme)}`}>
            <LoginHeader />

            <Main classes='flx flx-maj-even mg-top-xxlg'>

                <LoginCard />

            </Main>
        </div>
    );
}

export default Login;
