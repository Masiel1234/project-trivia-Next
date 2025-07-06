'use client'

import React from "react";
import { useTranslations } from "next-intl";
import { useFormattedPrice } from "@/hooks/planCard/useFormattedPrice"


interface PlanCardProps {
  name: string; 
  price: number; 
}

const PlanCard: React.FC<PlanCardProps> = ({ name, price }) => {
  const  t  = useTranslations();
  const formattedPrice = useFormattedPrice(price); 

  return (
    <div className="p-6 border border-gray-200 rounded-2xl shadow-md w-full max-w-xs flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 bg-white">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 capitalize">
        {t(name)}
      </h2>
      <p className="text-4xl md:text-5xl lg:text-3xl font-extrabold text-black-600 tracking-tight leading-none mt-9 mb-9">
        {formattedPrice}
      </p>
      <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out">
        {t("plans.selectButton")}
      </button>
    </div>
  );
};

export default PlanCard;