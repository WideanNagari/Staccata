import LightButton from '../Components/User/LightButton';

import { faMagnifyingGlass, faPlay, faThumbsUp, faThumbsDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';
import Swal from "sweetalert2";

import { useState } from "react";
import { useCookies } from 'react-cookie';

const UserDashboard = () => {
    const [cookies, setCookie] = useCookies(['user_login']);
    const [title, setTitle] = useState('-');
    const [initial, setInitial] = useState('Piano');
    const [target, setTarget] = useState('Guitar');
    const [duration, setDuration] = useState('0 minute 0 seconds');
    const [accuracy, setAccuracy] = useState('0');
    const [loss, setLoss] = useState('0');
    const [converting, setConverting] = useState(false);
    const [convertDone, setConvertDone] = useState(false);
    const [voted, setVoted] = useState(false);

    // const swal_error = (err) => {
    //     Swal.fire({
    //         title: err.response.data.message,
    //         icon: 'error',
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'OK'
    //     });
    // }

    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }

    const startConvert = () => {
        setConverting(true)
        console.log("convert")
        setTitle("-")
        setDuration("0 minute 0 seconds")
        setAccuracy("0")
        setLoss("0")
        setConvertDone(true)
        setConverting(false)
    }

    const startDownload = () => {
        console.log("download")
    }

    const initialChange = (value) => {
        let t = "Guitar"
        if(value==="Guitar") t = "Piano"
        setInitial(value)
        setTarget(t)
    }

    const like = () => {
        const id = cookies.user_login===undefined ? 1 : cookies.user_login.id
        const convert_id = 1
        axios
        .put("http://localhost:5000/performances/vote/"+convert_id, {vote: 1})
        .then((e) => {
            if (e.status !== 200){
                swal_error(e)
            }else{
                Swal.fire(
                    'Liked!',
                    'Thank you for your vote.',
                    'success'
                ).then(() => {
                    setVoted(true)
                })
            }
        })
        .catch(err => {
            swal_error(err)
        })
    }

    const dislike = () => {
        const id = cookies.user_login===undefined ? 1 : cookies.user_login.id 
        const convert_id = 1
        axios
        .put("http://localhost:5000/performances/vote/"+convert_id, {vote: 0})
        .then((e) => {
            if (e.status !== 200){
                swal_error(e)
            }else{
                Swal.fire(
                    'Disliked!',
                    'Thank you for your vote.',
                    'success'
                ).then(() => {
                    setVoted(true)
                })
            }
        })
        .catch(err => {
            swal_error(err)
        })
    }
    
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
                        <select className="text-primary text-lg bg-primary-900 rounded-lg w-3/5 px-3 py-2 outline-none"
                            onChange={(e) => initialChange(e.target.value)}>
                            <option value="Piano">Piano</option>
                            <option value="Guitar">Guitar</option>
                        </select>
                        <LightButton text="Convert" icon={faPlay} addedClass="py-2 px-4" color="#013A63" handleClick={startConvert}/>
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
                    {convertDone && <div className="w-full h-full">
                        <div className="w-full h-2/3 flex items-center justify-center">
                            <div className="w-4/5">
                                <div className="w-full h-10 bg-primary-900 rounded-lg flex items-center gap-3 px-5">
                                    <p className="text-lg text-primary-100">1:03</p>
                                    <div className="w-full h-4 border-2 border-primary-100 rounded-full">
                                        <div className="h-full w-1/2 bg-primary-100 rounded-full"></div>
                                    </div>
                                    <FontAwesomeIcon icon={faPlay} size="lg" color="#013A63" fixedWidth/>
                                </div>
                                {!voted && <div className="flex justify-center items-center mt-2 gap-2">
                                    <p className="text-xl text-white">Rate this result :</p>
                                    <FontAwesomeIcon icon={faThumbsUp} size="lg" color="white" fixedWidth onClick={like} className="cursor-pointer"/>
                                    <p className="text-xl text-white"> or </p>
                                    <FontAwesomeIcon icon={faThumbsDown} size="lg" color="white" fixedWidth onClick={dislike} className="cursor-pointer"/>
                                </div>}
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <LightButton text="Download" icon={faDownload} addedClass="py-2 px-10" color="#013A63" handleClick={startDownload}/>
                        </div>
                    </div>}
                    <div className="w-full h-4/5 flex items-center justify-center text-white font-bold text-xl">
                        <div className="w-4/5 h-3/5 flex items-center text-center border-2 border-primary-900 border-dashed rounded-lg">
                            Your converted song will appear here when the convert progress is done.
                        </div>
                    </div>
                    {/* {!convertDone} */}
                </div>
                <div className="w-2/5 h-full bg-primary-100 rounded-l-2xl shadow-black shadow-2xl">
                    <div className="flex justify-center mt-3">
                        <div className="w-2/3 border-b-2 border-white text-center p-3">
                            <p className="text-xl text-white font-bold">More Information</p>
                        </div>
                    </div>
                    <div className="w-full p-3 flex gap-2 text-lg text-white">
                        <div className='w-2/5 text-right'>
                            <p className="mb-1">Title :</p>
                            <p className="mb-1">Initial Instrument :</p>
                            <p className="mb-1">Target Instrument :</p>
                            <p className="mb-1">Duration :</p>
                            <p className="mb-1">Accuracy :</p>
                            <p>Loss :</p>
                        </div>
                        <div className='w-3/5'>
                            <p className='truncate mb-1'>{title}</p>
                            <p className="mb-1">{initial}</p>
                            <p className="mb-1">{target}</p>
                            <p className="mb-1">{duration}</p>
                            <p className="mb-1">{accuracy}%</p>
                            <p>{loss}</p>
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