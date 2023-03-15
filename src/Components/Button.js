const Button = (props) => {
    const text = props.text;
    const addedClass = props.addedClass
    const name = props.name
    const handleClick = props.handleClick

    return (
        <div>
            <button className={`h-12 w-full rounded-lg bg-primary-100 text-white text-lg hover:bg-primary-200 ${addedClass}`}
                    name={name}
                    onClick={handleClick}>
                { text }
            </button>
        </div>
    );
}
 
export default Button;