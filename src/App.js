
const App = () => {
  return (
    <>
      <header id="pg-header" class='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>
        <span class="txt-ucase txt-primary txt-lg">
          sneakerstore
        </span>
        <nav class='flx flx-min-center'>
          <span class='material-icons icon-primary mg-right-xs'>
            favorite
          </span>
          <span class='material-icons icon-primary mg-right-s pos-relative'>
            shopping_cart
            <div
              class="pos-absolute tl-60 badge-size-s txt-md pd-xs flx flx-center brd-full txt-secondary bg-secondary">
              2
            </div>
          </span>
          <button class='btn-txt txt-primary bg-primary txt-cap txt-md pd-xs'>
            logout
          </button>
        </nav>
      </header>

      <span id="btn-theme" class="material-icons pos-absolute tr-1 icon-primary pd-s">
        bedtime
      </span>

      <main class='flx flx-column flx-center pd-md'>

        <p class='txt-cap txt-lg txt-primary mg-btm-md flx flx-center'>your cart</p>

        <section class='grid grid-maxcols-2'>

          <section class="grid-itm1 flx flx-column">

            <article class='flx flx-row cart-item card-shadow-xs mg-btm-s'>
              <img srcset='../assets/1-m.jpg 200w,
                    ../assets/1-s.jpg 150w' alt="shoe" sizes="(max-width: 768px) 150px, 200px" />
              <div class="flx-grow-1 pd-xs">
                <div class="flx flx-maj-start mg-btm-s">
                  <p class='txt-md txt-ucase txt-primary mg-right-s'>nike</p>
                  <p class='txt-md txt-cap txt-primary mg-right-s'>
                    air jordan 5</p>
                  <p class='txt-md txt-ucase txt-primary'>UK 9</p>
                </div>
                <p class='txt-md txt-cap txt-primary'>Rs. 16000</p>
                <p class='txt-md txt-cap txt-success'>50%
                  off</p>
                <div class='flx flx-maj-start flx-min-center'>
                  <p class='txt-md txt-cap txt-primary'>
                    quantity: </p>
                  <button
                    class='btn-outlined b-solid b-secondary pd-xs txt-md txt-primary bg-primary'>-</button>
                  <input type='number' class='txt-md input input-s bg-primary' placeholder='1' />
                  <button
                    class='btn-outlined b-solid b-secondary pd-xs txt-md txt-primary bg-primary'>+</button>
                </div>
                <footer class="flx flx-column">
                  <button class='btn-outlined b-solid b-secondary bg-primary txt-primary txt-cap pd-xs'>remove
                    from cart</button>
                  <button class='btn-outlined b-solid b-secondary bg-primary txt-primary txt-cap pd-xs'>move
                    to wishlist</button>
                </footer>
              </div>
            </article>

            <article class='flx flx-row cart-item card-shadow-xs'>
              <img srcSet='./assets/c-m.jpg 200w,
                    ./assets/c-s.jpg 150w' alt="shoe" sizes="(max-width: 768px) 150px, 200px" />
              <div class="flx-grow-1 pd-xs">
                <div class="flx flx-maj-start mg-btm-s">
                  <p class='txt-md txt-ucase txt-primary mg-right-s'>nike</p>
                  <p class='txt-md txt-cap txt-primary mg-right-s'>
                    air jordan 5</p>
                  <p class='txt-md txt-ucase txt-primary'>UK 9</p>
                </div>
                <p class='txt-md txt-cap txt-primary'>Rs. 16000</p>
                <p class='txt-md txt-cap txt-success'>50%
                  off</p>
                <div class='flx flx-maj-start flx-min-center'>
                  <p class='txt-md txt-cap txt-primary'>
                    quantity: </p>
                  <button
                    class='btn-outlined b-solid b-secondary pd-xs txt-md txt-primary bg-primary'>-</button>
                  <input type='number' class='txt-md input input-s bg-primary' placeholder='1' />
                  <button
                    class='btn-outlined b-solid b-secondary pd-xs txt-md txt-primary bg-primary'>+</button>
                </div>
                <footer class="flx flx-column">
                  <button class='btn-outlined b-solid b-secondary bg-primary txt-primary txt-cap pd-xs'>remove
                    from cart</button>
                  <button class='btn-outlined b-solid b-secondary bg-primary txt-primary txt-cap pd-xs'>move
                    to wishlist</button>
                </footer>
              </div>
            </article>

          </section>

          <article class='grid-itm2 card-dim card-shadow-xs pd-md'>
            <main class='flx flx-column'>
              <p class='txt-md txt-ucase txt-primary mg-btm-s'>
                order details
              </p>
              <div class='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>
                <p class="txt-cap txt-primary txt-md">order total</p>
                <p class="txt-cap txt-primary txt-md">Rs33500</p>
              </div>
              <div class='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>
                <p class="txt-cap txt-primary txt-md">order discount</p>
                <p class="txt-cap txt-success txt-md">-Rs. 16750</p>
              </div>
              <div class='txt-primary flx flx-maj-stretch txt-cap txt-md mg-btm-s'>
                <p class="txt-cap txt-primary txt-md">delivery</p>
                <p class="txt-cap txt-primary txt-md">Rs. 600</p>
              </div>
              <div class='txt-primary flx flx-maj-stretch txt-cap'>
                <p class="txt-cap txt-primary txt-md">total amount</p>
                <p class="txt-cap txt-primary txt-md">Rs.17300</p>
              </div>
            </main>
            <footer class='mg-top-md flx flx-column'>
              <button class='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>place
                order</button>
            </footer>
          </article>

        </section>
      </main>
    </>
  );
}

export default App;
