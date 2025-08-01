import { useTranslations } from "next-intl";
import Background from "@/components/background/Background";
import MainHeading from "@/components/heading/MainHeading";
import Button from "@/components/button/Buttons/Button";
import LanguageSelector from "@/components/button/LanguageSelector";
import "@/app/globals.css";
import Image from "next/image";

export default function Index() {
  const t = useTranslations("index");

  return (
    <Background variant="index">
      <div className="absolute top-2 right-2 lg:top-6 lg:right-6 z-10">
          <div className="relative">
            <LanguageSelector />
          </div>
        </div>
      <div className="min-h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-10">
        <main className="w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl min-h-[80vh] bg-white">
          <section className="bg-amber-50 w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center gap-4 sm:gap-6 text-center">
            <h2 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide">
              {t("welcome")}
            </h2>
            <MainHeading title="Quiz Note" />
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              {t("text_welcome")}
            </p>
            <Image
              alt={t("gif_alt")}
              width={150}
              height={150}
              src="/images/gif.gif"
              className="w-[100px] sm:w-[150px] h-auto"
            />
          </section>
          <section className="bg-pink-50 w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center gap-4 sm:gap-6 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-800">
              {t("title_buttons")}
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
              <Button
                name={t("sign_in_button")}
                to="/login"
                variant="primary"
              />
              <Button
                name={t("sign_up_button")}
                to="/register"
                variant="secondary"
              />
            </div>
          </section>
        </main>
      </div>
    </Background>
  );
}
