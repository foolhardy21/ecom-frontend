
const SignupForm = () => {

    return (
        <form className='auth-form flx flx-column txt-primary mg-left-xlg mg-right-xlg'>
            <input type='email' id='email-input' placeholder="email" className="input input-lg txt-md pd-xs mg-top-s" />

            <input type='text' id='fname-input' placeholder="first name"
                className="input input-lg txt-md pd-xs mg-top-s" />

            <input type='text' id='lname-input' placeholder="last name"
                className="input input-lg txt-md pd-xs mg-top-s" />

            <input type='password' id='pass-input' placeholder="password"
                className="input input-lg txt-md pd-xs mg-top-s" />

            <input type='password' id='cpass-input' placeholder="confirm password"
                className="input input-lg txt-md pd-xs mg-top-s" />

            <div className='flx flx-maj-end flx-min-center mg-btm-xs'>

                <input type='checkbox' id='toggle-pass' />

                <label htmlFor='toggle-pass' className='txt-cap mg-left-xs txt-md txt-primary'>
                    show password
                </label>

            </div>

            <div className='flx flx-maj-start flx-min-center mg-btm-s'>

                <input type='checkbox' id='terms-check' />

                <label htmlFor='terms-check' className='txt-md txt-cap mg-left-xs'>
                    i accept all terms & conditions
                </label>

            </div>

            <button className='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>
                sign up
            </button>

        </form>
    )
}

export default SignupForm