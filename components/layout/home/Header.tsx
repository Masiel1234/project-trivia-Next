import { useTranslations } from "next-intl";
import LanguageSelector from "@/components/button/LanguageSelector";
import MenuButton from "@/components/button/MenuButton";
import ButtonCurrency from "@/components/button/ButtonCurrency";
import ButtonPerfil from "@/components/button/ProfileDropDown";

export default function Header() {
  const t = useTranslations('');
  return (
    <header
      role="banner"
      className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-white shadow-md"
    >
      <nav
        aria-label={t("a11y.home.Layout.header.nav")}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
      ><ButtonPerfil />
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          
          <LanguageSelector />
          <MenuButton
            title={t("home.category_title")}
            items={[
              { label: t("home.random_button"), to: "/home/trivia" },
              { label: "Isekai", to: "/home/category/isekai" },
              { label: "Seinen", to: "/home/category/seinen" },
              { label: "Shonen", to: "/home/category/shonen" },
              { label: "Shojo", to: "/home/category/shojo" },
              { label: "Spoko", to: "/home/category/sponko" },
            ]}
          />
          <ButtonCurrency name="" to="/home/currency" />
        </div>
      </nav>
    </header>
  );
}
