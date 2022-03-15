import { SignupHeader, SignupCard } from '../components/Signup'
import { Main } from '../components/Reusable'
import { getBgColor } from '../utils'
import { useTheme } from '../contexts'

const Signup = () => {
    const { theme } = useTheme()

    return (

        <div style={{
            minHeight: '100vh',
        }}
            className={`${getBgColor(theme)}`}
        >

            <SignupHeader />

            <Main classes='flx flx-maj-even'>

                <SignupCard />

            </Main>

        </div>
    )
}

export default Signup