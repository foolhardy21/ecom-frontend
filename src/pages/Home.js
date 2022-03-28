import { HomeHeader, CategorySection } from "../components/Home"
import { Image, Text } from "../components/Reusable"
import { heroImgArr } from "../data"
import { useTheme } from "../contexts"
import { getBgColor } from "../utils"
import '../components/Home/home.css'

const Home = () => {
    const { theme } = useTheme()

    return (
        <div className={getBgColor(theme)}>
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