import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./signup.css";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {

  const schema: ZodType<FormData> = z
    .object({
      firstname: z.string().min(2).max(30),
      lastname: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

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
      <div className="signupWrapper">
        <form className="form-wrapper" onSubmit={handleSubmit(submitData)}>
          <div className="div-wrapper">
            <div className="heading">Create an Account</div>
            <div className="form-contents">
              <Input label="Firstname" type="text" {...register("firstname")} />
              {errors.firstname && <span className="myerrors">{errors.firstname.message}</span>}
              <Input label="Lastname" type="text" {...register("lastname")} />
              {errors.lastname && <span className="myerrors">{errors.lastname.message}</span>}
              <Input label="Email" type="email" {...register("email")} />
              {errors.email && <span className="myerrors">{errors.email.message}</span>}
              <Input label="Password" type="password" {...register("password")} />
              {errors.password && <span className="myerrors">{errors.password.message}</span>}
              <Input label="Confirm Password" type="password" {...register("confirmPassword")} />
              {errors.confirmPassword && <span className="myerrors">{errors.confirmPassword.message}</span>}
              <Button text="Signup" type="normal" />



            </div>
          </div>
        </form>
      </div>


    </>
  )
}

export default Signup
