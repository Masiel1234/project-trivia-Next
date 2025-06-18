import { useTranslation } from "react-i18next";
import { getDisplayCurrencyCode } from "../../utils/currencyUtils";

export const useFormattedPrice = (price: number) => {
  const { i18n } = useTranslation();
  const currencyCodeToDisplay = getDisplayCurrencyCode(i18n.language);

  const formattedPrice = new Intl.NumberFormat(i18n.language, {
    style: "currency",
    currency: currencyCodeToDisplay,
    minimumFractionDigits: currencyCodeToDisplay === "JPY" ? 0 : 2,
    maximumFractionDigits: currencyCodeToDisplay === "JPY" ? 0 : 2,
  }).format(price);

  return formattedPrice;
};