'use client';

import PlanCard from "@/components/PlanCard";
import Background from "@/components/background/Background";
import Button from "@/components/button/Buttons/Button";
import { basePlansData } from "@/data/plansData/plansData";
import { useTranslations } from "next-intl";
import { useCurrencyConversion } from "@/hooks/planCard/useCurrencyConversion";

const PlansPage: React.FC = () => {
  const t = useTranslations();
  const plansToDisplay = useCurrencyConversion(basePlansData);

  return (
    <Background variant="index">
      <div className="w-full max-w-7xl  h-full p-30 mx-auto px-10 sm:px-8 lg:px-15">
         <Button name="" variant="return" to="/home" />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          {t('our_plans_title')}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plansToDisplay.map((plan) => (
            <PlanCard key={plan.name} name={plan.name} price={plan.price} />
          ))}
        </div>
      </div>
    </Background>
  );
};

export default PlansPage;
