"use client";

import Background from "@/components/background/Background";
import LanguageSelector from "@/components/button/LanguageSelector";
import InputField from "@/components/input/InputField";
import Button from "@/components/button/Buttons/Button";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/utils/auth/supabaseBrowser';
import { useTranslations } from "next-intl";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const t = useTranslations('froms')

  const handleLogin = async () => {
    const { data, error } = await supabaseBrowser().auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else if (data.session) {
      setTimeout(() => {
        router.push('/home');
      }, 200);
    }
  };

  return (
    <Background variant="home">
      <div className="absolute top-6 left-6 z-10">
        <Button variant="return" to="/" />
      </div>
      <div className="absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>
      <div className="flex justify-center items-center h-screen px-4">
        <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{t('title_login')}</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <InputField
              type="email"
              name={t('email')}
              placeholder={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <InputField
              type="password"
              name={t('password')}
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
            >
              {t('button_login')}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {t('text_login')}
          <Button variant="link" to="/register" name={t("link_go_register")} />
          </p>
        </div>
      </div>
    </Background>
  );
};

export default Login;
