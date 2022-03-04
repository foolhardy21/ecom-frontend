import PageHeader from './PageHeader'
import SignupCard from './SignupCard'
import Main from '../Reusable/Main'
import { getBgColor } from '../../utils/theme'
import { useTheme } from '../../contexts/theme.context'

const Signup = () => {
    const { theme } = useTheme()

    return (

        <div style={{
            minHeight: '100vh',
        }}
            className={`${getBgColor(theme)}`}
        >

            <PageHeader />

            <Main classes='flx flx-maj-even'>

                <SignupCard />

            </Main>

        </div>
    )
}

export default Signup