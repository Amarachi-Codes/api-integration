import "./Apple.css";
import { BsApple } from "react-icons/bs";


const Apple = () => {
    return (
        <>
          <div className="apple">
            <div className="icon">
            <BsApple />
            </div>
            <div className="text">Continue with Apple</div>
          </div>
        </>
      );
}

export default Apple;
