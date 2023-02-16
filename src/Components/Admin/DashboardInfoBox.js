import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardInfoBox = (props) => {
    const text = props.text;
    const subtext = props.subtext;
    const icon = props.icon;

    return (
        <div className="w-full h-28 bg-primary-400 rounded-lg p-6 text-white flex 
                        items-center justify-between">
            <div>
                <p className="font-bold text-5xl mb-1">{text}</p>
                <p className="text-xl">{subtext}</p>
            </div>
            <FontAwesomeIcon icon={icon} size="3x" />
        </div>
    );
}
 
export default DashboardInfoBox;