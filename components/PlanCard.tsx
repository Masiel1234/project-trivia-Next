'use client';

import React from "react";
import { useTranslations } from "next-intl";
import { useFormattedPrice } from "@/hooks/planCard/useFormattedPrice";

interface PlanCardProps {
  name: string;
  price: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ name, price }) => {
  const t = useTranslations();
  const formattedPrice = useFormattedPrice(price);

  return (
    <div className="w-full grid-cols-3 md:grid-cols-2 lg:grid-cols-2 p-4 sm:p-6 md:p-8 border border-gray-200 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800 capitalize">
        {t(name)}
      </h2>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-none mt-4 mb-6 sm:mb-8">
        {formattedPrice}
      </p>
      <button className="mt-4 sm:mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-colors duration-300 ease-in-out text-sm sm:text-base">
        {t("plans.selectButton")}
      </button>
    </div>
  );
};

export default PlanCard;
