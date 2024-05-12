import { Children } from "react";

interface Props {
    children: React.ReactNode;
    color: String
    onClick : () => void ;
}

const Button = ({children, onClick, color}: Props) => {
  return (
<button type="button" className={"btn btn-"+ color} onClick={onClick}>{children}</button>

  )
}

export default Button