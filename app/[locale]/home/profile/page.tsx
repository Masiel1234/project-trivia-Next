'use client';

import { useUser } from '@/hooks/user/useUser';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import Button from '@/components/button/Buttons/Button';
import Link from 'next/link';
import { UserInfo } from '@/components/profile/UserInfo';

export default function ProfilePage() {
  const { user, logout } = useUser();
  const router = useRouter();
  const t = useTranslations('profile');

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{t('!user')}</h2>
        <Link href="/login" className="text-pink-600 underline hover:text-pink-800 transition">
          {t('go_to_login')}
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <Button variant="return" to="/home" />
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('profile')}</h1>
          <p className="text-gray-600">{t('information')}</p>
        </div>
        <UserInfo user={user} />
        <div className="flex flex-col sm:flex-row gap-4">
          <Button to="/home/profile/edit" variant="profile">
            <FaUserEdit className="text-blue-600" />
            <span>{t('edit_profile')}</span>
          </Button>

          <Button onClick={handleLogout} variant="profile">
            <FaSignOutAlt className="text-red-500" />
            <span className="sr-only">{t('closed_profile')}</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
