const Button = (props) => {
    const text = props.text;
    const addedClass = props.addedClass

    return (
        <div>
            <button className={`h-12 w-full rounded-lg bg-primary-100 text-white text-lg hover:bg-primary-200 ${addedClass}`}>
                { text }
            </button>
        </div>
    );
}
 
export default Button;