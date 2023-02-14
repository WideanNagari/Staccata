import InputText from "../Components/InputText";
import Button from "../Components/Button";

const Register = () => {
    return (
        
        <div className="login-main h-full">
            <div className="h-full w-full flex absolute">
                <div className="h-full w-1/2"></div>
                <div className="bg-primary-900 h-full w-1/2"></div>
            </div>
            <div className="h-full w-full absolute flex items-center justify-center">
                <div className="bg-primary h-9/10 w-3/5 shadow-custom-1 rounded-2xl flex overflow-hidden">
                    <div className="h-full w-1/2"></div>
                    <div className="bg-primary-900 h-full w-1/2 py-12 px-10">
                        <h1 className="font-bold text-5xl text-center mb-14">Register</h1>
                        <form action="">
                            <InputText label="Username" name="username" type="text" />

                            <InputText label="E-Mail" name="email" type="email" />

                            <InputText label="Password" name="password" type="password" />
                            <InputText label="Confirm Password" name="confirmPassword" type="password" />

                            <Button text="Register"/>
                            
                            <div className="flex gap-1">
                                <p>Already Registered?</p>
                                <a href="/" className="text-blue-700">Login Here!</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;