'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

const LanguageSelector: React.FC = () => {
  const t = useTranslations('');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  const superLanguages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'jp', label: '日本語' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3 text-black">
      <div className="relative inline-block">
        <label htmlFor="language-select" className="sr-only">
          {t('common.language_selector_label') || 'Seleccionar idioma'}
        </label>
        <div className="flex items-center gap-2 px-4 py-3 rounded-3xl shadow-md hover:shadow-lg transition duration-300">
          <span className="hidden sm:inline text-sm  sm:text-base font-medium">
            {t('common.language_selector_label') || 'Idioma'}
          </span>
          <svg
            className="w-3 h-4 text-gray-800 dark:text-black transition-transform duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6 6-6"
            />
          </svg>
          <select
            onChange={handleChange}
            value={locale}
            id="language-select"
            
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          >
            {superLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
