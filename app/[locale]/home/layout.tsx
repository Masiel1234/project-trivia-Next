"use client";
import Lives from "@/components/lives/Lives";
import Header from "@/components/layout/home/Header";
import Footer from "@/components/layout/home/Footer";
import { LivesProvider } from "@/components/lives/LivesContext";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LivesProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="mx-auto text-center w-full py-2">
          <Lives />
        </div>
        <main
          role="main"
          className="flex-grow px-4 sm:px-6 lg:px-8 py-6"
        >
          {children}
        </main>
        <Footer />
      </div>
    </LivesProvider>
  );
}
