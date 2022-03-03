import NavBar from "./NavBar"

const PageHeader = () => {

    return (
        <header id="pg-header" className='flx flx-maj-even flx-min-center pd-top-md pd-btm-md'>

            <span className="txt-ucase txt-primary txt-lg">
                sneakerstore
            </span>

            <NavBar />

            <span id="btn-theme" className="material-icons pos-absolute tr-1 icon-primary pd-s">
                bedtime
            </span>

        </header>
    )
}

export default PageHeader