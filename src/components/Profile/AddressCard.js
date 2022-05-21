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

            <Text classes={`${getTextColor(theme)} txt-md txt-500 txt-cap`}>name</Text>

            <Text classes={`${getTextColor(theme)} txt-md mg-left-xs mg-btm-s`}>{name}</Text>

            <Text classes={`${getTextColor(theme)} txt-md txt-500 txt-cap`}>address</Text>

            <div className="flx mg-left-xs mg-btm-xs">

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{building},</Text>

                <Text classes={`${getTextColor(theme)} txt-md`}>{street},</Text>

            </div>

            <div className="flx mg-left-xs mg-btm-s">

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{city},</Text>

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{state},</Text>

                <Text classes={`${getTextColor(theme)} txt-md mg-right-xs`}>{country}</Text>

                <Text classes={`${getTextColor(theme)} txt-md`}>{pincode}</Text>

            </div>


            <Text classes={`${getTextColor(theme)} txt-md txt-500 txt-cap`}>phone no.</Text>

            <Text classes={`${getTextColor(theme)} txt-md mg-left-xs mg-btm-md`}>{phoneNumber}</Text>

            <div className="flx flx-maj-end">
                {
                    checkoutPage && <Button onClick={handleAddressSelect} classes={`btn-txt ${getTextColor(theme)} txt-md pd-xs`}>select</Button>
                }
            </div>

            <div className="flx flx-maj-stretch">

                {
                    !checkoutPage &&
                    <Button onClick={handleEditAddress} classes={`btn-txt ${getTextColor(theme)} txt-md pd-xs`}>edit</Button>
                }

                {
                    !checkoutPage &&
                    <Button onClick={handleAddressDelete} classes='btn-txt'>
                        <Icon classes={getIconColor(theme)}>
                            delete
                        </Icon>
                    </Button>
                }
            </div>

        </Card>
    )
}

export default AddressCard