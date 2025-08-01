import { User } from '@/hooks/user/useUser';
import { useTranslations } from 'next-intl';

export const UserInfo = ({ user }: { user: User }) => {
  const t = useTranslations('profile');

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">{t('name')}</span> {user.name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">{t('email')}</span> {user.email}
      </p>
    </div>
  );
};
