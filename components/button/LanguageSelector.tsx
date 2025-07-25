"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { IoLanguage } from "react-icons/io5";

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
const [open, setOpen] = useState(false);


  const handleSelect = (code: string) => {
    setOpen(false);
    router.replace(pathname, { locale: code });
  };
  const superLanguages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "jp", label: "日本語" },
    { code: "zh", label: "中文" },
  ];


  const currentLang = superLanguages.find((l) => l.code === locale);
  return (
     <div className="relative w-fit text-center font-semibold">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 from-pink-500 text-black px-4 py-3 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <IoLanguage />
        {currentLang?.label}
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-black border border-gray-200 rounded-md shadow-lg">
          {superLanguages.map((lang) => (
            <li
              key={lang.code}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
