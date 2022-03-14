import { Text, Button, Icon, Card, Image } from "../Reusable/index";
import { sizes } from "../../data/wishlist.data";
import { useWishlist } from "../../contexts/wishlist.context";

const WishlistCard = ({ item }) => {
    const { wishlistDispatch } = useWishlist()

    const {
        id,
        name,
        company,
        img: {
            alt,
            srcSet
        },
        price,
        offerPrice,
    } = item


    return (

        <Card classes='flx flx-column pos-relative'>

            <Button onClick={() => wishlistDispatch({ type: 'REMOVE', payload: id })} classes='pos-absolute tr-1 btn-txt'>

                <span className="material-icons icon-primary">
                    close
                </span>

            </Button>

            {
                offerPrice && <div className="pos-absolute tl-0 bg-warn txt-primary txt-md pd-xs txt-ucase">offer</div>
            }

            <Image srcSet={srcSet} alt={alt} sizes={sizes} classes='img-fit-cover' />

            <footer className='flx flx-column mg-top-xs pd-left-s pd-right-s'>

                <Text classes='txt-md txt-ucase txt-primary mg-btm-xs'>
                    {company}
                </Text>

                <Text classes='txt-md txt-cap txt-primary mg-btm-s'>
                    {name}
                </Text>

                <div className="flx">

                    {
                        offerPrice &&
                        <Text classes='txt-md txt-cap txt-primary'>
                            {`rs. ${offerPrice}k`}
                        </Text>
                    }

                    <Text classes={`txt-md txt-cap ${offerPrice ? 'txt-cut txt-off-secondary' : 'txt-primary'}`}>
                        rs. 20k
                    </Text>

                    {
                        offerPrice &&
                        <Text classes='txt-md txt-ucase txt-success mg-left-xs'>
                            {`${Math.round(100 - (offerPrice / price) * 100, 2)}% off`}
                        </Text>
                    }

                </div>

            </footer>

            <Button classes='btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs mg-top-s'>
                move to cart
            </Button>

        </Card>
    )
}

export default WishlistCard