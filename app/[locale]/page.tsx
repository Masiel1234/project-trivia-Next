import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import LanguageSelector from '@/components/button/LanguageSelector';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/home">{t('about')}</Link>
      <LanguageSelector/>
    </div>
  );
}