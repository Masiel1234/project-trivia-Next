"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session) {
        router.push("/login");
      } else {
        setChecking(false);
      }
    };
    checkSession();
  }, []);

  if (checking) {
    return <p className="text-center mt-10 text-gray-600">Verificando sesión...</p>;
  }

  return <>{children}</>;
};

export default AuthChecker;
