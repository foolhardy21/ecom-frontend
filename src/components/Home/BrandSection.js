import { heroImgArr } from "../../data/homeImg.data"
import { Image, Text } from "../Reusable"

const BrandSection = () => {

    return (

        <section className="grid grid-maxcols-4">

            {
                heroImgArr.map((brand, index) => index !== 2 && <article key={brand.id} className="card-dim pos-relative">

                    <Image srcSet={brand.srcSet} sizes={brand.sizes} alt={brand.alt} />

                    <Text classes="pos-absolute tr-1 txt-primary bg-primary txt-md">adidas</Text>

                </article>)
            }

        </section>
    )
}

export default BrandSection