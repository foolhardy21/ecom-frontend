import { WishlistHeader, WishlistSection } from './index'
import { Main, Text } from '../Reusable/index'

const Wishlist = () => {

    return (
        <div>

            <WishlistHeader />

            <Main classes='flx-column pd-md'>

                <Text classes='txt-lg txt-primary txt-cap mg-btm-md'>
                    your cabinet
                </Text>

                <WishlistSection />

            </Main>

        </div>
    )
}

export default Wishlist