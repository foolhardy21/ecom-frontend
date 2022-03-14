import { heroImgArr } from "../../data/homeImg.data"

const BrandSection = () => {

    return (
        <section class="grid grid-maxcols-4">
            <article class="card-dim pos-relative">
                <img srcSet={heroImgArr[0].srcSet} sizes={heroImgArr[0].sizes} alt={heroImgArr[0].alt} />
                <p class="pos-absolute tr-1 txt-primary bg-primary txt-md">adidas</p>
            </article>

            <article class="card-dim pos-relative">
                <img srcSet={heroImgArr[1].srcSet} sizes={heroImgArr[1].sizes} alt={heroImgArr[1].alt} />
                <p class="pos-absolute tr-1 txt-primary bg-primary txt-md">air jordan</p>
            </article>

            <article class="card-dim pos-relative">
                <img srcSet={heroImgArr[3].srcSet} sizes={heroImgArr[3].sizes} alt={heroImgArr[3].alt} />
                <p class="pos-absolute tr-1 txt-primary bg-primary txt-md">new balance</p>
            </article>

            <article class="card-dim pos-relative">
                <img srcSet={heroImgArr[4].srcSet} sizes={heroImgArr[4].sizes} alt={heroImgArr[4].alt} />
                <p class="pos-absolute tr-1 txt-primary bg-primary txt-md">puma</p>
            </article>
        </section>
    )
}

export default BrandSection