import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getDisplayCurrencyCode, convertCurrency } from "../../utils/currencyUtils";

interface PlanData {
  name: string;
  price: number;
  originalCurrency: string;
}

export const useCurrencyConversion = (basePlans: PlanData[]) => {
  const { i18n } = useTranslation();
  const [convertedPlans, setConvertedPlans] = useState<PlanData[]>([]);

  useEffect(() => {
    const targetDisplayCurrencyCode = getDisplayCurrencyCode(i18n.language);
    const convertAndSetPlans = async () => {
      const newConvertedPlans = await Promise.all(
        basePlans.map(async (plan) => {
          if (plan.originalCurrency === targetDisplayCurrencyCode) {
            return {
              ...plan,
              price: plan.price,
            };
          } else {
           
            const finalPrice = await convertCurrency(
              plan.price,
              plan.originalCurrency,
              targetDisplayCurrencyCode
            );
            return {
              ...plan,
              price: finalPrice,
            };
          }
        })
      );
      setConvertedPlans(newConvertedPlans);
    };

    convertAndSetPlans();
  }, [i18n.language, basePlans]); 

  return convertedPlans;
};