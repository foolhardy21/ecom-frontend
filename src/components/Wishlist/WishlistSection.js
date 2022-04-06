import { WishlistCard } from "./index";
import { useWishlist } from '../../contexts'
import { Section } from "../Reusable";
import styles from './wishlist.module.css'

const WishlistSection = () => {
    const { wishlistState } = useWishlist()

    return (

        <Section classes={`grid grid-maxcols-4 ${styles.gridWishlist}`}>

            {
                wishlistState.wishlist.map(item => <WishlistCard key={item._id} item={item} />)
            }

        </Section>

    );
}

export default WishlistSection;
