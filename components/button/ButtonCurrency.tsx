"use client";

import { useRouter } from "next/navigation";
import { CgDollar } from "react-icons/cg";
import { buttonVariants } from "@/utils/buttons/buttonStyle";
interface ButtonCurrencyProps {
  name: string;
  to: string;
}
const ButtonCurrency: React.FC<ButtonCurrencyProps> = ({ name, to }) => {
  const navigate = useRouter();
  const handClick = () => {
    navigate.push(to);
  };

  return (
    <button
      className={buttonVariants.currency}
      onClick={handClick}
    >
      <CgDollar className="w-5 h-5 text-black" />
      {name && <span className="ml-2">{name}</span>}
    </button>
  );
};
export default ButtonCurrency;
