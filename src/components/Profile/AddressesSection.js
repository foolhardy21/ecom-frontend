import { Section } from "components/Reusable"
import { useAddress } from "contexts"
import { AddressCard } from "./"
import styles from './profile.module.css'

const AddressSection = ({ checkoutPage = false }) => {
    const { addressState: { addresses } } = useAddress()

    return (
        <Section classes={`grid grid-maxcols-3 ${styles.gridAddresses} mg-top-md mg-btm-md`}>
            {
                addresses?.map(address => <AddressCard key={address._id} address={address} checkoutPage={checkoutPage} />)
            }
        </Section>
    )
}

export default AddressSection