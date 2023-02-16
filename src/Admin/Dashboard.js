import DashboardInfoBox from "../Components/Admin/DashboardInfoBox";

import { faMusic, faSmile, faUsers, faComments } from '@fortawesome/free-solid-svg-icons'

const UserDashboard = () => {
    return ( 
        <div className="admin-dashboard w-4/5 p-6 w-full overflow-y-scroll scrollbar-hide">
            <div className="flex gap-3 w-full mb-3">
                <DashboardInfoBox text="122" subtext="File Converted" icon={faMusic}/>
                <DashboardInfoBox text="80%" subtext="Satisfied" icon={faSmile}/>
                <DashboardInfoBox text="23" subtext="Users" icon={faUsers}/>
                <DashboardInfoBox text="9" subtext="Reports Received" icon={faComments}/>
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
 
export default UserDashboard;