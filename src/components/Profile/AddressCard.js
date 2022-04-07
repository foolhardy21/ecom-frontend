import { Button, Card, Icon, Text } from "components/Reusable"
import { useAddress, useCheckout, useTheme } from "contexts"
import { getBorderColor, getIconColor, getTextColor } from "utils"
import { ACTION_REMOVE_ADDRESS } from "utils/constants.util"

const AddressCard = ({ address: { _id, name, building, street, city, state, country, pincode, phoneNumber }, checkoutPage = false }) => {
    const { theme } = useTheme()
    const { setAddressForm, addressDispatch, setAddressToBeUpdated } = useAddress()
    const { setSelectedAddress } = useCheckout()

    function handleAddressDelete() {
        addressDispatch({ type: ACTION_REMOVE_ADDRESS, payload: _id })
    }

    function handleEditAddress() {
        setAddressForm({
            name,
            building,
            street,
            city,
            state,
            country,
            pincode,
            phoneNumber
        })
        setAddressToBeUpdated(_id)
    }

    function handleAddressSelect() {
        setSelectedAddress({ _id, name, building, street, city, state, country, pincode, phoneNumber })
    }

    return (
        <Card classes='pos-relative pd-xs'>

            {
                !checkoutPage &&
                <Button onClick={handleAddressDelete} classes='btn-txt pos-absolute tr-1'>
                    <Icon classes={getIconColor(theme)}>
                        delete
                    </Icon>
                </Button>
            }

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{name}</Text>

            <div className="flx mg-btm-xs">

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{building}</Text>

                <Text classes={`${getTextColor(theme)} txt-md`}>{street}</Text>

            </div>

            <div className="flx mg-btm-xs">

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{city}</Text>

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{state}</Text>

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{country}</Text>

                <Text classes={`${getTextColor(theme)} txt-md`}>{pincode}</Text>

            </div>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{phoneNumber}</Text>

            {
                !checkoutPage &&
                <Button onClick={handleEditAddress} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${getTextColor(theme)} txt-md pd-xs`}>edit</Button>
            }

            {
                checkoutPage && <Button onClick={handleAddressSelect} classes={`btn-outlined b-solid ${getBorderColor(theme)} ${getTextColor(theme)} txt-md pd-xs`}>select</Button>
            }

        </Card>
    )
}

export default AddressCard