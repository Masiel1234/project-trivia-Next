'use client'
import Button from "../components/button/Button"; 
import MainHeading from "../components/heading/MainHeading";
import BackgroundHome from "../components/background/BackgroundHome";
import LanguageSelector from "@/components/button/LanguageSelector";


const Home: React.FC = () => {

  return (
    <BackgroundHome>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <MainHeading title="Quiz Note"/>
      <div className="flex flex-col justify-between w-full max-w-md px-6">
      <Button name="Sign in" to="/login" variant="primary" />
      <Button name="Sign up" to="/home" variant="secondary"/>
    <LanguageSelector/>
      </div>
      </div>
    </BackgroundHome>
  );
};

export default Home;