"use client";
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
        <main
          role="main"
        >
          {children}
        </main>
        <Footer />
      </div>
    </LivesProvider>
  );
}
