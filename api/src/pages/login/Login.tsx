import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./login.css";

const Login = () => {
    return (
        <>
            <div className="loginWrapper">
                <div className="form-wrapper">
                    <div className="div-wrapper">
                        <div className="heading">Login</div>
                        <div className="form-contents">
                            <Input label="Email" type="email" />
                            <Input label="Password" type="password" />
                            <Button text="Login" type="normal"/>
                            <div>
                                <p>Don't have an account? <span>Sign up</span></p>
                                <p>Forgot Password?</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Login
