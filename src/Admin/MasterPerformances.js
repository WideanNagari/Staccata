import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTrashAlt, faXmark, faRefresh, faCheck, faTimes, faMinus } from '@fortawesome/free-solid-svg-icons'
import useFetch from "../Tools/useFetch";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const MasterReport = () => {
    const { data } =  useFetch("http://localhost:5000/performances")
    const [ isOpenModal, setOpenModal ] = useState(false)

    const [ title, setTitle ] = useState("")
    const [ initial, setInitial ] = useState("")
    const [ target, setTarget ] = useState("")
    const [ user, setUser ] = useState("")
    const [ duration, setDuration ] = useState(0)
    const [ accuracy, setAccuracy ] = useState(0)
    const [ loss, setLoss ] = useState(0)
    const [ liked, setLiked ] = useState("")
    const [ convert_date, setConvertDate ] = useState("")

    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }
    
    const openDetails = (data) => {
        if(data.user.id===1)
            setUser("Guest - "+data.user.username) 
        else{
            let name = data.user.username
            if(data.user.first_name!==null){
                name = data.user.first_name+" "+data.user.last_name
            }
            setUser(name)
        }

        setTitle(data.title)
        setInitial(data.initial)
        setTarget(data.target)
        setDuration(data.duration)
        setAccuracy(data.accuracy)
        setLoss(data.loss)
        setConvertDate(data.created_at)
        
        if(data.like_status===null) setLiked("Not yet liked")
        else if(data.like_status===0) setLiked("Disliked")
        else if(data.like_status===1) setLiked("Liked")

        setOpenModal(true)
    }

    const closeDetails = () => {
        setUser("")
        setTitle("")
        setInitial("")
        setTarget("")
        setDuration(0)
        setAccuracy(0)
        setLoss(0)
        setLiked("")
        setConvertDate("")
        setOpenModal(false)
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
                title: 'Are you sure you want to '+states[0]+' this performances?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .delete("http://localhost:5000/performances/"+id)
                    .then((e) => {
                        if (e.status !== 200){
                            swal_error(e)
                        }else{
                            Swal.fire({
                                title: states[1]+'!',
                                text: 'The performances has been '+states[1].toLowerCase()+'.',
                                icon: 'success',
                                confirmButtonText: 'Close',
                            })
                            .then(() => {
                                const deleted_data = e.data.data
                                console.log(deleted_data)
                                // To Do
                                // auto reload data of the table
                            })
                        }
                    })
                    .catch(e => {
                        swal_error(e)
                    })
                }
            });
        }
    }
    
    return (
        <div className="admin-master-report flex flex-col w-4/5 p-6 w-full h-full">
            <PageTitle title="Master Performance" />
            <div className="w-full flex-grow bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Performance"/>

                <div className="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table className="table-fixed w-full font-semibold">
                        <thead className="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th className="w-1/12 py-3">ID</th>
                                <th className="w-2/12">User</th>
                                <th className="w-3/12">Title</th>
                                <th className="w-1/12">Target</th>
                                <th className="w-1/12">Duration</th>
                                <th className="w-1/12">Like</th>
                                <th className="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {data!=null ? <tbody>
                            {data.data.map((performance) => (
                                <tr className="text-center odd:bg-primary-700 even:bg-primary-800" key={performance.id}>
                                    <td>{performance.id}</td>
                                    <td>{performance.user.username}</td>
                                    <td className="truncate">{performance.title}</td>
                                    <td>{performance.target}</td>
                                    <td>{performance.duration}</td>
                                    <td>
                                        { performance.like_status===null &&  <FontAwesomeIcon icon={faMinus} size="xl" fixedWidth/> }
                                        { performance.like_status!==null && performance.like_status===1 &&
                                            <FontAwesomeIcon icon={faCheck} size="xl" fixedWidth/>
                                        }
                                        { performance.like_status!==null && performance.like_status===0 &&
                                            <FontAwesomeIcon icon={faTimes} size="xl" fixedWidth/>
                                        }
                                    </td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} handleClick={() => openDetails(performance)} />
                                        {!performance.deleted_at && 
                                            <ActionButton text="Delete" icon={faTrashAlt} handleClick={() => deletes(performance.id, 1)} />
                                        }
                                        {performance.deleted_at && 
                                            <ActionButton text="Restore" icon={faRefresh} handleClick={() => deletes(performance.id, 0)} />
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody> :
                        <tbody>
                            <tr className="text-center bg-primary-700 text-xl">
                                <td colSpan="6" className="py-5">Belum ada data tersedia</td>
                            </tr>
                        </tbody>}
                    </table>
                </div>
            </div>
            
            { isOpenModal && <div id="bg" className="fixed top-0 left-0 w-screen h-screen bg-primary bg-opacity-60"
                    onClick={() => setOpenModal(false)}></div>
            }

{ isOpenModal &&             
                <div id="modalSession" className="fixed top-[20%] left-[25%] bg-primary-900 h-3/5 w-1/2 text-primary rounded-lg
                                                    py-5">
                    <div className="text-4xl font-bold text-center mb-5">
                        <p>Performance Details</p>
                    </div>
                    <div className="flex items-center justify-center text-xl">
                        <div className="flex items-center justify-center gap-2 w-4/5 border-solid border-primary-400 border-y-2 py-7">
                            <div className="text-right font-semibold w-1/3">
                                <p className="mb-1">User :</p>
                                <p className="mb-1">Title :</p>
                                <p className="mb-1">Duration :</p>
                                <p className="mb-1">Initial Instrument :</p>
                                <p className="mb-1">Target Instrument :</p>
                                <p className="mb-1">Accuracy :</p>
                                <p className="mb-1">Loss :</p>
                                <p className="mb-1">Like Status :</p>
                                <p>Converted At :</p>
                            </div>
                            <div className="w-2/3">
                                <p className="mb-1">{user}</p>
                                <p className="mb-1 truncate">{title}</p>
                                <p className="mb-1">{duration}</p>
                                <p className="mb-1">{initial}</p>
                                <p className="mb-1">{target}</p>
                                <p className="mb-1">{accuracy}%</p>
                                <p className="mb-1">{loss}</p>
                                <p className="mb-1">{liked}</p>
                                <p>{convert_date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-4xl font-bold text-center mt-5">
                        <ActionButton text="Close" icon={faXmark} handleClick={closeDetails} />
                    </div>
                </div>
            }
        </div>
    );
}
 
export default MasterReport;