import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n ,t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const superLanguages = [
     { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'jp', label: '日本語' },
    {code: 'zh', label:'中文'},
  ]

  return (
    <div className='text-right p-4'>
   <label htmlFor='lenguage-select' className='fixed top-4 right-4 w-90 h-12  flex items-center justify-center text-amber-50 duration-300 ease-in-out'>
    {t('common.language_selector_label')}:
   </label>
   <select onChange={handleChange} value={i18n.language.split('-')[0]} id="lenguage-select"  className='fixed top-4 right-4 w-20 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out' aria-label={t('common.language_selector_label')}>
    {superLanguages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.label}
      </option>
    ))}
   </select>
    </div>
  );
};

export default LanguageSelector;
