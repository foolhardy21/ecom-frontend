import { HomeHeader, CategorySection } from "components/Home"
import { Icon, Image, Text } from "components/Reusable"
import { heroImg } from "assets.data"
import { useTheme } from "contexts"
import { getBgColor, getIconColor, getTextColor } from "utils"
import styles from 'components/Home/home.module.css'
import useTitle from "hooks/useTitle"

const Home = () => {
    useTitle('Home')
    const { theme } = useTheme()

    return (
        <div className={getBgColor(theme)}>

            <HomeHeader />

            <Image srcSet={heroImg.srcSet} sizes={heroImg.sizes} alt={heroImg.alt}
                classes={`${styles.imgHero} img-fit-cover`} />

            <Text classes="txt-lg txt-ucase txt-primary flx flx-center mg-top-md mg-btm-md">
                brands
            </Text>

            <CategorySection />

            <footer className={`flx flx-column flx-center mg-top-md pd-s ${styles.footer}`}>
                <Text classes={`${getTextColor(theme)} txt-cap txt-600 txt-md`}>connect with us</Text>
                <div className="flx mg-top-xs">
                    <a href='https://twitter.com/foolhardy_vinay' target='_blank' rel='noreferrer' className={`${getTextColor(theme)} mg-right-s`} >
                        twitter
                    </a>
                    <a href='https://github.com/foolhardy21' target='_blank' rel='noreferrer' className={`${getTextColor(theme)} mg-right-s`} >
                        github
                    </a>
                    <a href='https://www.linkedin.com/in/vinay-kumar-279a91167/' target='_blank' rel='noreferrer' className={`${getTextColor(theme)}`} >
                        linkedin
                    </a>
                </div>
            </footer>

        </div>
    )
}

export default Home