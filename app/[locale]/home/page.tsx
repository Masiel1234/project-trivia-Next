import {useTranslations} from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="p-4">
      <h1>{t('sign_in_button')}</h1>
      <p>{t('sign_up_button')}</p>
     <Link href="/home/category/isekai">..</Link>
    </div>
  );
}
