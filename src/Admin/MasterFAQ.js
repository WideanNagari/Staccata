import PageTitle from "../Components/Admin/PageTitle";
import SearchBox from "../Components/Admin/SearchBox";
import ActionButton from "../Components/Admin/ActionButton";

import { faInfoCircle, faTrashAlt, faAdd, faSave } from '@fortawesome/free-solid-svg-icons'

const MasterFAQ = () => {
    let listFAQ = [];
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    listFAQ.push(["1", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Provident labore quisquam vitae earum deleniti repudiandae illum doloremque odit perferendis?"]);
    
    return (
        <div className="admin-master-report w-4/5 p-6 w-full h-full overflow-y-scroll scrollbar-hide">
            <PageTitle title="Frequently Asked Question" />
            
            <div className="w-full bg-primary-400 rounded-lg px-5 py-4 mb-3">
                <label htmlFor="question-field" className="text-lg text-white">Question</label><br/>
                <input type="text" name="question" id="question-field"
                        className="mt-1 h-10 w-full rounded-lg bg-primary-800 outline-0 px-3 mb-3"/> <br/>

                <label htmlFor="answer-field" className="text-lg text-white">Answer</label><br/>
                <textarea name="answer" id="answer-field" 
                        className="mt-1 h-32 w-full rounded-lg bg-primary-800 outline-0 px-3 py-1 mb-3"/> <br/>

                <div className="flex gap-2 justify-end">
                    <ActionButton text="Create" icon={faAdd} addedClass="w-auto px-5"/>
                    <ActionButton text="Save All Changes" icon={faSave} addedClass="w-auto px-5" />
                </div>
            </div>

            <div className="w-full bg-primary-400 rounded-lg p-5">
                <SearchBox text="Search Question"/>

                <div class="overflow-auto w-full h-auto max-h-[30rem] scrollbar-hide rounded-lg shadow-xl">
                    <table class="table-fixed w-full font-semibold">
                        <thead class="bg-primary-100 text-white text-lg sticky top-0">
                            <tr>
                                <th class="w-1/12 py-3">ID</th>
                                <th class="w-4/12">Question</th>
                                <th class="w-4/12">Answer</th>
                                <th class="w-3/12">Action</th>
                            </tr>
                        </thead>
                        {listFAQ.length > 0 ? <tbody>
                            {listFAQ.map((FAQ) => (
                                <tr class="text-center odd:bg-primary-700 even:bg-primary-800">
                                    <td>{FAQ[0]}</td>
                                    <td className="truncate">{FAQ[1]}</td>
                                    <td className="truncate">{FAQ[2]}</td>
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

export default MasterFAQ;