
const Button = ({ onClick, classes, children }) => {

    return (

        <button onClick={onClick} className={classes}>

            {children}

        </button>
    )
}

export default Button