
import "./button.css";

interface IButton {
    text: string
    type?: "normal" | "normal2"
    
    
}

const Button = ({ text, type,}: IButton) => {
    return (
        <div >
           
            <button className={type}>{text}</button>
            
        </div>
    )
}

export default Button
