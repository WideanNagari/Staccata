import DashboardInfoBox from "../Components/Admin/DashboardInfoBox";

import { faMusic, faSmile, faUsers, faComments } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faMinus } from '@fortawesome/free-solid-svg-icons'


const AdminDashboard = () => {
    const [ fileCount, setFileCount ] = useState(0)
    const [ satisfied, setSatisfied ] = useState(0)
    const [ userCount, setUserCount ] = useState(0)
    const [ reportCount, setReportCount ] = useState(0)
    const [ dataView, setDataView ] = useState(null)
    const [ topReport, setTopReport ] = useState(null)
    const [ topPiano, setTopPiano ] = useState(null)
    const [ topGuitar, setTopGuitar ] = useState(null)

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
        .get(process.env.REACT_APP_BACKEND_URL+"/api/performances/summary")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{
                let satisfied = (res.data.data.like/res.data.data.converted)*100
                satisfied = Math.round(satisfied * 100) / 100
                setSatisfied(satisfied)
                setFileCount(res.data.data.converted)
            }
        }).catch(err => { swal_error(err) })
    
        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/users/summary")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else setUserCount(res.data.data.user_count)
        }).catch(err => { swal_error(err) })
    
        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/reports/summary")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else setReportCount(res.data.data.report_count)
        }).catch(err => { swal_error(err) })

        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/performances")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{ setDataView(res.data.data.reverse()) }
        }).catch(err => { swal_error(err) })

        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/reports/top")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{ setTopReport(res.data.data) }
        }).catch(err => { swal_error(err) })

        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/performances/top/Guitar")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{ setTopGuitar(res.data.data) }
        }).catch(err => { swal_error(err) })

        axios
        .get(process.env.REACT_APP_BACKEND_URL+"/api/performances/top/Piano")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else{ setTopPiano(res.data.data) }
        }).catch(err => { swal_error(err) })
    }, [])

    return ( 
        <div className="admin-dashboard p-6 w-full flex flex-col overflow-y-scroll scrollbar-hide">
            <div className="flex gap-3 w-full mb-3">
                <DashboardInfoBox text={fileCount} subtext="File Converted" icon={faMusic}/>
                <DashboardInfoBox text={satisfied+"%"} subtext="Satisfied" icon={faSmile}/>
                <DashboardInfoBox text={userCount} subtext="Users" icon={faUsers}/>
                <DashboardInfoBox text={reportCount} subtext="Reports Received" icon={faComments}/>
            </div>
            {/* <div className="flex gap-3 w-full h-1/2 mb-3">
                <div className="w-1/2 bg-primary-400 rounded-lg">
                    
                    <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                        Chart
                    </div>
                </div>
                <div className="w-1/2 bg-primary-400 rounded-lg">
                    
                    <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                        Chart
                    </div>
                </div>
            </div> */}
            {/* <div className="w-full h-1/2 bg-primary-400 rounded-lg">

                <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                    Chart
                </div>
            </div> */}

            <div className="flex gap-2 w-full h-full mb-3">
                <div className="w-3/4 bg-primary-400 rounded-lg">
                    <div className="w-full h-full px-6 py-4">
                        <h1 className="font-bold text-3xl text-white mb-5">Lastest Conversion</h1>

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
                                </tr>
                            </thead>
                            {dataView!=null ? <tbody>
                                {dataView.map((performance) => (
                                    <tr className="text-center odd:bg-primary-700 even:bg-primary-800" key={performance.id}>
                                        <td>{performance.id}</td>
                                        <td>{performance.user.username}</td>
                                        <td className="truncate">{performance.title}</td>
                                        <td>{performance.target}</td>
                                        <td className="py-4">{performance.duration}</td>
                                        <td>
                                            { performance.like_status===null &&  <FontAwesomeIcon icon={faMinus} size="xl" fixedWidth/> }
                                            { performance.like_status!==null && performance.like_status===1 &&
                                                <FontAwesomeIcon icon={faCheck} size="xl" fixedWidth/>
                                            }
                                            { performance.like_status!==null && performance.like_status===0 &&
                                                <FontAwesomeIcon icon={faTimes} size="xl" fixedWidth/>
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
                </div>
                <div className="w-1/4 rounded-lg gap-2">
                    <div className="w-full h-[30%] text-white rounded-lg bg-primary-400 py-2 px-3 mb-2 overflow-hidden">
                        <h1 className="font-bold text-lg mb-2">Top Reporter</h1>
                        <div className="h-[80%] w-full scrollbar-hide overflow-auto">
                            {topReport!=null && <div>
                                    {topReport.map((report) => ( 
                                        <div key={report.username}>{report.username} - {report.report_count} Report(s)</div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full h-[30%] text-white rounded-lg bg-primary-400 py-2 px-3 mb-2 overflow-hidden">
                        <h1 className="font-bold text-lg mb-2">Top Conversion - Piano to Guitar</h1>
                        <div className="h-[80%] w-full scrollbar-hide overflow-auto">
                            {topPiano!=null && <div>
                                    {topPiano.map((piano) => ( 
                                        <div key={piano.username}>{piano.username} - {piano.convert_count} Conversion(s)</div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full h-[30%] text-white rounded-lg bg-primary-400 py-2 px-3 mb-2 overflow-hidden">
                        <h1 className="font-bold text-lg mb-2">Top Conversion - Guitar to Piano</h1>
                        <div className="h-[80%] w-full scrollbar-hide overflow-auto">
                            {topGuitar!=null && <div>
                                    {topGuitar.map((guitar) => ( 
                                        <div key={guitar.username}>{guitar.username} - {guitar.convert_count} Conversion(s)</div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AdminDashboard;