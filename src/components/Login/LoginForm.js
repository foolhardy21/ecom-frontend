import { useState } from "react"

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    function logInUser(e) {
        e.preventDefault()
        if (enteredEmail === '' || enteredEmail.indexOf('@') === -1) {
            setEmailError(true)
            setTimeout(() => {
                setEmailError(false)
            }, 2000)
        }
        if (enteredPassword === '') {
            setPasswordError(true)
            setTimeout(() => {
                setPasswordError(false)
            }, 2000)
        } else {
            //redirect to profile page
        }

    }

    function forgotPassword(e) {
        e.preventDefault()
        // redirect to new page for forgot password
    }

    return (
        <form className='auth-form flx flx-column txt-primary mg-left-xlg mg-right-xlg'>

            {
                emailError && <span className="txt-md txt-err txt-cap mg-top-s">
                    entered email is not valid.
                </span>
            }

            <input type='email' id='email-input' placeholder="enter email here" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)}
                className={`${emailError ? 'input input-err' : 'input mg-top-s'} input-lg txt-md pd-xs`} />

            {
                passwordError && <span className="txt-md txt-err txt-cap mg-top-s">
                    entered password is not valid.
                </span>
            }

            <input type='password' id='pass-input' placeholder="enter password here" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
                className={`${passwordError ? 'input input-err' : 'input mg-top-s'}  input-lg txt-md pd-xs`} />

            <div className='flx flx-maj-stretch flx-min-center mg-top-s mg-btm-s'>

                <div className='flx-min-center'>
                    <input type='radio' id='terms-check' />
                    <label htmlFor='terms-check' className='txt-cap txt-md mg-left-xs'>remember me</label>
                </div>

                <button onClick={forgotPassword} className='btn-txt txt-primary txt-md txt-cap pd-xs mg-left-xs bg-primary'>
                    forgot your password?
                </button>

            </div>

            <button onClick={logInUser} className='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>
                log in
            </button>

        </form>
    )
}

export default LoginForm