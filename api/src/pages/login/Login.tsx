import { NavLink } from "react-router-dom";
import Apple from "../../components/Apple/Apple";
import Button from "../../components/Button/Button";
import Google from "../../components/Google/Google";
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
                            <Button text="Login" type="normal" />
                            <div className="account">
                                <p className="have-an-account">Don't have an account? <span><NavLink to={"/signup"}>Sign up</NavLink></span></p>
                                <div className="forgot-password">
                                <NavLink to={""}>Forgot Password?</NavLink>
                                </div>
                            </div>

                            <div className="continue-wrapper">
                                <Google />
                                <Apple />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Login
