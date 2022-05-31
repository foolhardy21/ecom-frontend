import { useEffect } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { WishlistHeader, WishlistSection } from 'components/Wishlist'
import { Main, Text, Alert } from 'components/Reusable'
import { useTheme, useWishlist } from 'contexts'
import { getBgColor } from 'utils'
import { ACTION_INIT_WISHLIST, ALERT_TYPE_ERROR } from 'utils/constants.util'
import useTitle from 'hooks/useTitle'

const Wishlist = () => {
    useTitle('Wishlist')
    const { theme } = useTheme()
    const { wishlistState, getWishlist, wishlistDispatch, showWishlistAlert } = useWishlist()

    useEffect(() => {
        (async () => {
            const getWishlistResponse = await getWishlist()
            if (getWishlistResponse === 404 || getWishlistResponse === 500) {
                showWishlistAlert('could not load the wishlist', ALERT_TYPE_ERROR)
            } else {
                wishlistDispatch({ type: ACTION_INIT_WISHLIST, payload: getWishlistResponse })
            }
        })()
    }, [])

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={`${getBgColor(theme)}`}
        >

            <WishlistHeader />

            <div className='pos-relative mg-xs'>
                {
                    wishlistState.alert.message && <Alert type={wishlistState.alert.type}>{wishlistState.alert.message}</Alert>
                }
            </div>

            <Main classes='flx flx-column flx-center pd-md'>

                <Text classes='txt-lg txt-primary txt-cap mg-btm-md'>
                    your wishlist
                </Text>

                {
                    wishlistState.loading ? <BarLoader width={300} height={4} /> : <WishlistSection />
                }

            </Main>

        </div>
    )
}

export default Wishlist