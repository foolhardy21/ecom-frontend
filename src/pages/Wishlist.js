import { useEffect } from 'react'
import { WishlistHeader, WishlistSection } from '../components/Wishlist/index'
import { Main, Text } from '../components/Reusable/index'
import { getBgColor } from '../utils'
import { useTheme, useWishlist } from '../contexts'
import '../components/Wishlist/wishlist.css'
import axios from 'axios'

const Wishlist = () => {
    const { theme } = useTheme()
    const { wishlistDispatch } = useWishlist()

    useEffect(() => {
        async function getWishlist() {
            const userToken = window.localStorage.getItem('userToken')
            try {
                const response = await axios.get('/api/user/wishlist', {
                    headers: {
                        authorization: userToken
                    }
                })
                return response.data.wishlist
            } catch (e) {
                console.log(e)
            }
        }
        (async () => {
            const wishlist = await getWishlist()
            wishlist && wishlistDispatch({ type: 'INIT_WISHLIST', payload: wishlist })
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

                <WishlistSection />

            </Main>

        </div>
    )
}

export default Wishlist