const Section = () => {
    return (

        <section class='card-shadow-xs flx flx-column flx-center pd-lg mg-top-lg'>
            <p class='txt-cap txt-lg txt-primary'>
                login
            </p>
            <form class='auth-form flx flx-column txt-primary mg-left-xlg mg-right-xlg'>
                <input type='email' id='email-input' placeholder="enter email here"
                    class="input input-lg txt-md pd-xs mg-top-s" />
                <input type='password' id='pass-input' placeholder="enter password here"
                    class="input input-lg txt-md pd-xs mg-top-s" />
                <div class='flx flx-maj-stretch flx-min-center mg-top-s mg-btm-s'>
                    <div class='flx-min-center'>
                        <input type='radio' id='terms-check' />
                        <label for='terms-check' class='txt-cap txt-md mg-left-xs'>remember me</label>
                    </div>
                    <button type="button" class='btn-txt txt-primary txt-md txt-cap pd-xs mg-left-xs bg-primary'>
                        forgot your password?
                    </button>
                </div>
                <button type="submit" class='btn-solid txt-secondary bg-secondary txt-md txt-ucase pd-xs'>
                    log in
                </button>
            </form>
            <button
                class='btn-outlined txt-primary txt-md txt-cap bg-primary b-solid b-secondary flx flx-center pd-xs mg-top-xs'>
                create new account
                <span class='material-icons'>
                    chevron_right
                </span>
            </button>
        </section>

    )
}

export default Section