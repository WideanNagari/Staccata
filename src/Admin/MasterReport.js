import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faTrashAlt, faXmark, faRefresh } from '@fortawesome/free-solid-svg-icons'
import useFetch from "../Tools/useFetch";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MasterReport = () => {
    const { data } =  useFetch("http://localhost:5000/reports")
    const [ isOpenModal, setOpenModal ] = useState(false)

    const [ reporter, setReporter ] = useState("")
    const [ report_date, setReportDate ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

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
        // if(data.reporter.first_name===null)
        //     setReporter(data.reporter.username)
        // else
        //     setReporter(data.reporter_name)

        if(data.reporter.id===1)
            setReporter("Guest - "+data.reporter_name) 
        else
            setReporter(data.reporter_name) 

        setReportDate(data.created_at)
        setTitle(data.title)
        setDescription(data.description)
        setOpenModal(true)
    }

    const closeDetails = () => {
        setReporter("")
        setReportDate("")
        setTitle("")
        setDescription("")
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
                title: 'Are you sure you want to '+states[0]+' this report?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .delete("http://localhost:5000/reports/"+id)
                    .then((e) => {
                        if (e.status !== 200){
                            swal_error(e)
                        }else{
                            Swal.fire({
                                title: states[1]+'!',
                                text: 'The report has been '+states[1].toLowerCase()+'.',
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
            <PageTitle title="Master Report" />
            <div className="w-full flex-grow bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Report"/>

                <div className="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table className="table-fixed w-full font-semibold">
                        <thead className="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th className="w-1/12 py-3">ID</th>
                                <th className="w-2/12">Reporter</th>
                                <th className="w-2/12">Title</th>
                                <th className="w-4/12">Description</th>
                                <th className="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {data!=null ? <tbody>
                            {data.data.map((report) => (
                                <tr className="text-center odd:bg-primary-700 even:bg-primary-800" key={report.id}>
                                    <td>{report.id}</td>
                                    <td>{report.reporter.username}</td>
                                    <td className="truncate">{report.title}</td>
                                    <td className="truncate">{report.description}</td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} handleClick={() => openDetails(report)} />
                                        {!report.deleted_at && 
                                            <ActionButton text="Delete" icon={faTrashAlt} handleClick={() => deletes(report.id, 1)} />
                                        }
                                        {report.deleted_at && 
                                            <ActionButton text="Restore" icon={faRefresh} handleClick={() => deletes(report.id, 0)} />
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
            
            { isOpenModal && <div id="bg" className="fixed top-0 left-0 w-screen h-screen bg-primary bg-opacity-60"
                    onClick={() => setOpenModal(false)}></div>
            }

            { isOpenModal &&             
                <div id="modalSession" className="fixed top-[10%] left-[25%] bg-primary-900 h-4/5 w-1/2 text-primary rounded-lg
                                                    py-5">
                    <div className="text-center mb-5">
                        <p className="text-4xl font-bold mb-2">User Reports</p>
                        <p className="text-gray-500">By: {reporter}</p>
                        <p className="text-gray-500">On {report_date}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-4/5 border-solid border-primary-400 border-y-2 px-3 py-3">
                            <div className="text-xl font-bold mb-2">{title}</div>
                            <div>
                                {description}
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