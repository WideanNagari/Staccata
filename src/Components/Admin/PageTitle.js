const PageTitle = (props) => {
    const title = props.title
    return (
        <div className="w-full h-28 px-8 flex items-center text-5xl font-bold text-white bg-primary-400
                        rounded-lg mb-3">
            {title}
        </div>
    );
}
 
export default PageTitle;