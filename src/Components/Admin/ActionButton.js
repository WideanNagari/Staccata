import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionButton = (props) => {
    const text = props.text;
    const icon = props.icon;
    const addedClass = props.addedClass

    return (
        <button className={`py-1 w-1/2 rounded-lg bg-primary-300 text-white text-lg hover:bg-primary-200 ${addedClass}`}>
            <FontAwesomeIcon icon={icon} size="lg" fixedWidth/>
            <span className="ml-2">{text}</span>
        </button>
    );
}
 
export default ActionButton;