import { WishlistHeader, WishlistSection } from './index'
import { Main, Text } from '../Reusable/index'
import { getBgColor } from '../../utils'
import { useTheme } from '../../contexts'
import './wishlist.css'

const Wishlist = () => {
    const { theme } = useTheme()

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

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