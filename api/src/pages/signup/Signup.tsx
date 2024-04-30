
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./signup.css";
import axios from "axios";import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



const Signup = () => {
  return (
    <>
      <div className="signupWrapper">
                <div className="form-wrapper">
                    <div className="div-wrapper">
                        <div className="heading">Create an Account</div>
                        <div className="form-contents">
                            <Input label="Firstname" type="text"/>
                            <Input label="Lastname" type="text"/>
                            <Input label="Email" type="email" />
                            <Input label="Password" type="password" />
                            <Input label="Confirm Password" type="password" />
                            <Button text="Signup" type="normal" />
                            

                            
                        </div>
                    </div>
                </div>
            </div>


    </>
  );
};

export default Signup;
