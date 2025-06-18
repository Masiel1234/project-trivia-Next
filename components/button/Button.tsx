"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";



interface ButtonProps{
    name: string; 
    to: string;
    variant?: "primary" | "secondary" | "third" |"return" ;
}

const Button: React.FC<ButtonProps> = ({name, to ,variant= "primary" }) => {
    const router = useRouter();
    const handleClick = () =>{
        router.push(to);
    };
 const baseStyles = "px-10 py-2 rounded text-center font-bold relative inset-x-0 bottom-0";
  const variantStyles = {
    primary: "bg-pink-400 text-black text-xl font-bold px-8 py-2 rounded-full",
    secondary: "text-white underline text-sm mt-2",
    third: "bg-blue-400 text-black text-xl font-bold px-8 py-2 rounded-full",
    return:"fixed top-4 left-4 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out"
  };
    return(
    <button 
    
    className={variant ==="return" ? variantStyles.return : `${baseStyles} ${variantStyles[variant]}`} onClick={handleClick}>
    {variant === "return" ? (
        <GoArrowLeft className="w-5 h-5" />
      ) : (
        name
      )}</button>
);
}
export default Button;