import { WishlistCard } from "./";
import { useTheme, useWishlist } from 'contexts'
import { Section, Text } from "components/Reusable";
import styles from './wishlist.module.css'
import { getTextColor } from "utils";

const WishlistSection = () => {
    const { theme } = useTheme()
    const { wishlistState: { wishlist } } = useWishlist()

    return (

        <Section classes={`grid grid-maxcols-4 ${styles.gridWishlist}`}>

            {
                wishlist.length > 0 ? wishlist?.map(item => <WishlistCard key={item._id} item={item} />) : <Text classes={`${getTextColor(theme)} txt-lg txt-cap`}>no products available</Text>
            }

        </Section>

    );
}

export default WishlistSection;
