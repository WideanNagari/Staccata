import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const MasterUser = () => {
    let listUser = [];
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);
    listUser.push(["abc@gmail.com", "abc", 10, 2]);

    return (
        <div className="admin-master-user flex flex-col w-4/5 p-6 w-full h-full">
            <PageTitle title="Master User" />
            <div className="w-full flex-grow bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Username"/>

                <div class="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table class="table-fixed w-full font-semibold">
                        <thead class="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th class="w-4/12 py-3">E-Mail</th>
                                <th class="w-3/12">Username</th>
                                <th class="w-1/12">Convert</th>
                                <th class="w-1/12">Report</th>
                                <th class="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {listUser.length > 0 ? <tbody>
                            {listUser.map((user) => (
                                <tr class="text-center odd:bg-primary-700 even:bg-primary-800">
                                    <td>{user[0]}</td>
                                    <td>{user[1]}</td>
                                    <td>{user[2]}</td>
                                    <td>{user[3]}</td>
                                    <td className="flex gap-2 p-1">
                                        <ActionButton text="Details" icon={faInfoCircle} />
                                        <ActionButton text="Ban" icon={faExclamationCircle} />
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
 
export default MasterUser;