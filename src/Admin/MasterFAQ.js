import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faTrashAlt, faAdd, faSave, faRefresh } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";
import useFetch from "../Tools/useFetch";
import axios from "axios";

import Swal from "sweetalert2";

const MasterFAQ = () => {
    // const { data } =  useFetch("http://localhost:5000/faq")
    
    const [ dataFAQ, setDataFAQ ] = useState(null)
    const [ dataView, setDataView ] = useState(null)
    const [ question, setQuestion ] = useState("")
    const [ answer, setAnswer ] = useState("")
    const [ id, setId ] = useState(0)
    const [ changer, setChanger ] = useState(false)

    const inputChange = (key) => {
        const newFAQ = dataFAQ.filter(faq => 
                                        faq.question.toLowerCase().search(key.toLowerCase()) !== -1 ||
                                        faq.answer.toLowerCase().search(key.toLowerCase()) !== -1
                                    )
        setDataView(newFAQ)
    }

    const openDetails = (data) => {
        setAnswer(data.answer)
        setQuestion(data.question)
        setId(data.id)
    }

    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }

    const create = (e) => {
        e.preventDefault();
        if(question!=="" && answer!==""){
            
            Swal.fire({
                title: 'Are you sure you want to create a new FAQ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .post("http://localhost:5000/faq", {question: question, answer: answer})
                    .then((e) => {
                        if (e.status !== 200){
                            swal_error(e)
                        }else{
                            Swal.fire({
                                title: 'Created!',
                                text: 'A new FAQ has been created.',
                                icon: 'success',
                                confirmButtonText: 'Close',
                            })
                            .then(() => {
                                setChanger(!changer)
                                setId(0)
                                setQuestion("")
                                setAnswer("")
                            })
                        }
                    })
                    .catch(err => {
                        swal_error(err)
                    })
                }
            });            
        }else{
            Swal.fire({
                title: "Question and Answer must be filled!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
    }

    const update = (e) => {
        e.preventDefault();
        if(question!=="" && answer!==""){
            Swal.fire({
                title: 'Are you sure you want to update this FAQ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .put("http://localhost:5000/faq/"+id, {question: question, answer: answer})
                    .then((e) => {
                        if (e.status !== 200){
                            swal_error(e)
                        }else{
                            Swal.fire({
                                title: 'Updated!',
                                text: 'The FAQ has been updated.',
                                icon: 'success',
                                confirmButtonText: 'Close',
                            })
                            .then(() => {
                                setChanger(!changer)
                                setId(0)
                                setQuestion("")
                                setAnswer("")
                            })
                        }
                    })
                    .catch(err => {
                        swal_error(err)
                    })
                }
            });
        }else{
            Swal.fire({
                title: "Question and Answer must be filled!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
    }

    const deletes = (id, state) => {
        let states = ["",""]
        if(id!==0){
            if(state===1){
                states[0] = "delete";
                states[1] = "Deleted";
            }
            else{
                states[0] = "restore";
                states[1] = "Restored";
            }

            Swal.fire({
                title: 'Are you sure you want to '+states[0]+' this FAQ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .delete("http://localhost:5000/faq/"+id)
                    .then((e) => {
                        if (e.status !== 200){
                            swal_error(e)
                        }else{
                            Swal.fire({
                                title: states[1]+'!',
                                text: 'The FAQ has been '+states[1].toLowerCase()+'.',
                                icon: 'success',
                                confirmButtonText: 'Close',
                            })
                            .then(() => {
                                // const deleted_data = e.data.data
                                // console.log(deleted_data)
                                // To Do
                                // auto reload data of the table
                                setChanger(!changer)
                            })
                        }
                    })
                    .catch(err => {
                        swal_error(err)
                    })
                }
            });
        }
    }

    useEffect(() => {
        axios
        .get("http://localhost:5000/faq")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{
                setDataFAQ(res.data.data)
                setDataView(res.data.data)
            }
        }).catch(err => { swal_error(err) })
    }, [changer])

    return (
        <div className="admin-master-report w-4/5 p-6 w-full h-full overflow-y-scroll scrollbar-hide">
            <PageTitle title="Frequently Asked Question" />
            
            <div className="w-full bg-primary-400 rounded-lg px-5 py-4 mb-3">
                <label htmlFor="question-field" className="text-lg text-white">Question</label><br/>
                <input type="text" name="question" id="question-field"
                        className="mt-1 h-10 w-full rounded-lg bg-primary-800 outline-0 px-3 mb-3"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}/> <br/>

                <label htmlFor="answer-field" className="text-lg text-white">Answer</label><br/>
                <textarea name="answer" id="answer-field" 
                        className="mt-1 h-32 w-full rounded-lg bg-primary-800 outline-0 px-3 py-1 mb-3"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}/> <br/>

                <div className="flex gap-2 justify-end">
                    <ActionButton text="Create" icon={faAdd} addedClass="w-auto px-5" disable={id===0?false:true} handleClick={create} />
                    <ActionButton text="Save All Changes" icon={faSave} addedClass="w-auto px-5" disable={id===0?true:false} handleClick={update} />
                </div>
            </div>

            <div className="w-full bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Question" handleChange={(e) => inputChange(e.target.value)}/>

                <div className="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table className="table-fixed w-full font-semibold">
                        <thead className="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th className="w-1/12 py-3">ID</th>
                                <th className="w-4/12">Question</th>
                                <th className="w-4/12">Answer</th>
                                <th className="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {dataView!=null ? <tbody>
                            {dataView.map((FAQ) => (
                                <tr className="text-center odd:bg-primary-700 even:bg-primary-800" key={FAQ.id}>
                                    <td>{FAQ.id}</td>
                                    <td className="truncate">{FAQ.question}</td>
                                    <td className="truncate">{FAQ.answer}</td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} handleClick={() => openDetails(FAQ)} />
                                        {!FAQ.deleted_at && 
                                            <ActionButton text="Delete" icon={faTrashAlt} handleClick={() => deletes(FAQ.id, 1)} />
                                        }
                                        {FAQ.deleted_at && 
                                            <ActionButton text="Restore" icon={faRefresh} handleClick={() => deletes(FAQ.id, 0)} />
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody> :
                        <tbody>
                            <tr className="text-center bg-primary-700 text-xl">
                                <td colSpan="5" className="py-5">Belum ada data tersedia</td>
                            </tr>
                        </tbody>}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MasterFAQ;