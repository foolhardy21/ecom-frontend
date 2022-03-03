
const LoginForm = () => {
    return (
        <form className='auth-form flx flx-column txt-primary mg-left-xlg mg-right-xlg'>

            <input type='email' id='email-input' placeholder="enter email here"
                className="input input-lg txt-md pd-xs mg-top-s" />

            <input type='password' id='pass-input' placeholder="enter password here"
                className="input input-lg txt-md pd-xs mg-top-s" />

            <div className='flx flx-maj-stretch flx-min-center mg-top-s mg-btm-s'>

                <div className='flx-min-center'>
                    <input type='radio' id='terms-check' />
                    <label htmlFor='terms-check' className='txt-cap txt-md mg-left-xs'>remember me</label>
                </div>

                <button type="button" className='btn-txt txt-primary txt-md txt-cap pd-xs mg-left-xs bg-primary'>
                    forgot your password?
                </button>

            </div>

            <button type="submit" className='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>
                log in
            </button>

        </form>
    )
}

export default LoginForm