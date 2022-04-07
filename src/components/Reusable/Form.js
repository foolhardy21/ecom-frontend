const Form = ({ children, classes }) => {

    return (
        <form className={`flx flx-column mg-left-lg mg-right-lg ${classes}`}>
            {children}
        </form>
    )
}

export default Form
