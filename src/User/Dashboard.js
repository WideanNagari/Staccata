import LightButton from '../Components/User/LightButton';

import { faMagnifyingGlass, faPlay, faThumbsUp, faThumbsDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
// import Swal from "sweetalert2";

const UserDashboard = () => {

    // const swal_error = (err) => {
    //     Swal.fire({
    //         title: err.response.data.message,
    //         icon: 'error',
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'OK'
    //     });
    // }
    
    return ( 
        <div className="user-dashboard gap-3 h-10 flex flex-col flex-grow gap-3 px-36 py-5">
            <div className="bg-primary-400 w-full h-1/2 rounded-lg overflow-hidden flex shadow-black shadow-xl">
                <div className="w-2/5 h-full bg-primary-100 rounded-r-2xl shadow-black shadow-2xl p-5">
                    <div className="w-full h-full border-4 border-primary-900 rounded-lg p-3">
                        <div className="w-full h-full border-2 border-primary-900 border-dashed rounded-lg
                                        flex items-center justify-center">
                            <div className="text-2xl text-center">
                                <p className="text-white mb-2">Drop MP3 File Here!</p>
                                <p className="text-white mb-3">or</p>
                                <LightButton text="Choose File" icon={faMagnifyingGlass} addedClass="py-2 px-4" color="#013A63" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 h-full px-10 py-5">
                    <p className="font-bold text-xl text-white mb-3">Choose the type of current instrument :</p>
                    <div className="flex gap-2 mb-5">
                        <select className="text-primary text-lg bg-primary-900 rounded-lg w-3/5 px-3 py-2 outline-none">
                            <option value="piano">Piano</option>
                            <option value="guitar">Guitar</option>
                        </select>
                        <LightButton text="Convert" icon={faPlay} addedClass="py-2 px-4" color="#013A63" />
                    </div>

                    <p className="font-bold text-xl text-white mb-3">Progress :</p>
                    <div className="flex gap-5 items-center">
                        <div className="w-2/3 h-10 bg-primary-900 rounded-lg flex items-center px-5">
                            <div className="w-full h-4 border-2 border-primary-100 rounded-full">
                                <div className="h-full w-1/2 bg-primary-100 rounded-full"></div>
                            </div>
                        </div>
                        <p className="font-bold text-xl text-white">50%</p>
                    </div>

                </div>
            </div>
            <div className="bg-primary-400 w-full h-1/2 rounded-lg overflow-hidden flex shadow-black shadow-xl">
                <div className="w-3/5 h-full px-6 py-5">
                    <p className="text-white text-3xl font-bold mb-2">Result :</p>
                    <div className="w-full h-2/3 flex items-center justify-center">
                        <div className="w-4/5">
                            <div className="w-full h-10 bg-primary-900 rounded-lg flex items-center gap-3 px-5">
                                <p className="text-lg text-primary-100">1:03</p>
                                <div className="w-full h-4 border-2 border-primary-100 rounded-full">
                                    <div className="h-full w-1/2 bg-primary-100 rounded-full"></div>
                                </div>
                                <FontAwesomeIcon icon={faPlay} size="lg" color="#013A63" fixedWidth/>
                            </div>
                            <div className="flex justify-center items-center mt-2 gap-2">
                                <p className="text-xl text-white">Rate this result :</p>
                                <FontAwesomeIcon icon={faThumbsUp} size="lg" color="white" fixedWidth/>
                                <p className="text-xl text-white"> or </p>
                                <FontAwesomeIcon icon={faThumbsDown} size="lg" color="white" fixedWidth/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <LightButton text="Download" icon={faDownload} addedClass="py-2 px-10" color="#013A63" />
                    </div>
                </div>
                <div className="w-2/5 h-full bg-primary-100 rounded-l-2xl shadow-black shadow-2xl">
                    <div className="flex justify-center mt-3">
                        <div className="w-2/3 border-b-2 border-white text-center p-3">
                            <p className="text-xl text-white font-bold">More Information</p>
                        </div>
                    </div>
                    <div className="w-full p-3 flex gap-1 text-lg text-white">
                        <div className='w-2/5 text-right'>
                            <p className="mb-2">Title :</p>
                            <p className="mb-2">Initial Instrument :</p>
                            <p className="mb-2">Final Instrument :</p>
                            <p className="mb-2">Duration :</p>
                            <p>Accuracy :</p>
                        </div>
                        <div className='w-3/5'>
                            <p className='truncate mb-2'>Lorem Ipsum Dolor</p>
                            <p className="mb-2">Piano</p>
                            <p className="mb-2">Guitar</p>
                            <p className="mb-2">1 minute 21 Seconds</p>
                            <p>67%</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-2/3 border-t-2 border-white text-center p-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserDashboard;