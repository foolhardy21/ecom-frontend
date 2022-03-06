import { wishlistImgArr } from "./data/wishlist.img";

const App = () => {
  return (
    <>
      <header id="pg-header" class='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>
        <span class="txt-ucase txt-primary txt-lg">
          sneakerstore
        </span>
        <div id="pg-searchbar" class="flx bg-primary">
          <input id="input-search" type="text" placeholder="Search" class="input input-s bg-primary txt-md pd-xs" />
          <span id="btn-search" class="material-icons icon-primary pd-xs">
            search
          </span>
        </div>
        <nav class='flx flx-min-center'>
          <span class='material-icons icon-primary mg-right-s'>
            favorite
          </span>
          <span class='material-icons icon-primary mg-right-s'>
            shopping_cart
          </span>
          <button class='btn-txt txt-cap txt-primary bg-primary pd-xs txt-md'>
            logout
          </button>
        </nav>
      </header>

      <span id="btn-theme" class="material-icons pos-absolute tr-1 icon-primary pd-s">
        bedtime
      </span>

      <main class='flx flx-column flx-center pd-md'>

        <p class='txt-lg txt-primary txt-cap mg-btm-md'>
          your cabinet
        </p>

        <section class='grid grid-maxcols-4'>
          <article class='card-dim flx flx-column card-shadow-xs pos-relative'>
            <span class='material-icons pos-absolute tr-1 icon-primary'>
              close
            </span>
            <div class='txt-ucase txt-md flx flx-center bg-warn pd-xs pos-absolute tl-0'>
              offer
            </div>
            <main>
              <img srcSet={wishlistImgArr[0].imgSet} alt={wishlistImgArr[0].alt} sizes={`(max-width: 768px) ${wishlistImgArr[0].sizeS}, ${wishlistImgArr[0].sizeM}`} />
              <header class='flx flx-column flx-center'>
                <p class='txt-md txt-ucase txt-primary'>
                  nike
                </p>
                <p class='txt-md txt-cap txt-primary mg-btm-s'>
                  air jordan 5
                </p>
                <p class='txt-md txt-ucase txt-primary'>
                  Rs. 20,000
                  <span class="txt-md txt-ucase txt-success">
                    20% off
                  </span>
                </p>
              </header>
            </main>
            <button class='btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs mg-top-s'>
              move to cart
            </button>
          </article>

          <article class='card-dim flx flx-column card-shadow-xs pos-relative'>
            <span class='material-icons pos-absolute tr-1 icon-primary'>
              close
            </span>
            <main>
              <img srcSet={wishlistImgArr[0].imgSet} alt={wishlistImgArr[0].alt} sizes={`(max-width: 768px) ${wishlistImgArr[0].sizeS}, ${wishlistImgArr[0].sizeM}`} />
              <header class='flx flx-column flx-center'>
                <p class='txt-md txt-ucase txt-primary'>
                  nike
                </p>
                <p class='txt-md txt-cap txt-primary mg-btm-s'>
                  air jordan 5
                </p>
                <p class='txt-md txt-ucase txt-primary'>
                  Rs. 20,000
                </p>
              </header>
            </main>
            <button class='btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs mg-top-s'>
              move to cart
            </button>
          </article>

          <article class='card-dim flx flx-column card-shadow-xs pos-relative'>
            <span class='material-icons pos-absolute tr-1 icon-primary'>
              close
            </span>
            <main>
              <img srcSet={wishlistImgArr[0].imgSet} alt={wishlistImgArr[0].alt} sizes={`(max-width: 768px) ${wishlistImgArr[0].sizeS}, ${wishlistImgArr[0].sizeM}`} />
              <header class='flx flx-column flx-center'>
                <p class='txt-md txt-ucase txt-primary'>
                  nike
                </p>
                <p class='txt-md txt-cap txt-primary mg-btm-s'>
                  air jordan 5
                </p>
                <p class='txt-md txt-ucase txt-primary'>
                  Rs. 20,000
                </p>
              </header>
            </main>
            <button class='btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs mg-top-s'>
              move to cart
            </button>
          </article>

          <article class='card-dim flx flx-column card-shadow-xs pos-relative'>
            <span class='material-icons pos-absolute tr-1 icon-primary'>
              close
            </span>
            <div class='txt-ucase txt-md flx flx-center bg-warn pd-xs pos-absolute tl-0'>
              offer
            </div>
            <main>
              <img srcSet={wishlistImgArr[0].imgSet} alt={wishlistImgArr[0].alt} sizes={`(max-width: 768px) ${wishlistImgArr[0].sizeS}, ${wishlistImgArr[0].sizeM}`} />
              <header class='flx flx-column flx-center'>
                <p class='txt-md txt-ucase txt-primary'>
                  nike
                </p>
                <p class='txt-md txt-cap txt-primary mg-btm-s'>
                  air jordan 5
                </p>
                <p class='txt-md txt-ucase txt-primary'>
                  Rs. 20,000
                  <span class="txt-md txt-ucase txt-success">
                    20% off
                  </span>
                </p>
              </header>
            </main>
            <button class='btn-solid txt-secondary bg-secondary txt-md txt-cap pd-xs mg-top-s'>
              move to cart
            </button>
          </article>

        </section>
      </main>
    </>
  );
}

export default App;
