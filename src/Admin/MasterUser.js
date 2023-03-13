import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import { ReactSession } from 'react-client-session';
import useFetch from "../Tools/useFetch";

const MasterUser = () => {
    const { data, error, isPending } =  useFetch("http://localhost:5000/users")
    
    const user_login = ReactSession.get("user_login");
    
    return (
        <div className="admin-master-user flex flex-col w-4/5 p-6 w-full h-full">
            <PageTitle title="Master User" />
            <div className="w-full flex-grow bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Username"/>

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
                        {data!=null ? <tbody>
                            {data.data.map((user) => (
                                <tr className="text-center odd:bg-primary-700 even:bg-primary-800" key={user.id}>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.file_converted_piano + user.file_converted_guitar}</td>
                                    <td>{user.report_sent}</td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} />
                                        <ActionButton text="Ban" icon={faExclamationCircle} />
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
 
export default MasterUser;