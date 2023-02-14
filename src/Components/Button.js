const Button = (props) => {
    const text = props.text;

    return (
        <div>
            <button className="mt-1 h-12 w-full rounded-lg bg-primary-100 text-white text-lg mb-5
                                hover:bg-primary-200">
                { text }
            </button>
        </div>
    );
}
 
export default Button;