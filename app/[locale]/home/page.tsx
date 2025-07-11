"use client";

import Background from "@/components/background/Background";
import MainHeading from "@/components/heading/MainHeading";
import { useTranslations } from "next-intl";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

const Index: React.FC = () => {
  const t = useTranslations("home");
  return (
    <main className="flex flex-col align-middle ">
      <Background variant="home">
        <MainHeading title="Quiz Note" />
      </Background>
     <section className="max-w-4xl mx-auto px-4 py-9 rounded-lg space-y-10 dark:text-black-100">
  <p className="text-base sm:text-lg leading-relaxed text-center py-3">
    {t("infomation_home_p1")} <br /> {t("infomation_home_p2")}
  </p>

  <ul className=" list-inside space-y-2 pl-4 text-sm sm:text-base">
    <li>
      <p>{t("information_li_p1")}</p>
    </li>
    <li>
      <p>{t("information_li_p2")}</p>
    </li>
    <li>
      <p>{t("information_li_p3")}</p>
    </li>
  </ul>

  <p className="text-base sm:text-lg text-center">
    {t("infomation_home_p3")}
  </p>

  <div className="flex justify-center">
    <Button name={t("button_go")} to="home/trivia" />
  </div>

</section>
     <section className="p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-white flex flex-col items-center gap-8">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-800 dark:text-pink-800 drop-shadow-md">
    {t("title_2")}
  </h2>

  <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
    <Link href="/blog" className="block max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-pink-200 transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          className="rounded-t-lg"
          src="/images/background/jesus_blog.png"
          width={500}
          height={500}
          alt={t('alt_img_1')}
        />
        <div className="p-5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-pink-800 mb-2">
            {t('articule_1_title')}
          </h3>
          <p className="text-black dark:text-black-300">
            {t("articule_1_information_p1")} {t("articule_1_information_p2")}{" "}
            {t("articule_1_information_p3")}
          </p>
        </div>
      </div>
    </Link>

    <Link href="/personajes" className="block max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-pink-200 transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          className="rounded-t-lg"
          src="/images/background/personajes.avif"
          width={500}
          height={500}
          alt={t('alt_img_2')}
        />
        <div className="p-5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-pink-800 mb-2">
            {t('articule_2_title')}
          </h3>
          <p className="text-black dark:text-black-300">
            {t("articule_2_information_p1")} {t("articule_2_information_p2")}
          </p>
        </div>
      </div>
    </Link>
  </div>
</section>

    </main>
  );
};
export default Index;
