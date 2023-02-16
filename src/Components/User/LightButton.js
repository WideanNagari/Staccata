import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LightButton = (props) => {
    const text = props.text;
    const icon = props.icon;
    const addedClass = props.addedClass
    const color = props.color

    return (
        <button className={`py-1 rounded-lg bg-primary-900 text-primary text-lg hover:bg-primary-800 duration-100 ${addedClass}`}>
            <FontAwesomeIcon icon={icon} size="lg" color={color} fixedWidth/>
            <span className="ml-2 text-primary-100">{text}</span>
        </button>
    );
}
 
export default LightButton;