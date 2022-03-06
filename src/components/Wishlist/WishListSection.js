import WishlistCard from "./WishlistCard";

const WishListSection = () => {

    return (

        <section class='grid grid-maxcols-4'>

            <WishlistCard offer={true} offerPrice={17} offerPercent={20} />

            <WishlistCard />

            <WishlistCard />

            <WishlistCard offer={true} offerPrice={17} offerPercent={20} />


        </section>

    );
}

export default WishListSection;
