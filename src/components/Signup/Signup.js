import { SignupHeader, SignupCard } from './'
import { Main } from '../Reusable'
import { getBgColor } from '../../utils'
import { useTheme } from '../../contexts/theme.context'

const Signup = () => {
    const { theme } = useTheme()

    return (

        <div style={{
            minHeight: '100vh',
        }}
            className={`${getBgColor(theme)}`}
        >

            <SignupHeader />

            <Main classes='flx-maj-even'>

                <SignupCard />

            </Main>

        </div>
    )
}

export default Signup