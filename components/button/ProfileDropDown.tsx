"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "./Buttons/Button";

interface UserData {
  name: string;
  email: string;
}

export default function ProfileDropdown() {
  const router = useRouter();
  const t = useTranslations("profile");
  const [, setUser] = useState<UserData | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="focus:border-pink-600 border-opacity-100 rounded-full cursor-pointer border-2 border-pink-300 w-12 h-12"
        >
          <Image
            alt="photo profile"
            src="/icons/profile.png"
            width={48}
            height={48}
            className="w-full h-full"
          />
        </button>

        {open && (
          <div className="absolute text-black left-0 mt-2 w-40 bg-white rounded-md shadow-lg">
            <Button
               to="/home/profile"
               variant="profile"
            >
              <FaUser className="text-blue-300" />  
              <p>{t("view_profile")}</p>
            </Button>
            <Button
              onClick={handleLogout}
              variant="profile"
            >
              <FaSignOutAlt className="text-red-500" />
              <p>{t("closed_profile")}</p>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
