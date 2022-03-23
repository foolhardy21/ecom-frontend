import { useState } from "react"
import { Form, Input, Label, Button, Text } from "../Reusable"
import { getSolidBtnTextColor, getSolidBtnBgColor, timer, emailIsInvalid, nameIsInvalid, passIsInvalid, passAndConfPassAreDiff } from "../../utils"
import { useTheme } from '../../contexts'

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

    const { theme } = useTheme()

    function validateEnteredInfo() {
        if (emailIsInvalid(enteredEmail)) {
            setEmailError(true)
            timer(() => setEmailError(false), 2000)
        }
        if (nameIsInvalid(enteredFName)) {
            setFNameError(true)
            timer(() => setFNameError(false), 2000)
        }
        if (nameIsInvalid(enteredLName)) {
            setLNameError(true)
            timer(() => setLNameError(false), 2000)
        }
        if (passIsInvalid(enteredPassword)) {
            setPassError(true)
            timer(() => setPassError(false), 2000)
        }
        if (passAndConfPassAreDiff(enteredPassword, enteredConfPassword)) {
            setConfPassError(true)
            timer(() => setConfPassError(false), 2000)
        }
    }

    function signUpUser(e) {

        e.preventDefault()

        validateEnteredInfo()

        // if any of the error states is true dont do anything
        // else register the user


    }

    function togglePassInputType() {

        (passInputType === 'password') ? setPassInputType('text') : setPassInputType('password')

    }


    return (

        <Form classes='flx flx-column mg-left-lg mg-right-lg'>

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
                passError && <Text classes="txt-md txt-err txt-cap mg-left-xs mg-top-xs">password must be alphanumeric {<br />} with special characters</Text>
            }

            <Input type={passInputType} placeholder="confirm password" value={enteredConfPassword} onChange={(e) => setEnteredConfPassword(e.target.value)}
                classes={`${confPassError && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                confPassError && <Text classes="txt-md txt-err txt-cap mg-left-xs mg-top-xs">password is not matching</Text>
            }

            <div className='flx flx-maj-end flx-min-center mg-btm-xs'>

                <Input type='checkbox' id='toggle-pass' />

                <Label for='toggle-pass' onClick={togglePassInputType} classes={`txt-cap mg-left-xs mg-top-xs txt-md`}>
                    show password
                </Label>

            </div>

            <div className='flx flx-maj-start flx-min-center mg-btm-s'>

                <Input type='checkbox' id='terms-check' />

                <Label for='terms-check' classes={`txt-md txt-cap mg-left-xs`}>
                    i accept all terms and conditions
                </Label>

            </div>

            <Button onClick={signUpUser} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-ucase pd-xs`}>
                sign up
            </Button>

        </Form>
    )
}

export default SignupForm
