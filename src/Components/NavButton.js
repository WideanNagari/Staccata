import { Link } from "react-router-dom";

const NavButton = (props) => {
    const active = props.active;
    const name = props.name;
    const to = props.to;

    const clickHandler = () => {
        props.clickHandler(name)
    };

    return (
        <div>
            {active===name ? 
                        <Link to={to} onClick={clickHandler}>
                            <div className="bg-primary-200 px-5 py-3 rounded-xl text-white hover:bg-primary-100 duration-200">
                                <p>{name}</p>
                                <div className="bg-primary-900 w-3/4 h-1 rounded-full mx-auto"></div>
                            </div>
                        </Link>
                         :
                        <Link to={to} onClick={clickHandler}>
                            <div className="px-5 py-3 rounded-xl hover:bg-primary-800 duration-200">
                                <div className="bg-primary-900 border-primary-600 border-2 w-3/4 h-1 rounded-full mx-auto"></div>
                                <p>{name}</p>
                            </div>
                        </Link>}
        </div>
    );
}
 
export default NavButton;