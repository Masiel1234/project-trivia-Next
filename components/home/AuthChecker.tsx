"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const t = useTranslations("home");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    } else {
      setChecking(false);
    }
  }, []);

  if (checking) {
    return (
      <main className="p-10 text-center">
        <p className="text-lg font-semibold text-gray-600">{t("checking_p")}</p>
      </main>
    );
  }

  return <>{children}</>;
};

export default AuthChecker;
