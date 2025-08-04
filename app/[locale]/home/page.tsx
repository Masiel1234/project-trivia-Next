"use client";

import Background from "@/components/background/Background";
import MainHeading from "@/components/heading/MainHeading";

import HomeInfoSection from "@/components/home/HomeInfoSection";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {
  return (
        <main role="main">
        <Background variant="home">
          <MainHeading title="Quiz Note" />
        </Background>
        <HomeInfoSection />
        <BlogSection />
      </main>
  );
};


