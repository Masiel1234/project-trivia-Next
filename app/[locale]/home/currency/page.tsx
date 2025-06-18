'use client'
import PlanCard from "@/components/PlanCard";
import BackgroundIndex from "@/components/background/BackgroundIndex";
import LanguageSelector from "@/components/button/LanguageSelector"
import Button from "@/components/button/Button";
import { basePlansData } from "@/data/plansData/plansData";
import { useTranslation } from "react-i18next";
import {useCurrencyConversion} from "@/hooks/planCard/useCurrencyConversion";



const PlansPage: React.FC = () => {
  const { t } = useTranslation();
  const plansToDisplay = useCurrencyConversion(basePlansData)
  return (
    <BackgroundIndex>
        <Button name="" variant="return" to="/index"/>
        <LanguageSelector/>
    <div className="">
      <h1 className="text-2xl border- font-bold text-center mb-4">{t('our_plans_title')}</h1>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 items-center space-y-4 md:space-y-0 px-4">
       <LanguageSelector />
        {plansToDisplay.map((plan) => (
          <PlanCard key={plan.name} name={plan.name} price={plan.price} />
          ))};

      </div>
    </div>
    </BackgroundIndex>
  );
};

export default PlansPage;