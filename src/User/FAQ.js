import PageTitle from "../Components/User/PageTitle";
import FAQBar from "../Components/User/FAQBar";

import useFetch from "../Tools/useFetch";

const FAQ = () => {
    const { data } =  useFetch("http://localhost:5000/faq")
    
    return (
        <div className="user-faq flex flex-col flex-grow px-36 py-5">
            <PageTitle title="Frequently Asked Question" subtitle="Find the similar problem to solve yours." />
            <div className="flex-grow w-full h-full max-h-[30rem] rounded-lg bg-primary-400 px-6 py-5 text-white overflow-y-scroll scrollbar-hide">
                {data && data.data.map((FAQ) => (
                    <FAQBar question={FAQ.question} 
                            answer={FAQ.answer}
                            key={FAQ.id}/>
                ))}
            </div>
        </div>
    );
}
 
export default FAQ;