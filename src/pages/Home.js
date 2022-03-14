import { HomeHeader, CategorySection } from "../components/Home"
import { heroImgArr } from "../data"
import { Image, Text } from "../components/Reusable"
import '../components/Home/home.css'

const Home = () => {

    return (
        <div>
            <HomeHeader />

            <Image srcSet={heroImgArr[2].srcSet} sizes={heroImgArr[2].sizes} alt={heroImgArr[2].alt}
                classes="img-hero img-fit-cover" />

            <Text classes="txt-lg txt-ucase txt-primary flx flx-center mg-top-md mg-btm-md">
                brands
            </Text>

            <CategorySection />
        </div>
    )
}

export default Home