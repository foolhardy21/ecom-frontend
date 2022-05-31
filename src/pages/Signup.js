import { SignupHeader, SignupCard } from 'components/Signup'
import { Main, Alert } from 'components/Reusable'
import { getBgColor } from 'utils'
import { useSignup, useTheme } from 'contexts'
import useTitle from 'hooks/useTitle'

const Signup = () => {
    useTitle('Signup')
    const { theme } = useTheme()
    const { signupAlert } = useSignup()

    return (

        <div style={{
            minHeight: '100vh',
        }}
            className={getBgColor(theme)}
        >

            <SignupHeader />

            <div className='pos-relative mg-xs'>
                {
                    signupAlert.message && <Alert type={signupAlert.type}>{signupAlert.message}</Alert>
                }
            </div>

            <Main classes='flx flx-maj-even'>

                <SignupCard />

            </Main>

        </div>
    )
}

export default Signup