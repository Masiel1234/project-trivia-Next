import type { Metadata } from "next";
import "./globals.css";
import { languages } from "@/i18n/settings";
import { dir } from 'i18next';
export const metadata: Metadata = {
  title: "Anime Trivia",
  description: "A multilingual anime trivia game built with Next.js",
};

 export async function generateStaticParams() {
  return languages.map((lng) => ({locale:lng}));
 }
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params:{locale:string};
}>) {
  return (
    <html lang={params.locale} dir={dir(params.locale)}>
      <body>
        {children}
      </body>
    </html>
  );
}
