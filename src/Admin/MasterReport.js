import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const MasterReport = () => {
    let listReport = [];
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listReport.push(["1", "Widean Nagari", "Lorem ipsum dolor sit amet consectetur", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    
    return (
        <div className="admin-master-report flex flex-col w-4/5 p-6 w-full h-full">
            <PageTitle title="Master Report" />
            <div className="w-full flex-grow bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Report"/>

                <div class="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table class="table-fixed w-full font-semibold">
                        <thead class="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th class="w-1/12 py-3">ID</th>
                                <th class="w-2/12">Reporter</th>
                                <th class="w-2/12">Title</th>
                                <th class="w-4/12">Description</th>
                                <th class="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {listReport.length > 0 ? <tbody>
                            {listReport.map((report) => (
                                <tr class="text-center odd:bg-primary-700 even:bg-primary-800">
                                    <td>{report[0]}</td>
                                    <td>{report[1]}</td>
                                    <td className="truncate">{report[2]}</td>
                                    <td className="truncate">{report[3]}</td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} />
                                        <ActionButton text="Delete" icon={faTrashAlt} />
                                    </td>
                                </tr>
                            ))}
                        </tbody> :
                        <tbody>
                            <tr class="text-center bg-primary-700 text-xl">
                                <td colspan="5" class="py-5">Belum ada data tersedia</td>
                            </tr>
                        </tbody>}
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default MasterReport;