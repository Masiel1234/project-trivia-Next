"use client";

import Background from "@/components/background/Background";
import MainHeading from "@/components/heading/MainHeading";
import AuthChecker from "@/components/home/AuthChecker";
import HomeInfoSection from "@/components/home/HomeInfoSection";
import BlogSection from "@/components/home/BlogSection";

const Index: React.FC = () => {
  return (
    <AuthChecker>
      <main role="main" className="flex flex-col items-center p-4">
        <Background variant="home">
          <MainHeading title="Quiz Note" />
        </Background>
        <HomeInfoSection />
        <BlogSection />
      </main>
    </AuthChecker>
  );
};

export default Index;
