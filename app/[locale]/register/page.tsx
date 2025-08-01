"use client";
import { useRouter } from "next/navigation";
import Background from "@/components/background/Background";
import LanguageSelector from "@/components/button/LanguageSelector";
import { Form } from "@/components/Forms/Form";
import { useLocale } from "next-intl";
import "@/app/globals.css";

const Register: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const handleRegister = (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    if (data.email && data.name && data.password) {
      alert(`Bienvenido/a, ${data.name || "usuario"}!`);
      router.push(`/${locale}/home`);
    } else {
      alert("Error");
    }
  };
  return (
    <>
      <Background variant="home">
        <div className="absolute top-6 right-6 z-10">
          <LanguageSelector />
        </div>
        <div className="h-screen w-screen flex items-center justify-center bg-transparent px-2">
          <div className="w-full max-w-md">
            <Form mode="register" onSubmit={handleRegister} />
          </div>
        </div>
      </Background>
    </>
  );
};

export default Register;
