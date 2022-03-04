import { useState } from "react"
import Form from "../Reusable/Form"
import Input from "../Reusable/Input"
import Label from "../Reusable/Label"
import Button from "../Reusable/Button"
import Text from "../Reusable/Text"
import { emailIsInvalid, passIsInvalid } from "../../utils/inputValidation"
import { getTextColor, getBgColor, getSolidBtnBgColor, getSolidBtnTextColor } from '../../utils/theme-util'
import { useTheme } from '../../context/theme-context'

const LoginForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const { theme } = useTheme()


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
                classes={`${emailError && 'input-err'} ${getTextColor(theme)} ${getBgColor(theme)} input input-lg txt-md pd-xs mg-top-s`} />
            {
                emailError && <Text classes='txt-md txt-err txt-cap mg-left-xs mg-top-xs' text='entered email is not valid.' />
            }

            <Input type='password' placeholder='enter password here' value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
                classes={`${passwordError && 'input-err'} ${getTextColor(theme)} ${getBgColor(theme)} input input-lg txt-md pd-xs mg-top-s`} />
            {
                passwordError && <Text classes='txt-md txt-err txt-cap mg-left-xs mg-top-xs' text='entered password is not valid.' />
            }

            <div className='flx flx-maj-stretch flx-min-center mg-top-s mg-btm-s'>

                <div className='flx flx-min-center'>

                    <Input type='radio' id='terms-check' />

                    <Label for='terms-check' text='remember me' classes={`txt-cap ${getTextColor(theme)} txt-md mg-left-xs`} />

                </div>

                <Button onClick={forgotPassword} text='forgot your password?' classes={`btn-txt ${getTextColor(theme)} ${getBgColor(theme)} txt-md txt-cap pd-xs mg-left-xs`} />

            </div>

            <Button onClick={logInUser} text='log in' classes={`btn-solid ${getSolidBtnTextColor(theme)} ${getSolidBtnBgColor(theme)} txt-md txt-ucase pd-xs`} />

        </Form>
    )
}

export default LoginForm