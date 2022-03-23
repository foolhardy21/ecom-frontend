import { useEffect } from 'react'
import { WishlistHeader, WishlistSection } from '../components/Wishlist'
import { Main, Text, Alert } from '../components/Reusable'
import { useAlert, useTheme, useWishlist } from '../contexts'
import { getBgColor } from '../utils'
import '../components/Wishlist/wishlist.css'

const Wishlist = () => {
    const { theme } = useTheme()
    const { alert, showAlert } = useAlert()
    const { getWishlist, wishlistDispatch } = useWishlist()

    useEffect(() => {
        (async () => {
            const wishlist = await getWishlist()
            if (wishlist === 404 || wishlist === 500) {
                showAlert('you are not logged in', 'error')
            } else if (wishlist) {
                wishlistDispatch({ type: 'INIT_WISHLIST', payload: wishlist })
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
                    your cabinet
                </Text>

                {
                    alert.type === 'error' && <Alert classes='bg-err mg-top-s mg-btm-s'>{alert.message}</Alert>
                }

                <WishlistSection />

            </Main>

        </div>
    )
}

export default Wishlist