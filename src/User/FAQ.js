import PageTitle from "../Components/User/PageTitle";
import FAQBar from "../Components/User/FAQBar";

import useFetch from "../Tools/useFetch";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FAQ = () => {
    const [ data, setData ] = useState(null)
    const [ changer, setChanger ] = useState(false)

    // const { data } =  useFetch(process.env.REACT_APP_BACKEND_URL+"/api/faq")
    
    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/faq")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{
                setData(res.data)
            }
        }).catch(err => { swal_error(err) })
    }, [changer])

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