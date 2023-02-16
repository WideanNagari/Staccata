const About = () => {
    return (
        <div className="user-about flex-grow px-36 py-10">
            <div className="w-full h-full bg-primary-400 rounded-lg shadow-black shadow-2xl flex">
                <div className="w-3/5 h-full px-10 text-white flex items-center">
                    <div className="w-full">
                        <p className="text-4xl font-bold mb-5">Lorem ipsum dolor sit amet</p>
                        <p className="text-2xl mb-10">Adipisicing elit cum eligendi laborum tenetur maiores culpa? Quo illo 
                            numquam eius quia ex quis nisi corporis hic, minus rerum est, laudantium possimus! 
                            Facere? Beatae corrupti voluptatum recusandae laudantium corporis ut obcaecati ipsa tempore cum dignissimos quaerat aspernatur perspiciatis quae adipisci eos consequuntur possimus, hic eaque.</p>
                        <button className="bg-primary-100 px-5 py-2 text-lg rounded-lg hover:bg-primary-200 duration-100">
                            Start converting music instrument
                        </button>
                    </div>
                </div>
                <div className="w-2/5 h-full bg-primary-100 rounded-l-2xl shadow-black shadow-2xl flex items-center">
                    <img src="/Logo/logo.png" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default About;