import DashboardInfoBox from "../Components/Admin/DashboardInfoBox";

import { faMusic, faSmile, faUsers, faComments } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"

const AdminDashboard = () => {
    const [ fileCount, setFileCount ] = useState(0)
    const [ satisfied, setSatisfied ] = useState(0)
    const [ userCount, setUserCount ] = useState(0)
    const [ reportCount, setReportCount ] = useState(0)

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
        .get("http://localhost:5000/performances/summary")
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
        .get("http://localhost:5000/users/summary")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else setUserCount(res.data.data.user_count)
        }).catch(err => { swal_error(err) })
    
        axios
        .get("http://localhost:5000/reports/summary")
        .then(res => {
            if (res.status !== 200) swal_error(res);
            else setReportCount(res.data.data.report_count)
        }).catch(err => { swal_error(err) })
    }, [])

    return ( 
        <div className="admin-dashboard w-4/5 p-6 w-full overflow-y-scroll scrollbar-hide">
            <div className="flex gap-3 w-full mb-3">
                <DashboardInfoBox text={fileCount} subtext="File Converted" icon={faMusic}/>
                <DashboardInfoBox text={satisfied+"%"} subtext="Satisfied" icon={faSmile}/>
                <DashboardInfoBox text={userCount} subtext="Users" icon={faUsers}/>
                <DashboardInfoBox text={reportCount} subtext="Reports Received" icon={faComments}/>
            </div>
            <div className="flex gap-3 w-full h-1/2 mb-3">
                <div className="w-1/2 bg-primary-400 rounded-lg">
                    {/* template */}
                    <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                        Chart
                    </div>
                </div>
                <div className="w-1/2 bg-primary-400 rounded-lg">
                    {/* template */}
                    <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                        Chart
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2 bg-primary-400 rounded-lg">
                {/* template */}
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white">
                    Chart
                </div>
            </div>
        </div>
    );
}
 
export default AdminDashboard;