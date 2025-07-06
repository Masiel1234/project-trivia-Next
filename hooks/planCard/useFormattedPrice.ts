'use client'
import { useLocale } from "next-intl";
import { getDisplayCurrencyCode } from "@/utils/currencyUtils";

export const useFormattedPrice = (price: number) => {
  const Locale = useLocale();
  const currencyCodeToDisplay = getDisplayCurrencyCode(Locale);

  const formattedPrice = new Intl.NumberFormat(Locale, {
    style: "currency",
    currency: currencyCodeToDisplay,
    minimumFractionDigits: currencyCodeToDisplay === "JPY" ? 0 : 2,
    maximumFractionDigits: currencyCodeToDisplay === "JPY" ? 0 : 2,
  }).format(price);

  return formattedPrice;
};