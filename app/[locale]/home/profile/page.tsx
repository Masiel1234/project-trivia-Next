"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/utils/auth/supabaseBrowser";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [, setUsername] = useState("");
  const router = useRouter();
  const t = useTranslations('froms')

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabaseBrowser().auth.getUser();
      if (error || !data.user) {
        router.push("/login");
        return;
      }
      setUser(data.user);
      setUsername(data.user.user_metadata?.username ?? "");
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabaseBrowser().auth.signOut();
    router.replace("/login");
    router.refresh();
  };

  if (!user) return <p>{t('load')}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Perfil
      </h2>

      <p className="text-gray-600 mb-2">
        <strong>{t('email')}</strong> {user.email}
      </p>

      <div className="flex justify-between">

        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={handleLogout}
        >
         {t('button_close')}
        </button>
      </div>
    </div>
  );
}
