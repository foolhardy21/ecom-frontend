import { WishlistCard } from "./index";
import { useWishlist } from '../../contexts'
import { Section } from "../Reusable";

const WishlistSection = () => {
    const { wishlistState } = useWishlist()

    return (

        <Section id='grid-wishlist' classes='grid grid-maxcols-4'>

            {
                wishlistState.map(item => <WishlistCard key={item.id} item={item} />)
            }


        </Section>

    );
}

export default WishlistSection;
