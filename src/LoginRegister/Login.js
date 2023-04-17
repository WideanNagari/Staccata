import InputText from "../Components/InputText";
import Button from "../Components/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content"
import axios from "axios";

const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user_login']);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [remember, setRemember] = useState(true)
    const history = useHistory();
    
    const swal_error = (err) => {
        Swal.fire({
            title: err.response.data.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username!=="" && password!==""){
            axios
            .post("http://localhost:5000/login", {username: username, password: password})
            .then((e) => {
                if (e.status !== 200){
                    swal_error(e)
                    // throw Error("could not post the data")
                }else{
                    const data = e.data.data.data
                    const level = data.level
                    setCookie('user_login', data, {
                        "path": "/"
                    });
                    removeCookie('active_page')
                    
                    if(level===0) history.push('/')
                    else if(level===1) history.push('/admin')
                }
            })
            .catch(err => {
                swal_error(err)
                // if (err.name === 'AxiosError'){
                //     console.log('post aborted')
                // }
            })
        }
        else{
            Swal.fire({
                title: "Username and Password must be filled!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
            // Swal.fire({
            //     title: 'Example',
            //     text: 'Swal injected',
            //     icon: 'success',
            // });
        }
    }

    // const rememberChanged = () => {
    //     setRemember(!remember);
    // }

    return (
        <div className="login-main h-full">
            <div className="h-full w-full flex absolute">
                <div className="h-full w-1/2"></div>
                <div className="bg-primary-900 h-full w-1/2"></div>
            </div>
            <div className="h-full w-full absolute flex items-center justify-center">
                <div className="bg-primary h-9/10 w-3/5 shadow-custom-1 rounded-2xl flex overflow-hidden">
                    <div className="h-full w-1/2 flex items-center">
                        <a href="/"><img src="/Logo/logo.png" alt="" /></a>
                    </div>
                    <div className="bg-primary-900 h-full w-1/2 py-32 px-10">
                        <h1 className="font-bold text-5xl text-center mb-14">Log in</h1>
                        <form onSubmit={handleSubmit}>
                            <InputText label="Username" name="username" id="username" type="text"
                                    value={username}
                                    handleChange={setUsername} />

                            <InputText label="Password" name="password" id="password" type="password" 
                                    value={password}
                                    handleChange={setPassword} />

                            {/* <input type="checkbox" name="rememberme" id="remember" className="w-4 h-4 mb-5" 
                                    value={remember} 
                                    onClick={rememberChanged}/>
                            <label htmlFor="remember" className="ml-2">Remember Me!</label> */}

                            <Button text="Login" addedClass="mt-1 mb-5"/>
                            
                            <div className="flex gap-1">
                                <p>Not Registered Yet?</p>
                                <a href="/register" className="text-blue-700">Create an Account!</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;