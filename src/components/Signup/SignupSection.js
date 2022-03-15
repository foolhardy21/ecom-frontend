import SignupForm from "./SignupForm"

const SignupSection = () => {
    return (
        <section className='card-shadow-xs flx flx-column flx-center pd-lg mg-top-lg'>

            <p className='txt-cap txt-lg'>
                signup
            </p>

            <SignupForm />

            <button className='btn-outlined txt-primary txt-md b-solid b-secondary flx flx-center txt-cap pd-xs mg-top-xs'>
                already have an account

                <span className='material-icons'>
                    chevron_right
                </span>

            </button>

        </section>
    )
}

export default SignupSection