import { Card, Icon, Image, Text } from "../Reusable"

const ProductArticle = ({ prd }) => {
    const {

        name,
        company,
        size,
        price,
        offerPrice,
        img: {
            srcSet,
            alt,
            sizes
        },
        rating,
        quantity
    } = prd

    return (
        <Card classes="pd-xs pos-relative">
            {
                offerPrice &&
                <Text classes="pos-absolute tr-1 bg-warn txt-md txt-600 txt-primary txt-ucase pd-xs">offer</Text>
            }

            <Image srcSet={srcSet} alt={alt} sizes={sizes} />

            <Text classes="txt-md txt-cap txt-primary">{company}</Text>

            <Text classes="txt-md txt-cap txt-primary mg-btm-xs">{name}</Text>

            <div className="flx mg-btm-xs">
                <Text classes='txt-md txt-primary txt-cap mg-right-s'>sizes</Text>
                {
                    size.map(size => <Text key={size} classes='txt-md txt-primary mg-right-xs'>{size}</Text>)
                }
            </div>

            <div className="flx">
                {
                    offerPrice ?
                        <div className="flx flx-column">

                            <div className="flx">

                                <Text
                                    classes="txt-cut txt-md txt-cap txt-off-secondary">rs.
                                    {price}
                                </Text>

                                <Text classes="txt-md txt-cap txt-primary mg-right-xs">
                                    rs. {offerPrice}
                                </Text>

                            </div>

                            <Text classes="txt-md txt-cap txt-success">
                                {Math.round((price - offerPrice) / price * 100)}% off
                            </Text>

                        </div> :

                        <Text classes="txt-md txt-cap txt-primary mg-btm-xs">
                            rs. {price}
                        </Text>
                }

            </div>

            {
                quantity < 15 && <Text classes='txt-cap pos-absolute tl-0 txt-err txt-md'>{`only ${quantity} left.`}</Text>
            }

            <div className='dis-inblock'>

                <Icon id='star-icon' classes={`${rating >= 1 ? 'txt-warn' : 'txt-off-secondary'}`}>
                    star
                </Icon>

                <Icon id='star-icon' classes={`${rating >= 2 ? 'txt-warn' : 'txt-off-secondary'}`}>
                    star
                </Icon>

                <Icon id='star-icon' classes={`${rating >= 3 ? 'txt-warn' : 'txt-off-secondary'}`} >
                    star
                </Icon>

                <Icon id='star-icon' classes={`${rating >= 4 ? 'txt-warn' : 'txt-off-secondary'}`} >
                    star
                </Icon>

                <Icon id='star-icon' classes={`${rating >= 5 ? 'txt-warn' : 'txt-off-secondary'}`} >
                    star
                </Icon>

            </div>

        </Card>
    )
}

export default ProductArticle