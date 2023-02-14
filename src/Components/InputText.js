const InputText = (props) => {
    const label = props.label;
    const name = props.name;
    const type = props.type

    return (
        <div>
            <label htmlFor="" className="text-lg">{ label }</label><br/>
            <input type={type} name={name} id=""
                    className="mt-1 h-10 w-full rounded-lg bg-primary-800 outline-0 px-3 mb-5"/>
        </div>
    );
}
 
export default InputText;