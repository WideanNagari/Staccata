const Input = (props) => {
    const name = props.name;
    const id = props.id;
    const text = props.text;
    const type = props.type;

    const value = props.value;
    const handleChange = props.handleChange

    return (
        <div className="w-full">
            <label htmlFor={id} className="text-lg text-white">{text}</label>
            <input type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className="mt-1 h-10 w-full rounded-lg bg-primary-800 outline-0 px-3 mb-3"/>
        </div>
    );
}
 
export default Input;