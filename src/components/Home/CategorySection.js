import { heroImgArr } from "../../data"
import { Card, Image, Section, Text } from "../Reusable"

const CategorySection = () => {

    return (

        <Section id='grid-category' classes="grid grid-maxcols-4">

            <Card classes="pos-relative">

                <Image srcSet={heroImgArr[0].srcSet} sizes={heroImgArr[0].sizes} alt={heroImgArr[0].alt} />

                <Text classes="pos-absolute tr-1 txt-primary bg-primary txt-md">adidas</Text>

            </Card>

            <Card classes="pos-relative">

                <Image srcSet={heroImgArr[1].srcSet} sizes={heroImgArr[1].sizes} alt={heroImgArr[1].alt} />

                <Text classes="pos-absolute tr-1 txt-primary bg-primary txt-md">air jordan</Text>

            </Card>

            <Card classes="pos-relative">

                <Image srcSet={heroImgArr[3].srcSet} sizes={heroImgArr[3].sizes} alt={heroImgArr[3].alt} />

                <Text classes="pos-absolute tr-1 txt-primary bg-primary txt-md">new balance</Text>

            </Card>

            <Card classes="pos-relative">

                <Image srcSet={heroImgArr[4].srcSet} sizes={heroImgArr[4].sizes} alt={heroImgArr[4].alt} />

                <Text classes="pos-absolute tr-1 txt-primary bg-primary txt-md">puma</Text>

            </Card>

        </Section>

    )
}

export default CategorySection