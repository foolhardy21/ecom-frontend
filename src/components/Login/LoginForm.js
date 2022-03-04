import { useState } from "react"
import Form from "../Reusable/Form"
import Input from "../Reusable/Input"
import Label from "../Reusable/Label"
import Button from "../Reusable/Button"
import Text from "../Reusable/Text"
import { emailIsInvalid, passIsInvalid } from "../../utils/inputValidation"

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    function logInUser(e) {

        e.preventDefault()

        if (emailIsInvalid(enteredEmail)) {
            setEmailError(true)
            setTimeout(() => {
                setEmailError(false)
            }, 2000)
        }

        if (passIsInvalid(enteredPassword)) {
            setPasswordError(true)
            setTimeout(() => {
                setPasswordError(false)
            }, 2000)
        }

        else {
            //redirect to profile page
        }

    }

    function forgotPassword(e) {
        e.preventDefault()
        // redirect to new page for forgot password
    }

    return (
        <Form>

            <Input type='email' placeholder='enter email here' value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)}
                classes={`${emailError && 'input-err'} input input-lg txt-primary txt-md pd-xs mg-top-s`} />
            {
                emailError && <Text classes='txt-md txt-err txt-cap mg-left-xs mg-top-xs' text='entered email is not valid.' />
            }

            <Input type='password' placeholder='enter password here' value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
                classes={`${passwordError && 'input-err'} input input-lg txt-primary txt-md pd-xs mg-top-s`} />
            {
                passwordError && <Text classes='txt-md txt-err txt-cap mg-left-xs mg-top-xs' text='entered password is not valid.' />
            }

            <div className='flx flx-maj-stretch flx-min-center mg-top-s mg-btm-s'>

                <div className='flx flx-min-center'>

                    <Input type='radio' id='terms-check' />

                    <Label for='terms-check' text='remember me' classes='txt-cap txt-primary txt-md mg-left-xs' />

                </div>

                <Button onClick={forgotPassword} text='forgot your password?' classes='btn-txt txt-primary txt-md txt-cap bg-primary pd-xs mg-left-xs' />

            </div>

            <Button onClick={logInUser} text='log in' classes='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs' />

        </Form>
    )
}

export default LoginForm