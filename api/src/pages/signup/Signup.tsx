import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./signup.css";
import axios from "axios";





const Signup = () => {

  const dataInit = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(dataInit);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log("submitted");
    await registerRequest(data);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function registerRequest(data: typeof dataInit) {
    console.log("requesting...");

    const response = await axios.post(
      "https://p2p-qrjp.onrender.com/api/v1/users/register",
      { ...data, fullname: `${data.firstName} ${data.lastName}` }
    );

    if (response.status === 409) {
      setErrorMessage("Email address already in use");
      setTimeout(() => {
        setErrorMessage("");
      }, 30000);
    }

    if (response.status === 201) {
      setErrorMessage("Account created");
      setTimeout(() => {
        setErrorMessage("");
      }, 30000);
    }

    if (response.status === 500 || response.status === 400) {
      setErrorMessage("Something went wrong");
      setTimeout(() => {
        setErrorMessage("");
      }, 30000);
    }
    console.log(response);
  }


  return (
    <>
      <div onSubmit={onSubmit} className="signupWrapper">
        <form className="form-wrapper">
          <div className="div-wrapper">
            {errorMessage.length > 1 && <p>{errorMessage}</p>}
            <div className="heading">Create an Account</div>
            <div className="form-contents">
              <Input
                onChange={onInputChange}
                value={data.firstName}
                name={"firstName"}
                label="Firstname"
                type="text"
              />
              <Input
                onChange={onInputChange}
                value={data.lastName}
                name={"lastName"}
                label="Lastname"
                type="text"
              />
              <Input
                onChange={onInputChange}
                value={data.email}
                name={"email"}
                label="Email"
                type="email"
              />
              <Input
                onChange={onInputChange}
                value={data.phone}
                name={"phone"}
                label="Phone number"
                type="number"
              />
              <Input
                onChange={onInputChange}
                value={data.password}
                name={"password"}
                label="Password"
                type="password"
              />
              <Input
                onChange={onInputChange}
                value={data.confirmPassword}
                name={"confirmPassword"}
                label="Confirm Password"
                type="password"
              />
              <Button text="Signup" type="normal" />



            </div>
          </div>
      </form>
    </div >


    </>
  );
};

export default Signup;
