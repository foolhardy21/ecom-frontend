import { WishlistCard } from "./index";
import { useWishlist } from '../../contexts/wishlist.context'

const WishlistSection = () => {
    const { wishlistState } = useWishlist()

    return (

        <section id='grid-wishlist' className='grid grid-maxcols-4'>

            {
                wishlistState.map(item => <WishlistCard key={item.id} item={item} />)
            }


        </section>

    );
}

export default WishlistSection;
