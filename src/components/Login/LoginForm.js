import { useState } from "react"
import { Form, Text, Button, Input, Label } from "../Reusable"
import { emailIsInvalid, passIsInvalid, getTextColor, getBgColor, getSolidBtnBgColor, getSolidBtnTextColor } from "../../utils"
import { useTheme } from '../../context/theme-context'

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const { theme } = useTheme()

    function validateEnteredInfo() {

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
    }

    function logInUser(e) {

        e.preventDefault()

        validateEnteredInfo()

        // if any error is false
        //redirect to profile page


    }

    function forgotPassword(e) {
        e.preventDefault()
        // redirect to new page for forgot password
    }

    return (
        <Form>

            <Input type='email' placeholder='enter email here' value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)}
                classes={`${emailError && 'input-err'} ${getTextColor(theme)} ${getBgColor(theme)} input input-lg txt-md pd-xs mg-top-s`} />
            {
                emailError &&
                <Text classes='txt-md txt-err txt-cap mg-left-xs mg-top-xs'>
                    entered email is not valid.
                </Text>
            }

            <Input type='password' placeholder='enter password here' value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
                classes={`${passwordError && 'input-err'} ${getTextColor(theme)} ${getBgColor(theme)} input input-lg txt-md pd-xs mg-top-s`} />
            {
                passwordError &&
                <Text classes='txt-md txt-err txt-cap mg-left-xs mg-top-xs' >entered password is not valid.</Text>
            }

            <div className='flx flx-maj-stretch flx-min-center mg-top-s mg-btm-s'>

                <div className='flx flx-min-center'>

                    <Input type='radio' id='terms-check' />

                    <Label for='terms-check' classes='txt-cap txt-md mg-left-xs'>
                        remember me
                    </Label>

                </div>

                <Button onClick={forgotPassword} classes={`btn-txt ${getTextColor(theme)} ${getBgColor(theme)} txt-md txt-cap pd-xs mg-left-xs`}>
                    forgot your password?
                </Button>

            </div>

            <Button onClick={logInUser} classes={`btn-solid ${getSolidBtnTextColor(theme)} ${getSolidBtnBgColor(theme)} txt-md txt-ucase pd-xs`}>
                log in
            </Button>

        </Form>
    )
}

export default LoginForm