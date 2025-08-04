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
      <main className="w-full max-w-7xl min-h-screen mx-auto px-6 sm:px-8 lg:px-16 py-10">
        <Button
          variant="return"
          to="/home"
        />
        <h1
          id="plans-title"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800"
        >
          {t("our_plans_title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plansToDisplay.map((plan) => (
            <PlanCard key={plan.name} name={plan.name} price={plan.price} />
          ))}
        </div>
      </main>
    </Background>
  );
};

export default PlansPage;
