import { v4 as uuid } from 'uuid'
import { Button, Form, Input } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import { getBgColor, getSolidBtnBgColor, getSolidBtnTextColor, getTextColor, isFormEmpty } from "utils"
import { ACTION_ADD_ADDRESS, ACTION_UPDATE_ADDRESS, ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from 'utils/constants.util'

const AddressForm = () => {
    const { theme } = useTheme()
    const { addressForm, setAddressForm, addressDispatch, addressToBeUpdated, setAddressToBeUpdated, showAddressAlert } = useAddress()

    function handleAddressFormSubmit(e) {
        e.preventDefault()

        if (!isFormEmpty(Object.values(addressForm))) {
            if (addressToBeUpdated.length > 0) {
                addressDispatch({ type: ACTION_UPDATE_ADDRESS, payload: { _id: addressToBeUpdated, address: { ...addressForm } } })
                setAddressToBeUpdated('')
                showAddressAlert('address updated', ALERT_TYPE_SUCCESS)
            } else {
                addressDispatch({ type: ACTION_ADD_ADDRESS, payload: { ...addressForm, _id: uuid() } })
                showAddressAlert('address added', ALERT_TYPE_SUCCESS)
            }
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
        } else {
            showAddressAlert('form is empty', ALERT_TYPE_ERROR)
        }
    }

    return (
        <Form classes='mg-top-md'>

            <Input type='text' placeholder="your name" value={addressForm.name} onChange={(e) => setAddressForm(a => ({ ...a, name: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <div className='flx mg-btm-xs'>

                <Input type='text' placeholder="flat/building name" value={addressForm.building} onChange={(e) => setAddressForm(a => ({ ...a, building: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-right-xs`} />

                <Input type='text' placeholder="street name" value={addressForm.street} onChange={(e) => setAddressForm(a => ({ ...a, street: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)}`} />

            </div>

            <div className='flx mg-btm-xs'>

                <Input type='text' placeholder="city" value={addressForm.city} onChange={(e) => setAddressForm(a => ({ ...a, city: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-right-xs`} />

                <Input type='text' placeholder="state" value={addressForm.state} onChange={(e) => setAddressForm(a => ({ ...a, state: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-right-xs`} />

                <Input type='text' placeholder="country" value={addressForm.country} onChange={(e) => setAddressForm(a => ({ ...a, country: e.target.value }))} classes={`input-s txt-md pd-xs ${getTextColor(theme)} mg-right-xs`} />

                <Input type='number' placeholder="pincode" value={addressForm.pincode} onChange={(e) => setAddressForm(a => ({ ...a, pincode: Number(e.target.value) }))} classes={`input ${getBgColor(theme)} ${getTextColor(theme)} input-s txt-md pd-xs ${getTextColor(theme)}`} />

            </div>

            <Input type='number' placeholder="phone number" value={addressForm.phoneNumber} onChange={(e) => setAddressForm(a => ({ ...a, phoneNumber: Number(e.target.value) }))} classes={`input ${getBgColor(theme)} ${getTextColor(theme)} input-s txt-md pd-xs ${getTextColor(theme)} mg-btm-xs`} />

            <div className='flx flx-maj-end'>
                <Button onClick={handleAddressFormSubmit} classes={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTextColor(theme)} txt-md txt-ucase pd-s`}>{
                    addressToBeUpdated.length > 0 ? `edit` : `add`
                }</Button>
            </div>

        </Form>
    )
}

export default AddressForm