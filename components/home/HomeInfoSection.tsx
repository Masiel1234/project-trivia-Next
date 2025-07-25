'use client'
import Button from "../button/Buttons/Button";
import { useTranslations } from "next-intl";
const HomeInfoSection = () => {
    const t = useTranslations("home");
    return(
  <section className="max-w-4xl mx-auto px-4 py-9 rounded-lg space-y-10 dark:text-black-100">
    <p className="text-base sm:text-lg leading-relaxed text-center py-3">
      {t("infomation_home_p1")} <br /> {t("infomation_home_p2")}
    </p>

    <ul className="list-inside space-y-2 pl-4 text-sm sm:text-base">
      <li><p>{t("information_li_p1")}</p></li>
      <li><p>{t("information_li_p2")}</p></li>
      <li><p>{t("information_li_p3")}</p></li>
    </ul>

    <p className="text-base sm:text-lg text-center">{t("infomation_home_p3")}</p>

    <div className="flex justify-center">
      <Button name={t("button_go")} to="home/trivia" />
    </div>
  </section>)
    };

export default HomeInfoSection;
