import { useState } from "react"
import axios from "axios"
import { Form, Input, Label, Button, Text } from "../Reusable"
import { getSolidBtnTextColor, getSolidBtnBgColor, timer, emailIsInvalid, nameIsInvalid, passIsInvalid, passAndConfPassAreDiff } from "../../utils"
import { useTheme } from '../../contexts'

const SignupForm = () => {
    const { theme } = useTheme()
    const [enteredInfo, setEnteredInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmedPassword: ''
    })
    const [inputError, setInputError] = useState({
        email: false,
        firstName: false,
        lastName: false,
        password: false,
        confirmedPassword: false,
    })
    const [passInputType, setPassInputType] = useState('password')

    function updateEmail(e) {
        setEnteredInfo((info) => ({ ...info, email: e.target.value }))
    }
    function updateFirstName(e) {
        setEnteredInfo((info) => ({ ...info, firstName: e.target.value }))
    }
    function updateLastName(e) {
        setEnteredInfo((info) => ({ ...info, lastName: e.target.value }))
    }
    function updatePassword(e) {
        setEnteredInfo((info) => ({ ...info, password: e.target.value }))
    }
    function updateConfirmedPassword(e) {
        setEnteredInfo((info) => ({ ...info, confirmedPassword: e.target.value }))
    }

    function validateEnteredInfo() {
        let validationError = false

        if (emailIsInvalid(enteredInfo.email)) {
            validationError = true
            setInputError((e) => ({ ...e, email: true }))
            setTimeout(() => setInputError((e) => ({ ...e, email: false })), 3000)
        }
        if (nameIsInvalid(enteredInfo.firstName)) {
            validationError = true
            setInputError((e) => ({ ...e, firstName: true }))
            setTimeout(() => setInputError((e) => ({ ...e, firstName: false })), 3000)
        }
        if (nameIsInvalid(enteredInfo.lastName)) {
            validationError = true
            setInputError((e) => ({ ...e, lastName: true }))
            setTimeout(() => setInputError((e) => ({ ...e, lastName: false })), 3000)
        }
        if (passIsInvalid(enteredInfo.password)) {
            validationError = true
            setInputError((e) => ({ ...e, password: true }))
            setTimeout(() => setInputError((e) => ({ ...e, password: false })), 3000)
        }
        if (passAndConfPassAreDiff(enteredInfo.password, enteredInfo.confirmedPassword)) {
            validationError = true
            setInputError((e) => ({ ...e, confirmedPassword: true }))
            setTimeout(() => setInputError((e) => ({ ...e, confirmedPassword: false })), 3000)
        }
        return validationError
    }

    async function signUpUser() {
        const response = await axios.post('/api/auth/signup', {
            email: enteredInfo.email,
            password: enteredInfo.password,
            firstName: enteredInfo.firstName,
            lastName: enteredInfo.lastName,
        })
        console.log(response.data)
    }
    function handleSignupSubmit(e) {
        e.preventDefault()

        if (!validateEnteredInfo()) {
            signUpUser()
        }

    }

    function togglePassInputType() {
        passInputType === 'password' ? setPassInputType('text') : setPassInputType('password')
    }


    return (

        <Form classes='flx flx-column mg-left-lg mg-right-lg'>

            <Input type='email' placeholder="email" value={enteredInfo.email} onChange={(e) => updateEmail(e)} classes={`${inputError.email && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                inputError.email && <Text classes="txt-md txt-cap txt-err mg-top-xs mg-left-xs">email is invalid</Text>
            }

            <Input type='text' placeholder="first name" value={enteredInfo.firstName} onChange={(e) => updateFirstName(e)}
                classes={`${inputError.firstName && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                inputError.firstName && <Text classes="txt-md txt-err txt-cap mg-top-xs mg-left-xs">first name is invalid</Text>
            }

            <Input type='text' placeholder="last name" value={enteredInfo.lastName} onChange={(e) => updateLastName(e)}
                classes={`${inputError.lastName && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                inputError.lastName && <span className="txt-md txt-err txt-cap mg-left-xs mg-top-xs">last name is invalid</span>
            }

            <Input type={passInputType} placeholder="password" value={enteredInfo.password} onChange={(e) => updatePassword(e)}
                classes={`${inputError.password && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                inputError.password && <Text classes="txt-md txt-err txt-cap mg-left-xs mg-top-xs">password must be alphanumeric {<br />} with special characters</Text>
            }

            <Input type={passInputType} placeholder="confirm password" value={enteredInfo.confirmedPassword} onChange={(e) => updateConfirmedPassword(e)}
                classes={`${inputError.confirmedPassword && 'input-err'} input input-lg txt-md pd-xs mg-top-s`} />
            {
                inputError.confirmedPassword && <Text classes="txt-md txt-err txt-cap mg-left-xs mg-top-xs">password is not matching</Text>
            }

            <div className='flx flx-maj-end flx-min-center mg-top-xs mg-btm-md'>

                <Input type='checkbox' id='toggle-pass' />

                <Label for='toggle-pass' onClick={togglePassInputType} classes='txt-cap mg-left-xs txt-md'>
                    show password
                </Label>

            </div>

            <Button onClick={handleSignupSubmit} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-ucase pd-xs`}>
                sign up
            </Button>

        </Form>
    )
}

export default SignupForm
