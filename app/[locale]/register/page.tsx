"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Background from "@/components/background/Background";
import Button from '@/components/button/Buttons/Button';
import { supabaseBrowser } from '@/utils/auth/supabaseBrowser';
import LanguageSelector from "@/components/button/LanguageSelector";
import InputField from "@/components/input/InputField";
import { useTranslations } from 'next-intl';
const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const t = useTranslations('froms')


  const handleRegister = async () => {
    const { error } = await supabaseBrowser().auth.signUp({ email, password });
    
    if (error) alert(error.message);
    else {
      router.push('/login');
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{t("title_register")}</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
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
              {t('button_register')}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {t('text_register')}
            <span
              className="text-blue-400 hover:underline cursor-pointer"
              onClick={() => router.push('/login')}
            >
             {t("link_go_login")}
            </span>
          </p>
        </div>
      </div>
    </Background>
  );
};

export default Register;
