import PageTitle from "../Components/User/PageTitle";
import Input from "../Components/User/Input";
import LightButton from "../Components/User/LightButton";
import { useState } from "react";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

const Reports = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(firstName!=="" && lastName!=="" && title!=="" && description!==""){
            axios
            .post("http://localhost:5000/reports", {title: title, description: description, reporter:"1"})
            .then((e) => {
                if (e.status !== 200){
                    throw Error("could not post the data")
                }else{
                    const data = e.data.data
                    console.log(data)
                    axios
                    .put("http://localhost:5000/users/advanced/1", {first_name: firstName, last_name: lastName})
                    .then((e) => {
                        if (e.status !== 200){
                            throw Error("could not post the data")
                        }else{
                            const data = e.data.data
                            console.log(data)
                            setFirstName("")
                            setLastName("")
                            setTitle("")
                            setDescription("")
                        }
                    })
                    .catch(err => {
                        if (err.name === 'AxiosError'){
                            console.log('post aborted')
                        }
                    })
                }
            })
            .catch(err => {
                if (err.name === 'AxiosError'){
                    console.log('post aborted')
                }
            })
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