const NavButton = (props) => {
    const active = props.active;
    const name = props.name;
    const to = props.to;

    return (
        <div>
            {active===name ? <div className="bg-primary-200 px-5 py-3 rounded-xl text-white hover:bg-primary-100 duration-200">
                            <a href={`/${to}`}>{name}</a>
                            <div className="bg-primary-900 w-3/4 h-1 rounded-full mx-auto"></div>
                        </div> :
                        <div className="px-5 py-3 rounded-xl hover:bg-primary-800 duration-200">
                            <div className="bg-primary-900 border-primary-600 border-2 w-3/4 h-1 rounded-full mx-auto"></div>
                            <a href={`/${to}`}>{name}</a>
                        </div>}
        </div>
    );
}
 
export default NavButton;