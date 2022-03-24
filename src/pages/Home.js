import { HomeHeader, CategorySection } from "../components/Home"
import { Image, Text } from "../components/Reusable"
import { heroImg } from "../assets.data"
import { useTheme } from "../contexts"
import { getBgColor } from "../utils"
import '../components/Home/home.css'

const Home = () => {
    const { theme } = useTheme()

    return (
        <div className={getBgColor(theme)}>
            <HomeHeader />

            <Image srcSet={heroImg.srcSet} sizes={heroImg.sizes} alt={heroImg.alt}
                classes="img-hero img-fit-cover" />

            <Text classes="txt-lg txt-ucase txt-primary flx flx-center mg-top-md mg-btm-md">
                brands
            </Text>

            <CategorySection />
        </div>
    )
}

export default Home