import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavButtonAdmin = (props) => {
    const active = props.active;
    const name = props.name;
    const to = props.to;
    const icon = props.icon;

    return (
        <div>
            {active===name ? <div className="text-white pl-5 bg-primary-200 rounded-lg py-3 mb-2 hover:bg-primary-300 duration-200">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={icon} size="lg" fixedWidth/>
                                <p className="text-lg">{name}</p>
                            </div>
                            <div className="w-2 h-8 bg-primary-900 rounded-xl"></div>
                        </div>
                    </div> :
                    <div className="text-white flex gap-4 items-center py-3 mb-2 rounded-lg hover:bg-primary-200 duration-200">
                        <div className="w-2 h-8 border-2 border-primary-900 rounded-xl"></div>
                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon icon={icon} size="lg" fixedWidth/>
                            <p className="text-lg">{name}</p>
                        </div>
                    </div>}
        </div>
    );
}
 
export default NavButtonAdmin;