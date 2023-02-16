const HowToUseBar = (props) => {
    const text = props.text;
    const addedClass = props.addedClass;
    
    return (
        <div className={`w-full ${addedClass}`}>
            <div className="w-4/5 bg-primary-200 rounded-lg text-white text-lg px-5 py-3 flex gap-2 mb-3 shadow-black shadow-lg">
                <div>{text[0]}.</div>
                <div>{text[1]}</div>
            </div>
        </div>
    );
}
 
export default HowToUseBar;