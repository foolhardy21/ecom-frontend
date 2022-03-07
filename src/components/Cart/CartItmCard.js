import { Button, Card, Image, Input, Text } from "../Reusable"

const CartItmCard = ({ item, sizes }) => {
    const {
        name,
        company,
        img: {
            srcSet,
            alt
        },
        size,
        price,
        offerPrice
    } = item

    return (

        <Card classes='flx flx-row mg-btm-s'>

            <Image srcSet={srcSet} alt={alt} sizes={sizes} />

            <div className="flx-grow-1 pd-s">

                <div className="flx flx-maj-start mg-btm-s">

                    <Text classes='txt-md txt-ucase txt-primary mg-right-s'>{company}</Text>

                    <Text classes='txt-md txt-cap txt-primary mg-right-s'>{name}</Text>

                    <Text classes='txt-md txt-ucase txt-primary'>{`UK ${size}`}</Text>

                </div>

                <div className="flx">

                    {
                        offerPrice && <Text classes='txt-md txt-cap txt-off-secondary txt-cut'>{`rs. ${offerPrice}`}</Text>
                    }

                    <Text classes='txt-md txt-cap txt-primary'>{`rs. ${price}`}</Text>

                </div>

                {
                    offerPrice && <Text classes='txt-md txt-cap txt-success'>{`${Math.round(100 - offerPrice / price * 100)}% off`}</Text>
                }


                <div className='flx flx-min-center mg-top-xs'>

                    <Text classes='txt-md txt-cap txt-primary mg-right-xs'>quantity:</Text>

                    <Button classes='btn-outlined b-solid b-primary txt-md txt-primary bg-primary pd-left-xs pd-right-xs'>-</Button>

                    <Input type='number' classes='txt-md input-s bg-primary' placeholder='1' />

                    <Button classes='btn-outlined b-solid b-primary txt-md txt-primary bg-primary pd-left-xs pd-right-xs'>+</Button>

                </div>

                <footer className="flx flx-column mg-top-md">

                    <Button classes='btn-txt bg-primary txt-primary txt-cap txt-md pd-xs'>remove from cart</Button>

                    <Button classes='btn-txt bg-primary txt-primary txt-cap txt-md pd-xs'>move to wishlist</Button>

                </footer>

            </div>

        </Card>
    )
}

export default CartItmCard