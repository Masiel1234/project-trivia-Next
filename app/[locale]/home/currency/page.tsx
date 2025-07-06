'use client'
import PlanCard from "@/components/PlanCard";
import Background from "@/components/background/Background";
import Button from "@/components/button/Button";
import { basePlansData } from "@/data/plansData/plansData";
import { useTranslations } from "next-intl";
import {useCurrencyConversion} from "@/hooks/planCard/useCurrencyConversion";



const PlansPage: React.FC = () => {
  const  t  = useTranslations();
  const plansToDisplay = useCurrencyConversion(basePlansData)
  return (
    <Background variant='index'>
        <Button name="" variant="return" to="/home"/>
    <div className="">
      <h1 className="text-2xl border- font-bold text-center mb-4">{t('our_plans_title')}</h1>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 items-center space-y-4 md:space-y-0 px-4">
        {plansToDisplay.map((plan) => (
          <PlanCard key={plan.name} name={plan.name} price={plan.price} />
          ))};

      </div>
    </div>
    </Background>
  );
};

export default PlansPage;