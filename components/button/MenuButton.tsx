"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations();
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
    }else{
      
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
    <div className="relative w-fit text-center font-semibold  ">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2 from-pink-500 text-black px-4 py-3 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <span className="sm:inline text-sm sm:text-base font-medium">
          {title}
        </span> 
        <svg
          className="w-3 h-4 text-gray-800 dark:text-black transition-transform duration-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-44 sm:w-52 bg-white rounded-xl shadow-lg z-50 py-2">
          {items.map((item) => (
            <button
              key={item.to}
              onClick={() => handleMenuClick(item.to)}
              className="block w-full text-center px-4 py-2 text-sm hover:bg-pink-100 transition-colors text-gray-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-300/70 z-[9999] p-8">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-lg">
            <h2 className="text- font-semibold mb-4">
              {t("menuButton.h2title")}
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={confirmNavigation}
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full w-full sm:w-auto transition"
              >
                {t("menuButton.confirmButton")}
              </button>
              <button
                onClick={cancelNavigation}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-full w-full sm:w-auto transition"
              >
                {t("menuButton.cancelButton")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
