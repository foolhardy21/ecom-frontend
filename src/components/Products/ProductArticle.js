
const ProductArticle = () => {

    return (
        <article class="card-dim card-shadow-xs pd-xs pos-relative">
            <div class="pos-absolute tr-1 bg-warn txt-s txt-600 txt-primary txt-ucase pd-xs">offer</div>
            <img srcset='../assets/1-m.jpg 200w,
                    ../assets/1-s.jpg 150w' alt='shoe' sizes="(max-width: 768px) 150px, 200px" />
            <p class="txt-md txt-cap txt-primary mg-btm-xs">air jordan</p>
            <p class="txt-md txt-cap txt-primary">air jordan 5 racer blue</p>
            <p class="txt-md txt-cap txt-success mg-btm-xs"><span
                class="txt-cut txt-off-secondary mg-right-xs">Rs.
                20000</span>18000
            </p>
            <div class='dis-inblock'>
                <span id='star-icon' class='material-icons txt-off-secondary' data-value='1'>
                    star
                </span>
                <span id='star-icon' class='material-icons txt-off-secondary' data-value='2'>
                    star
                </span>
                <span id='star-icon' class='material-icons txt-off-secondary' data-value='3'>
                    star
                </span>
                <span id='star-icon' class='material-icons txt-off-secondary' data-value='4'>
                    star
                </span>
                <span id='star-icon' class='material-icons txt-off-secondary' data-value='5'>
                    star
                </span>
            </div>
        </article>
    )
}

export default ProductArticle