import PageTitle from "../Components/User/PageTitle";
import Input from "../Components/User/Input";
import LightButton from "../Components/User/LightButton";

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Reports = () => {
    return (
        <div className="user-reports flex flex-col flex-grow px-36 py-5">
            <PageTitle title="User Reports" subtitle="write your criticism and suggestion here." />

            <div className="flex-grow w-full rounded-lg bg-primary-400 px-6 py-5 flex items-center">
                <div className="w-full">
                    <div className="flex gap-3 w-full">
                        <Input name="first-name" id="fName-field" text="First Name" type="text"/>
                        <Input name="last-name" id="lName-field" text="Last Name" type="text"/>
                    </div>

                    <Input name="title" id="title-field" text="Title" type="text"/>

                    <div className="w-full">
                        <label htmlFor="description-field" className="text-lg text-white">Description</label>
                        <textarea name="description" id="description-field"
                                className="mt-1 h-32 w-full rounded-lg bg-primary-800 outline-0 px-3 mb-3"/>
                    </div>

                    <div className="flex justify-end">
                        <LightButton text="Submit" icon={faPaperPlane} addedClass="w-auto px-5"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Reports;