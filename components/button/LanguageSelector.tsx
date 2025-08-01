"use client";

import { useLocale } from "next-intl";
import { useState, useRef } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { IoLanguage } from "react-icons/io5";
import Image from "next/image";

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (code: string) => {
    setOpen(false);
    router.replace(pathname, { locale: code });
    buttonRef.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    code: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(code);
    }
  };

  const superLanguages = [
    { code: "es", label: "Español", img: "https://flagcdn.com/co.svg" },
    { code: "en", label: "English", img: "https://flagcdn.com/us.svg" },
    { code: "fr", label: "Français", img: "https://flagcdn.com/fr.svg" },
    { code: "jp", label: "日本語", img: "https://flagcdn.com/jp.svg" },
    { code: "zh", label: "中文", img: "https://flagcdn.com/cn.svg" },
  ];

  const currentLang = superLanguages.find((l) => l.code === locale);

  return (
    <div className="relative w-fit text-center font-semibold">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="flex items-center  cursor-pointer justify-center gap-2 from-pink-800 text-black px-4 py-3 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <IoLanguage className="hidden sm:block" />
        {currentLang && (
          <Image
            src={currentLang.img}
            alt={currentLang.code}
            width={20}
            height={20}
            className="rounded-sm"
          />
        )}
        <span className="hidden sm:inline">{currentLang?.label}</span>
      </button>

      {open && (
        <ul
          className="absolute cursor-pointer z-10 text-black mt-2 w-40 sm:w-48 bg-white border rounded-md shadow-lg overflow-hidden right-0"
          role="listbox"
        >
          {superLanguages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              tabIndex={0}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2 focus:bg-gray-100 outline-none"
              onClick={() => handleSelect(lang.code)}
              onKeyDown={(e) => handleKeyDown(e, lang.code)}
              aria-selected={lang.code === locale}
            >
              <Image
                src={lang.img}
                alt={lang.code}
                width={20}
                height={14}
                className="rounded-sm"
              />

              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
