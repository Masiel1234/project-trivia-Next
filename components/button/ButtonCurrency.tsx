"use client"

import { useRouter } from "next/navigation";
import { CgDollar } from "react-icons/cg";
interface ButtonCurrencyProps{
    name: string;
    to: string;

}

const ButtonCurrency: React.FC<ButtonCurrencyProps> = ({name,to}) =>{
const navigate = useRouter();
const handClick = () =>{
    navigate.push(to);
}

return(
    <button className="fixed top-4 left-4 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out"  onClick={handClick}>
       <CgDollar className="w-5 h-5 text-black" />{name && <span className="ml-2">{name}</span>}
    </button>
);
} 
export default ButtonCurrency;