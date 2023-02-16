const PageTitle = (props) => {
    const title = props.title
    const subtitle = props.subtitle

    return (
        <div className="w-full h-32 px-8 flex items-center bg-primary-400 rounded-lg mb-3">
            <div>
                <p className="text-5xl text-white font-bold mb-1">{title}</p>
                <p className="text-lg italic text-gray-400">{subtitle}</p>
            </div>
        </div>
    );
}
 
export default PageTitle;