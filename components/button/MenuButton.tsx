'use client'
import { useState } from "react";
import BackgroundHome from "@/components/background/BackgroundHome";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

interface MenuItem {
  label: string;
  to: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}

const MenuButton: React.FC<MenuProps> = ({ title, items }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = (to: string) => {
    setIsDropdownOpen(false);
    setPendingRoute(to);
    setShowModal(true);
  };

  const confirmNavigation = () => {
    if (pendingRoute) {
      router.push(pendingRoute);
      setPendingRoute(null);
      setShowModal(false);
    }
  };

  const cancelNavigation = () => {
    setPendingRoute(null);
    setShowModal(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative px-6 py-4 text-center font-bold w-full sm:w-auto">
      <button
        onClick={toggleDropdown}
        className="bg-pink-400 cursor-pointer text-black text-base sm:text-xl px-6 sm:px-10 py-2 rounded-full w-full sm:w-auto"
      >
        {title}
      </button>
      {isDropdownOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 sm:w-52 bg-white rounded-lg shadow-lg z-50 overflow-visible">
          {items.map((item) => (
            <button
              key={item.to}
              onClick={() => handleMenuClick(item.to)}
              className="block w-full px-4 py-2 hover:bg-blue-100 text-black text-sm sm:text-base"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      <BackgroundHome>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-pink-300/70 z-[9999] p-8">
            <div className="bg-white rounded-lg p-2 w-full max-w-sm text-center shadow-lg">
              <h2 className="text-lg font-semibold mb-4">
                {t("menuButton.h2title")}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={confirmNavigation}
                  className="px-2 py-2 bg-pink-400 text-white rounded hover:bg-pink-600 w-full sm:w-auto"
                >
                  {t("menuButton.confirmButton")}
                </button>
                <button
                  onClick={cancelNavigation}
                  className="px-2 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full sm:w-auto"
                >
                  {t("menuButton.cancelButton")}
                </button>
              </div>
            </div>
          </div>
        )}
      </BackgroundHome>
    </div>
  );
};

export default MenuButton;