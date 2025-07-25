import { useTranslations } from "next-intl"
export default function Footer(){
  const t = useTranslations('home');
  return(
    <footer className="p-4 text-center h-full text-gray-500">
        {t('footer')}
      </footer>
  ) 
}