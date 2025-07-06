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
    <button className="lex items-center justify-center gap-2 from-pink-500 text-black px-4 py-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"  onClick={handClick}>
       <CgDollar className="w-5 h-5 text-black" />{name && <span className="ml-2">{name}</span>}
    </button>
);
} 
export default ButtonCurrency;