import { Text, Button, Card, Image } from "../Reusable";
import { useWishlist } from "../../contexts/wishlist.context";

const WishlistCard = ({ item }) => {
    const { wishlistDispatch } = useWishlist()

    const {
        id,
        name,
        company,
        img: {
            alt,
            srcSet,
            sizes
        },
        price,
        offerPrice,
    } = item


    return (

        <Card id='card-wishlist' classes='flx flx-column pos-relative'>

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


                    <Text classes={`txt-md txt-cap ${offerPrice ? 'txt-cut txt-off-secondary' : 'txt-primary'}`}>
                        {`rs. ${price}`}
                    </Text>

                    {
                        offerPrice &&
                        <Text classes='txt-md txt-cap txt-primary'>
                            {`rs. ${offerPrice}`}
                        </Text>
                    }

                </div>
                {
                    offerPrice &&
                    <Text classes='txt-md txt-ucase txt-success'>
                        {`${Math.round(100 - (offerPrice / price) * 100, 2)}% off`}
                    </Text>
                }

            </footer>

            <Button classes='btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs mg-top-s'>
                move to cart
            </Button>

        </Card>
    )
}

export default WishlistCard