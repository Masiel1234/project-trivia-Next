'use client'
import { useState, useEffect } from "react";
import { useLocale } from 'next-intl';
import { getDisplayCurrencyCode, convertCurrency } from "@/utils/currencyUtils";

interface PlanData {
  name: string;
  price: number;
  originalCurrency: string;
}

export const useCurrencyConversion = (basePlans: PlanData[]) => {
  const locale = useLocale();
  const [convertedPlans, setConvertedPlans] = useState<PlanData[]>([]);

  useEffect(() => {
    const targetDisplayCurrencyCode = getDisplayCurrencyCode(locale);
    const convertAndSetPlans = async () => {
      const newConvertedPlans = await Promise.all(
        basePlans.map(async (plan) => {
          if (plan.originalCurrency === targetDisplayCurrencyCode) {
            return {...plan};
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
  }, [basePlans,locale]); 

  return convertedPlans;
};