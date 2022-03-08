import { Card, Icon, Image, Text } from "../Reusable"

const ProductArticle = () => {

    return (
        <Card classes="pd-xs pos-relative">

            <Text classes="pos-absolute tr-1 bg-warn txt-s txt-600 txt-primary txt-ucase pd-xs">offer</Text>

            <Image srcSet='../assets/p1-m.jpg 200w,
                    ../assets/p1-s.jpg 150w' alt='shoe' sizes="(max-width: 768px) 150px, 200px" />

            <Text classes="txt-md txt-cap txt-primary mg-btm-xs">air jordan</Text>

            <Text classes="txt-md txt-cap txt-primary">air jordan 5 racer blue</Text>

            <Text classes="txt-md txt-cap txt-success mg-btm-xs">

                <Text
                    classes="txt-cut txt-off-secondary mg-right-xs">Rs.
                    20000
                </Text>

                18000

            </Text>

            <div className='dis-inblock'>

                <Icon id='star-icon' classes='txt-off-secondary' data-value='1'>
                    star
                </Icon>

                <Icon id='star-icon' classes='txt-off-secondary' data-value='2'>
                    star
                </Icon>

                <Icon id='star-icon' classes='txt-off-secondary' data-value='3'>
                    star
                </Icon>

                <Icon id='star-icon' classes='txt-off-secondary' data-value='4'>
                    star
                </Icon>

                <Icon id='star-icon' classes='txt-off-secondary' data-value='5'>
                    star
                </Icon>

            </div>

        </Card>
    )
}

export default ProductArticle