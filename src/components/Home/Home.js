import { HomeHeader, CategorySection } from "./"
import { heroImgArr } from "../../data/homeImg.data"
import { Image, Text } from "../Reusable"

const Home = () => {

    return (
        <>
            <HomeHeader />

            <Image srcSet={heroImgArr[2].srcSet} sizes={heroImgArr[2].sizes} alt={heroImgArr[2].alt}
                classes="img-hero img-fit-cover" />

            <Text classes="txt-lg txt-ucase txt-primary flx flx-center mg-top-md mg-btm-md">
                brands
            </Text>

            <CategorySection />
        </>
    )
}

export default Home