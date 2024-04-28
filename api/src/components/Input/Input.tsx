import "./input.css";
interface Iinput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Input = ({ label, type, ...props }: Iinput) => {
  return (
    <>
      <div className="inputWrapper">
        <label htmlFor="">{label}</label>
        <input type={type} {...props} />
      </div>
    </>
  );
};

export default Input;
