const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | SneakerStore`
    }, [])
}

export default useTitle