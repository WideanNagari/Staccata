import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const NavButtonAdmin = (props) => {
    const active = props.active;
    const name = props.name;
    const to = props.to;
    const icon = props.icon;
    const clickHandler = () => {
        props.clickHandler(name)
    };

    return (
        <Link to={to} onClick={clickHandler}>
            {active===name ? <div className="text-white pl-5 bg-primary-200 rounded-lg py-3 mb-2
                                            hover:bg-primary-300 duration-200 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={icon} size="lg" fixedWidth/>
                                <p className="text-lg">{name}</p>
                            </div>
                            <div className="w-2 h-8 bg-primary-900 rounded-xl"></div>
                        </div>
                    </div> :
                    <div className="text-white flex gap-4 items-center py-3 mb-2 rounded-lg
                                    hover:bg-primary-200 duration-200 cursor-pointer">
                        <div className="w-2 h-8 border-2 border-primary-900 rounded-xl"></div>
                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon icon={icon} size="lg" fixedWidth/>
                            <p className="text-lg">{name}</p>
                        </div>
                    </div>}
        </Link>
    );
}
 
export default NavButtonAdmin;