"use client";

import { useRouter } from "next/navigation";
import { buttonVariants } from "@/utils/buttons/buttonStyle";
import { CurrencyButtonProps } from "@/types/buttons/ButtonProps";

const ButtonCurrency: React.FC<CurrencyButtonProps> = ({ to ,children}) => {
  const navigate = useRouter();
  const handClick = () => {
    navigate.push(to);
  };

  return (
    <button
      className={buttonVariants.currency}
      onClick={handClick}
    >
        {children}
    </button>
  );
};
export default ButtonCurrency;
