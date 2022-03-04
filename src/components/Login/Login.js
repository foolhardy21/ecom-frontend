import Main from "../Reusable/Main"
import LoginHeader from "./LoginHeader"
import LoginCard from "./LoginCard"
import { useTheme } from "../../context/theme-context"
import { getBgColor } from "../../utils/theme-util"

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
