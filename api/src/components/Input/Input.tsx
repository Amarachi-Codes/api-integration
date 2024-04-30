import "./input.css";
 interface Iinput{
    label: string
    type: "text" | "password" | "email" | "number" 
     name?: string
  }

const Input = ({label, type, name }:Iinput) => {
  return (
    <>
      <div className="inputWrapper"> 
        <label htmlFor={label}>{label}</label>
      <input type={type} name={name} />
    </div>
    </>
  )
}

export default Input
