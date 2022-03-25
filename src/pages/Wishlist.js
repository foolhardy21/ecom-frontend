import { useEffect } from 'react'
import { WishlistHeader, WishlistSection } from '../components/Wishlist'
import { Main, Text, Alert } from '../components/Reusable'
import { useTheme, useWishlist } from '../contexts'
import { getBgColor, getTextColor } from '../utils'
import '../components/Wishlist/wishlist.css'

const Wishlist = () => {
    const { theme } = useTheme()
    const { wishlistState, getWishlist, wishlistDispatch, showWishlistAlert } = useWishlist()

    useEffect(() => {
        (async () => {
            const getWishlistResponse = await getWishlist()
            if (getWishlistResponse === 404 || getWishlistResponse === 500) {
                showWishlistAlert('could not load the wishlist', 'error')
            } else {
                wishlistDispatch({ type: 'INIT_WISHLIST', payload: getWishlistResponse })
            }
        })()
    }, [wishlistDispatch])

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <WishlistHeader />

            <Main classes='flx flx-column flx-center pd-md'>

                <Text classes='txt-lg txt-primary txt-cap mg-btm-md'>
                    your wishlist
                </Text>

                {
                    wishlistState.alert.type === 'error' && <Alert classes='bg-err mg-top-s mg-btm-s'>{wishlistState.alert.message}</Alert>
                }

                {
                    wishlistState.loading ? <Text classes={`${getTextColor(theme)} txt-xlg txt-600 txt-cap`}>loading...</Text> : <WishlistSection />
                }

            </Main>

        </div>
    )
}

export default Wishlist