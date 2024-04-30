import { NavLink } from "react-router-dom";
import Apple from "../../components/Apple/Apple";
import Button from "../../components/Button/Button";
import Google from "../../components/Google/Google";
import Input from "../../components/Input/Input";
import "./login.css";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    email: string;
  password: string;
}

const Login = () => {

    const schema: ZodType<FormData> = z
    .object({
        email: z.string().email(),
      password: z.string().min(5).max(20),
    })
    // .refine((data) => data.password === data.confirmPassword, {
    //   message: "Passwords do not match",
    //   path: ["confirmPassword"],
    // });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
         resolver: zodResolver(schema), 
        });
    
      const submitData = (data: FormData) => {
        console.log("It worked", data);
    
      };

    return (
        <>
            <div className="loginWrapper">
                <form className="form-wrapper" onSubmit={handleSubmit(submitData)}>
                    <div className="div-wrapper">
                        <div className="heading">Login</div>
                        <div className="form-contents">
                            <Input label="Email" type="email" {...register("email")} />
                            {errors.email && <span className="myerrors">{errors.email.message}</span>}
                            <Input label="Password" type="password"  {...register("password")}/>
                            {errors.password && <span className="myerrors">{errors.password.message}</span>}
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
                </form>
            </div>



        </>
    )
}

export default Login
