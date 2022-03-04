import PageHeader from './PageHeader'
import SignupCard from './SignupCard'
import Main from '../Reusable/Main'

const Signup = () => {

    return (
        <div style={{
            minHeight: '100vh',
        }}>

            <PageHeader />

            <Main classes='flx flx-maj-even'>

                <SignupCard />

            </Main>
        </div>
    )
}

export default Signup