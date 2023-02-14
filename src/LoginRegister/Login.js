import InputText from "../Components/InputText";
import Button from "../Components/Button";

const Login = () => {
    return (
        <div className="login-main h-full">
            <div className="h-full w-full flex absolute">
                <div className="h-full w-1/2"></div>
                <div className="bg-primary-900 h-full w-1/2"></div>
            </div>
            <div className="h-full w-full absolute flex items-center justify-center">
                <div className="bg-primary h-9/10 w-3/5 shadow-custom-1 rounded-2xl flex overflow-hidden">
                    <div className="h-full w-1/2"></div>
                    <div className="bg-primary-900 h-full w-1/2 py-24 px-10">
                        <h1 className="font-bold text-5xl text-center mb-14">Log in</h1>
                        <form action="">
                            <InputText label="Username" name="username" type="text" />

                            <InputText label="Password" name="password" type="password" />

                            <input type="checkbox" name="rememberme" id="remember" className="w-4 h-4 mb-5"/>
                            <label htmlFor="remember" className="ml-2">Remember Me!</label>

                            <Button text="Login"/>
                            
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