import { WishlistCard } from "./";
import { useWishlist } from 'contexts'
import { Section } from "components/Reusable";
import styles from './wishlist.module.css'

const WishlistSection = () => {
    const { wishlistState: { wishlist } } = useWishlist()

    return (

        <Section classes={`grid grid-maxcols-4 ${styles.gridWishlist}`}>

            {
                wishlist?.map(item => <WishlistCard key={item._id} item={item} />)
            }

        </Section>

    );
}

export default WishlistSection;
