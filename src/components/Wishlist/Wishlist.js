
import Text from "../Reusable/Text";
import Main from "../Reusable/Main";
import WishListHeader from "./WishListHeader";
import WishListSection from "./WishListSection";

const Wishlist = () => {

    return (
        <div>

            <WishListHeader />

            <Main classes='flx-column pd-md'>

                <Text classes='txt-lg txt-primary txt-cap mg-btm-md'>
                    your cabinet
                </Text>

                <WishListSection />

            </Main>

        </div>
    )
}

export default Wishlist