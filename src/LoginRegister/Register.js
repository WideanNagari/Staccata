import InputText from "../Components/InputText";
import Button from "../Components/Button";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
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
        if(username!=="" && email!=="" && password!=="" && confPassword!==""){
            if(password===confPassword){
                axios
                .post("http://localhost:5000/users", {username: username, email:email, password: password, level:0})
                .then((e) => {
                    if (e.status !== 200){
                        swal_error(e)
                    }else{
                        Swal.fire(
                            'Register Success!',
                            'Your account successfully registered.',
                            'success'
                        )
                        .then(() => {
                            const data = e.data.data
                            console.log(data)
                            history.push('/login')
                        })
                    }
                })
                .catch(err => {
                    swal_error(e)
                })
            }else{
                Swal.fire({
                    title: "Password and Confirm Password must be the same!",
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        }else{
            Swal.fire({
                title: "All field must be filled!",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        }
    }

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
                    <div className="bg-primary-900 h-full w-1/2 py-12 px-10">
                        <h1 className="font-bold text-5xl text-center mb-14">Register</h1>
                        <form onSubmit={handleSubmit}>
                            <InputText label="Username" name="username" type="text" id="username"
                                        value={username}
                                        handleChange={setUsername} />

                            <InputText label="E-Mail" name="email" type="email" id="email"
                                        value={email}
                                        handleChange={setEmail} />

                            <InputText label="Password" name="password" type="password" id="password"
                                        value={password}
                                        handleChange={setPassword} />

                            <InputText label="Confirm Password" name="confirmPassword" type="password"  id="confirmPassword"
                                        value={confPassword}
                                        handleChange={setConfPassword} />

                            <Button text="Register" addedClass="mt-1 mb-5"/>
                            
                            <div className="flex gap-1">
                                <p>Already Registered?</p>
                                <a href="/login" className="text-blue-700">Login Here!</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;