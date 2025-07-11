'use client';
import ButtonCurrency from "@/components/button/ButtonCurrency";
import LanguageSelector from "@/components/button/LanguageSelector";
import MenuButton from "@/components/button/MenuButton";
import Lives from "@/components/lives/Lives"
import { LivesProvider } from '@/components/lives/LivesContext';
import { useTranslations } from 'next-intl'
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const t = useTranslations();
  return ( 
  <LivesProvider>
    <div>
   
      <header className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
         <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <LanguageSelector/>
        <MenuButton
        title={t("home.category_title")}
        items={[
          { label: t("home.random_button"), to: "/home/trivia"},
          { label: "Isekai", to: "/home/category/isekai"},
          { label: "Seinen", to: "/home/category/seinen"},
          { label: "Shonen", to: "/home/category/shonen" },
          { label: "Shojo", to: "/home/category/shojo" },
          { label: "Spoko", to: "/home/category/sponko" },
        ]}
      />
        <ButtonCurrency name="" to="/home/currency"/>
        </div>
        </nav>
      </header>
<div className="mx-auto text-center w-full py-2">
    <Lives />
        </div>
      <main>
        {children}
       </main>

      <footer className="p-4 text-center h-full text-gray-500">
        Trivia De Anime Pruebas
      </footer>  
    
    </div>  
    </LivesProvider>
  );
}
