
const Main = (props) => {

    return (
        <main className={`flx flx-center ${props.classes}`}>
            {props.children}
        </main>
    )
}

export default Main