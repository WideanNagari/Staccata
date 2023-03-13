import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useFetch from "../Tools/useFetch";

const MasterReport = () => {
    const { data, error, isPending } =  useFetch("http://localhost:5000/reports")

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
                                        <ActionButton text="Details" icon={faInfoCircle} />
                                        <ActionButton text="Delete" icon={faTrashAlt} />
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
 
export default MasterReport;