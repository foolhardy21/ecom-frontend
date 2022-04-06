import { v4 as uuid } from 'uuid'
import { Button, Form, Input } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import { getSolidBtnBgColor, getSolidBtnTextColor, getTextColor } from "utils"
const AddressForm = () => {
    const { theme } = useTheme()
    const { addressForm, setAddressForm, addressDispatch } = useAddress()

    function handleAddressFormSubmit(e) {
        e.preventDefault()

        addressDispatch({ type: 'ADD_ADDRESS', payload: { ...addressForm, _id: uuid() } })
        setAddressForm({
            name: '',
            building: '',
            street: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
            phoneNumber: ''
        })
    }

    return (
        <Form classes='mg-top-md'>

            <Input type='text' placeholder="your name" value={addressForm.name} onChange={(e) => setAddressForm(a => ({ ...a, name: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='text' placeholder="flat/building name" value={addressForm.building} onChange={(e) => setAddressForm(a => ({ ...a, building: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='text' placeholder="street name" value={addressForm.street} onChange={(e) => setAddressForm(a => ({ ...a, street: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='text' placeholder="city" value={addressForm.city} onChange={(e) => setAddressForm(a => ({ ...a, city: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='text' placeholder="state" value={addressForm.state} onChange={(e) => setAddressForm(a => ({ ...a, state: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='text' placeholder="country" value={addressForm.country} onChange={(e) => setAddressForm(a => ({ ...a, country: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='number' placeholder="pincode" value={addressForm.pincode} onChange={(e) => setAddressForm(a => ({ ...a, pincode: Number(e.target.value) }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Input type='number' placeholder="phone number" value={addressForm.phoneNumber} onChange={(e) => setAddressForm(a => ({ ...a, phoneNumber: Number(e.target.value) }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <Button onClick={handleAddressFormSubmit} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md pd-xs`}>add</Button>

        </Form>
    )
}

export default AddressForm