import { ButtonComponentProps } from "../../types/Type"
import {useState} from "react"
const Button:React.FC<ButtonComponentProps> = ({text}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => { 
setIsActive(!isActive);
    };
  return (
    <button onClick={handleClick} className={`${text==="Alive"?"border-green-600 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200":text==="Dead"?"border-red-600 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200":"border-gray-600 text-gray-400 cursor-pointer hover:bg-gray-600 hover:text-gray-200"} w-24 text-center border-2 [&:active]:text-purple-500  rounded-full px-3 py-2 ${isActive&&"bg-blue-500"} `}>
    {text}
  </button>
  )
}

export default Button