import { Button, Card, Icon, Text } from "components/Reusable"
import { useAddress, useTheme } from "contexts"
import { getIconColor, getTextColor } from "utils"

const AddressCard = ({ address: { _id, name, building, street, city, state, country, pincode, phoneNumber } }) => {
    const { theme } = useTheme()
    const { addressDispatch } = useAddress()

    function handleAddressDelete(_id) {
        addressDispatch({ type: 'REMOVE_ADDRESS', payload: _id })
    }

    return (
        <Card classes='pos-relative pd-xs'>

            <Button onClick={() => handleAddressDelete(_id)} classes='btn-txt pos-absolute tr-1'>
                <Icon classes={getIconColor(theme)}>
                    delete
                </Icon>
            </Button>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{name}</Text>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{building} {street}</Text>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{city} {state}</Text>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>{country}</Text>

            <Text classes={`${getTextColor(theme)} txt-md mg-btm-xs`}>PIN{' '}{pincode}</Text>

            <Text classes={`${getTextColor(theme)} txt-md`}>Phone{' '}{phoneNumber}</Text>

        </Card>
    )
}

export default AddressCard