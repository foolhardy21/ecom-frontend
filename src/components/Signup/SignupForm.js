import { useState } from "react"
import Form from "../Reusable/Form"
import Input from "../Reusable/Input"
import Label from "../Reusable/Label"
import Text from "../Reusable/Text"
import Button from "../Reusable/Button"

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
        <Form classes='flx flx-column txt-primary mg-left-lg mg-right-lg'>
            <Input type='email' placeholder="email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} classes={`${emailError && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                emailError && <Text classes="txt-md txt-cap txt-err mg-top-xs mg-left-xs">email is invalid</Text>
            }

            <Input type='text' placeholder="first name" value={enteredFName} onChange={(e) => setEnteredFName(e.target.value)}
                classes={`${fNameError && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                fNameError && <Text classes="txt-md txt-err txt-cap mg-top-xs mg-left-xs">first name is invalid</Text>
            }

            <Input type='text' placeholder="last name" value={enteredLName} onChange={(e) => setEnteredLName(e.target.value)}
                classes={`${lNameError && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                lNameError && <span className="txt-md txt-err txt-cap mg-left-xs mg-top-xs">last name is invalid</span>
            }

            <Input type={passInputType} placeholder="password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
                classes={`${passError && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                passError && <Text classes="txt-md txt-err txt-cap mg-left-xs mg-top-xs">enter password</Text>
            }

            <Input type={passInputType} placeholder="confirm password" value={enteredConfPassword} onChange={(e) => setEnteredConfPassword(e.target.value)}
                classes={`${confPassError && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                confPassError && <Text className="txt-md txt-err txt-cap mg-left-xs mg-top-xs">password is not matching</Text>
            }

            <div className='flx flx-maj-end flx-min-center mg-btm-xs'>

                <Input type='checkbox' id='toggle-pass' />

                <Label for='toggle-pass' onClick={togglePassInputType} classes='txt-cap mg-left-xs txt-md txt-primary'>
                    show password
                </Label>

            </div>

            <div className='flx flx-maj-start flx-min-center mg-btm-s'>

                <Input type='checkbox' id='terms-check' />

                <Label for='terms-check' classes='txt-md txt-cap mg-left-xs'>
                    i accept all terms & conditions
                </Label>

            </div>

            <Button onClick={signUpUser} classes='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>
                sign up
            </Button>

        </Form>
    )
}

export default SignupForm