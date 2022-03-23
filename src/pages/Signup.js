import { SignupHeader, SignupCard } from '../components/Signup'
import { Main, Alert } from '../components/Reusable'
import { getBgColor } from '../utils'
import { useAlert, useTheme } from '../contexts'

const Signup = () => {
    const { theme } = useTheme()
    const { alert } = useAlert()

    return (

        <div style={{
            minHeight: '100vh',
        }}
            className={getBgColor(theme)}
        >

            <SignupHeader />

            {
                alert.type === 'error'
                    ? <Alert classes='bg-err mg-top-s mg-btm-s'>{alert.message}</Alert>
                    : alert.type === 'success' ? <Alert classes='bg-success mg-top-s mg-btm-s'>{alert.message}</Alert> : ''
            }

            <Main classes='flx flx-maj-even'>

                <SignupCard />

            </Main>

        </div>
    )
}

export default Signup