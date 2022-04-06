import useTitle from "hooks/useTitle"

const NotFound = () => {
    useTitle('Not Found')

    return (
        <h1>page not found</h1>
    )
}

export default NotFound