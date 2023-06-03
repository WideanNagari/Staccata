import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faExclamationCircle, faXmark, faRefresh } from '@fortawesome/free-solid-svg-icons'

// import { ReactSession } from 'react-client-session';
// import useFetch from "../Tools/useFetch";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MasterUser = () => {
    // let { data } =  useFetch(process.env.REACT_APP_BACKEND_URL+"/api/users")
    const [ dataUser, setDataUser ] = useState(null)
    const [ dataView, setDataView ] = useState(null)
    const [ isOpenModal, setOpenModal ] = useState(false)

    const [ username, setUsername ] = useState("")
    const [ fullname, setFullname ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ converted, setConverted ] = useState("")
    const [ reportSent, setReportSent ] = useState("")
    const [ joined, setJoined ] = useState("")
    const [ changer, setChanger ] = useState(false)
    
    // const user_login = ReactSession.get("user_login");

    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }

    const inputChange = (name) => {
        const newUsers = dataUser.filter(user => user.username.toLowerCase().search(name.toLowerCase()) !== -1)
        setDataView(newUsers)
    }

    const openDetails = (data) => {
        let join = data.created_at.split(' ')

        if(data.first_name===null)
            setFullname("-")
        else
            setFullname(data.first_name+" "+data.last_name)

        setUsername(data.username)
        setEmail(data.email)
        setConverted(data.file_converted_piano +" (to Piano) " + data.file_converted_guitar + " (to Guitar)")
        setReportSent(data.report_sent)
        setJoined(join[0]+" "+join[1]+" "+join[2]+" "+join[3])
        setOpenModal(true)
    }

    const closeDetails = () => {
        setOpenModal(false)
    }

    const ban = (id, state) => {
        let states = ["",""]
        if(id!==0){
            if(state===1){
                states[0] = "ban";
                states[1] = "Banned";
            }
            else{
                states[0] = "unban";
                states[1] = "Unbanned";
            }
            
            Swal.fire({
                title: 'Are you sure you want to '+states[0]+' this user?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .delete(process.env.REACT_APP_BACKEND_URL+"/api/users/"+id)
                    .then((e) => {
                        if (e.status !== 200){
                            swal_error(e)
                        }else{
                            Swal.fire({
                                title: states[1]+'!',
                                text: 'The user has been '+states[1].toLowerCase()+'.',
                                icon: 'success',
                                confirmButtonText: 'Close',
                            })
                            .then(() => {
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
        .get(process.env.REACT_APP_BACKEND_URL+"/api/users")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{
                setDataUser(res.data.data)
                setDataView(res.data.data)
            }
        }).catch(err => { swal_error(err) })
    }, [changer])

    return (
        <div className="admin-master-user flex flex-col w-4/5 p-6 w-full h-full">
            <PageTitle title="Master User" />
            <div className="w-full flex-grow bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Username" handleChange={(e) => inputChange(e.target.value)}/>

                <div className="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table className="table-fixed w-full font-semibold">
                        <thead className="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th className="w-4/12 py-3">E-Mail</th>
                                <th className="w-3/12">Username</th>
                                <th className="w-1/12">Convert</th>
                                <th className="w-1/12">Report</th>
                                <th className="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {dataView!=null ? <tbody>
                            {dataView.map((user) => (
                                <tr className="text-center odd:bg-primary-700 even:bg-primary-800" key={user.id}>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.file_converted_piano + user.file_converted_guitar}</td>
                                    <td>{user.report_sent}</td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} handleClick={() => openDetails(user)} />
                                        {!user.deleted_at && 
                                            <ActionButton text="Ban" icon={faExclamationCircle} handleClick={() => ban(user.id, 1)} />
                                        }
                                        {user.deleted_at && 
                                            <ActionButton text="Unban" icon={faRefresh} handleClick={() => ban(user.id, 0)} />
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
                <div id="modalSession" className="fixed top-[20%] left-[25%] bg-primary-900 h-3/5 w-1/2 text-primary rounded-lg
                                                    py-5">
                    <div className="text-4xl font-bold text-center mb-5">
                        <p>User Profile</p>
                    </div>
                    <div className="flex items-center justify-center text-xl">
                        <div className="flex items-center justify-center gap-2 w-4/5 border-solid border-primary-400 border-y-2 py-7">
                            <div className="text-right font-semibold w-1/2">
                                <p className="mb-2">Username :</p>
                                <p className="mb-2">Full Name :</p>
                                <p className="mb-2">E-mail :</p>
                                <p className="mb-2">File Converted :</p>
                                <p className="mb-2">Report Sent :</p>
                                <p>Joined Since :</p>
                            </div>
                            <div className="w-1/2">
                                <p className="mb-2">{username}</p>
                                <p className="mb-2">{fullname}</p>
                                <p className="mb-2">{email}</p>
                                <p className="mb-2">{converted}</p>
                                <p className="mb-2">{reportSent} Report(s)</p>
                                <p>{joined}</p>
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
 
export default MasterUser;