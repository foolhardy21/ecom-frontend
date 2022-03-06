import { Text, Button, Icon, Card, Image } from "../Reusable/index";
import { wishlistImgArr } from "../../data/index";

const WishlistCard = (props) => {

    return (

        <Card classes='flx flx-column pos-relative'>

            <Icon classes='pos-absolute tr-1 icon-primary'>
                close
            </Icon>

            {
                props.offer && <div className="pos-absolute tl-0 bg-warn txt-primary txt-md pd-xs txt-ucase">offer</div>
            }

            <Image srcSet={wishlistImgArr[0].imgSet} alt={wishlistImgArr[0].alt} sizes={`(max-width: 768px) ${wishlistImgArr[0].sizeS}, ${wishlistImgArr[0].sizeM}`} />

            <footer className='flx flx-column pd-left-s pd-right-s'>

                <Text classes='txt-md txt-ucase txt-primary mg-btm-xs'>
                    nike
                </Text>

                <Text classes='txt-md txt-cap txt-primary mg-btm-s'>
                    air jordan 5
                </Text>

                <div className="flx">

                    {
                        props.offer &&
                        <Text classes='txt-md txt-ucase txt-primary'>
                            {`Rs. ${props.offerPrice}k`}
                        </Text>
                    }

                    <Text classes={`txt-md txt-cap ${props.offer ? 'txt-cut txt-off-secondary' : 'txt-primary'}`}>
                        Rs. 20k
                    </Text>

                    {
                        props.offer &&
                        <Text classes='txt-md txt-ucase txt-success mg-left-xs'>
                            {`${props.offerPercent}% off`}
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