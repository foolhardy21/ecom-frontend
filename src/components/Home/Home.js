import { HomeHeader, CategorySection } from "./"
import { heroImgArr } from "../../data/homeImg.data"

const Home = () => {

    return (
        <>
            <HomeHeader />

            <img srcSet={heroImgArr[2].srcSet} sizes={heroImgArr[2].sizes} alt={heroImgArr[2].alt}
                className="img-hero img-fit-cover" />

            <p className="txt-lg txt-ucase txt-primary flx flx-center mg-top-md mg-btm-md">
                brands
            </p>

            <CategorySection />
        </>
    )
}

export default Home