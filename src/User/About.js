import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

const About = () => {
    const [cookies, setCookie] = useCookies(['user_login']);
    const history = useHistory()
    const toDashboard = () => {
        setCookie('active_page', "Dashboard", {
            "path": "/"
        });
        history.push('/')
    }

    return (
        <div className="user-about flex-grow px-36 py-10">
            <div className="w-full h-full bg-primary-400 rounded-lg shadow-black shadow-2xl flex">
                <div className="w-3/5 h-full px-10 text-white flex items-center">
                    <div className="w-full">
                        <p className="text-4xl font-bold mb-5">Staccata</p>
                        <p className="text-2xl mb-10">
                            Staccata is a website where you can change the instrument of your MP3 song. This website utilizes machine learning to perform the task. 
                            Staccata was created by Widean Nagari, a student of informatics engineering at Institut Sains dan Teknologi Terpadu Surabaya.
                        </p>
                        <button className="bg-primary-100 px-5 py-2 text-lg rounded-lg hover:bg-primary-200 duration-100"
                            onClick={toDashboard}>
                            Start converting music instrument
                        </button>
                    </div>
                </div>
                <div className="w-2/5 h-full bg-primary-100 rounded-l-2xl shadow-black shadow-2xl flex items-center">
                    <img src="/Logo/logo.png" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default About;