import "./input.css";
 interface Iinput{
    label: string
    type: "text" | "password" | "email" | "number" 
 }

const Input = ({label, type}:Iinput) => {
  return (
    <>
      <div className="inputWrapper">
        <label htmlFor="">{label}</label>
      <input type={type} />
    </div>
    </>
  )
}

export default Input
