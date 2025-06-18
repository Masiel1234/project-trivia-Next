"use client"
import { useTranslation } from 'next-i18next';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSelector: React.FC = () => {
  const { i18n ,t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname()
 
  const superLanguages = [
     { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'jp', label: '日本語' },
    {code: 'zh', label:'中文'},
  ];
  const currentLang = i18n?.language?.split?.('-')[0] || 'en';

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newLocale = e.target.value;
  if (!pathname) return;

  const segments = pathname.split('/');
  segments[1] = newLocale;
  const newPath = segments.join('/');

  router.push(newPath);
  i18n.changeLanguage(newLocale);
};

  return (
    <div className='text-right p-4'>
   <label htmlFor='lenguage-select' className='fixed top-4 right-4 w-90 h-12  flex items-center justify-center text-amber-50 duration-300 ease-in-out'>
    {t('lenguage.language_selector_label')}:
   </label>
   <select onChange={handleChange} value={currentLang} id="lenguage-select"  className='fixed top-4 right-4 w-20 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out' aria-label={t('lenguage.language_selector_label')}>
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
