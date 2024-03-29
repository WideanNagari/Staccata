import PageTitle from "../Components/User/PageTitle";
import Input from "../Components/User/Input";
import LightButton from "../Components/User/LightButton";
import { useState } from "react";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from 'react-cookie';

import axios from "axios"
import Swal from "sweetalert2"

const Reports = () => {
    const [cookies, setCookie] = useCookies(['user_login']);

    const notLoggedIn = cookies.user_login===undefined ? true : false

    const nama_depan = notLoggedIn || cookies.user_login.first_name===null ? '' : cookies.user_login.first_name
    const nama_belakang = notLoggedIn || cookies.user_login.last_name===null ? '' : cookies.user_login.last_name

    const [firstName, setFirstName] = useState(nama_depan)
    const [lastName, setLastName] = useState(nama_belakang)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = cookies.user_login===undefined ? 1 : cookies.user_login.id 
        const nama = firstName+" "+lastName
        if(firstName!=="" && lastName!=="" && title!=="" && description!==""){
            axios
            .post(process.env.REACT_APP_BACKEND_URL+"/api/reports", {title: title, description: description, reporter: id, reporter_name: nama})
            .then((e) => {
                if (e.status !== 200){
                    swal_error(e)
                }else{
                    // const data = e.data.data
                    // console.log(data)
                    if(id!==1){
                        axios
                        .put(process.env.REACT_APP_BACKEND_URL+"/api/users/advanced/"+id, {first_name: firstName, last_name: lastName})
                        .then((e) => {
                            if (e.status !== 200){
                                swal_error(e)
                            }else{
                                Swal.fire(
                                    'Reported!',
                                    'Your report successfully sent.',
                                    'success'
                                )
                                .then(() => {
                                    // const data = e.data.data
                                    // console.log(data)
                                    setFirstName("")
                                    setLastName("")
                                    setTitle("")
                                    setDescription("")
                                })
                            }
                        })
                        .catch(err => {
                            swal_error(err)
                        })
                    }else{
                        Swal.fire(
                            'Reported!',
                            'Your report successfully sent.',
                            'success'
                        ).then(() => {
                            setFirstName("")
                            setLastName("")
                            setTitle("")
                            setDescription("")
                        })
                    }
                }
            })
            .catch(err => {
                swal_error(err)
            })
        }else{
            Swal.fire({
                title: "All field must be filled!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
    }
    
    return (
        <div className="user-reports flex flex-col flex-grow px-36 py-5">
            <PageTitle title="User Reports" subtitle="write your criticism and suggestion here." />

            <form className="flex-grow w-full rounded-lg bg-primary-400 px-6 py-5 flex items-center"
                    onSubmit={handleSubmit}>
                <div className="w-full">
                    <div className="flex gap-3 w-full">
                        <Input name="first-name" id="fName-field" text="First Name" type="text"
                                value={firstName} 
                                handleChange={setFirstName}/>
                        <Input name="last-name" id="lName-field" text="Last Name" type="text"
                                value={lastName} 
                                handleChange={setLastName}/>
                    </div>

                    <Input name="title" id="title-field" text="Title" type="text"
                                value={title}
                                handleChange={setTitle}/>

                    <div className="w-full">
                        <label htmlFor="description-field" className="text-lg text-white">Description</label>
                        <textarea name="description" id="description-field"
                                className="mt-1 h-32 w-full rounded-lg bg-primary-800 outline-0 px-3 py-2 mb-3"
                                value={description}
                                onInput={(e) => setDescription(e.target.value)}
                                />
                    </div>

                    <div className="flex justify-end">
                        <LightButton text="Submit" 
                                    icon={faPaperPlane} 
                                    addedClass="w-auto px-5"/>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Reports;