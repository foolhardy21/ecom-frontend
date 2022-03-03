import LoginForm from "./LoginForm"

const LoginSection = () => {
    return (
        <section className='card-shadow-xs flx flx-column flx-center pd-lg mg-top-lg'>

            <p className='txt-cap txt-lg txt-primary'>
                login
            </p>

            <LoginForm />

            <button
                className='btn-outlined txt-primary txt-md txt-cap bg-primary b-solid b-secondary flx flx-center pd-xs mg-top-xs'>
                create new account

                <span className='material-icons'>
                    chevron_right

                </span>

            </button>

        </section>

    )
}

export default LoginSection