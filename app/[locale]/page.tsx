
import {useTranslations} from 'next-intl';
import Background from '@/components/background/Background';
import MainHeading from '@/components/heading/MainHeading';
import Button from '@/components/button/Button';
import LanguageSelector from '@/components/button/LanguageSelector';
import '@/app/globals.css'
export default function HomePage() {
  const t = useTranslations('index');
  return (
    <>
  <LanguageSelector/>
   <Background variant="index">
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <MainHeading title="Quiz Note"/>
      <div className="flex flex-col justify-between w-full max-w-md px-6">
      <Button name={t('sign_in_button')} to="/login" variant="primary" />
      <Button name={t('sign_up_button')} to="/register" variant="secondary"/>
      </div>
      </div>
    </Background>
    </>
  );
}