"use client";

import Background from "@/components/background/Background";
import MainHeading from "@/components/heading/MainHeading";
import AuthChecker from "@/components/home/AuthChecker";
import HomeInfoSection from "@/components/home/HomeInfoSection";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {
  return (
    <AuthChecker>
      <main role="main">
        <Background variant="home">
          <MainHeading title="Quiz Note" />
        </Background>
        <HomeInfoSection />
        <BlogSection />
      </main>
    </AuthChecker>
  );
};


