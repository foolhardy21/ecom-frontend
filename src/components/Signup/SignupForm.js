import { useState } from "react"

const SignupForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [enteredFName, setEnteredFName] = useState('')
    const [fNameError, setFNameError] = useState(false)

    const [enteredLName, setEnteredLName] = useState('')
    const [lNameError, setLNameError] = useState(false)

    const [enteredPassword, setEnteredPassword] = useState('')
    const [passError, setPassError] = useState(false)

    const [enteredConfPassword, setEnteredConfPassword] = useState('')
    const [confPassError, setConfPassError] = useState(false)

    const [passInputType, setPassInputType] = useState('password')

    function emailIsInvalid() {

        const emailReg = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

        if (!emailReg.test(enteredEmail)) {
            return true
        } else {
            return false
        }
    }

    function nameIsInvalid(nameStr) {

        const nameReg = new RegExp(/\d/ig)

        if (nameStr.length === 0 || nameReg.test(nameStr)) {
            return true
        } else {
            return false
        }
    }

    function passIsInvalid() {
        if (enteredPassword.length === 0) {
            return true
        } else {
            return false
        }
    }
    function passAndConfPassAreDiff() {
        if (enteredPassword !== enteredConfPassword) {
            return true
        } else {
            return false
        }
    }

    function signUpUser(e) {
        e.preventDefault()

        if (emailIsInvalid()) {
            setEmailError(true)
            setTimeout(() => {
                setEmailError(false)
            }, 2000)
        }
        if (nameIsInvalid(enteredFName)) {
            setFNameError(true)
            setTimeout(() => {
                setFNameError(false)
            }, 2000)
        }
        if (nameIsInvalid(enteredLName)) {
            setLNameError(true)
            setTimeout(() => {
                setLNameError(false)
            }, 2000)
        }
        if (passIsInvalid()) {
            setPassError(true)
            setTimeout(() => {
                setPassError(false)
            }, 2000)
        }
        if (passAndConfPassAreDiff()) {
            setConfPassError(true)
            setTimeout(() => {
                setConfPassError(false)
            }, 2000)
        }

    }

    function togglePassInputType() {
        if (passInputType === 'password') {
            setPassInputType('text')
        } else {
            setPassInputType('password')
        }
    }


    return (
        <form className='auth-form flx flx-column txt-primary mg-left-xlg mg-right-xlg'>
            {
                emailError && <span className="txt-md txt-err txt-cap mg-top-s">email is invalid</span>
            }
            <input type='email' id='email-input' placeholder="email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} className={`${emailError ? 'input-err' : 'mg-top-s'} input input-lg txt-md pd-xs`} />

            {
                fNameError && <span className="txt-md txt-err txt-cap mg-top-s">first name is invalid</span>
            }
            <input type='text' id='fname-input' placeholder="first name" value={enteredFName} onChange={(e) => setEnteredFName(e.target.value)}
                className={`${fNameError ? 'input-err' : 'mg-top-s'} input input-lg txt-md pd-xs`} />

            {
                lNameError && <span className="txt-md txt-err txt-cap mg-top-s">last name is invalid</span>
            }
            <input type='text' id='lname-input' placeholder="last name" value={enteredLName} onChange={(e) => setEnteredLName(e.target.value)}
                className={`${lNameError ? 'input-err' : 'mg-top-s'} input input-lg txt-md pd-xs`} />

            {
                passError && <span className="txt-md txt-err txt-cap mg-top-s">enter password</span>
            }
            <input type={passInputType} id='pass-input' placeholder="password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
                className={`${passError ? 'input-err' : 'mg-top-s'} input input-lg txt-md pd-xs`} />

            {
                confPassError && <span className="txt-md txt-err txt-cap mg-top-s">password is not matching</span>
            }
            <input type={passInputType} id='cpass-input' placeholder="confirm password" value={enteredConfPassword} onChange={(e) => setEnteredConfPassword(e.target.value)}
                className={`${confPassError ? 'input-err' : 'mg-top-s'} input input-lg txt-md pd-xs`} />

            <div className='flx flx-maj-end flx-min-center mg-btm-xs'>

                <input type='checkbox' id='toggle-pass' />

                <label htmlFor='toggle-pass' onClick={togglePassInputType} className='txt-cap mg-left-xs txt-md txt-primary'>
                    show password
                </label>

            </div>

            <div className='flx flx-maj-start flx-min-center mg-btm-s'>

                <input type='checkbox' id='terms-check' />

                <label htmlFor='terms-check' className='txt-md txt-cap mg-left-xs'>
                    i accept all terms & conditions
                </label>

            </div>

            <button onClick={signUpUser} className='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>
                sign up
            </button>

        </form>
    )
}

export default SignupForm