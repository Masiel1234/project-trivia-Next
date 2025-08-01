"use client";

import { useRouter } from "next/navigation";
import { Form } from "@/components/Forms/Form";
import Background from "@/components/background/Background";
import LanguageSelector from "@/components/button/LanguageSelector";
const Login: React.FC = () => {
  const router = useRouter();
  const handleLogin = (data: { email: string; password: string }) => {
    if (data.email === "test@example.com" && data.password === "123") {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "user", email: data.email })
      );
      router.push("/home");
    } else {
      alert("Correo o contraseña incorrectos");
      router.push("/");
    }
  };
  return (
    <Background variant="home">
      <div className="h-screen w-screen flex items-center justify-center bg-transparent px-2">
        <div className="absolute top-6 right-6 z-10">
          <LanguageSelector />
        </div>
        <div className="w-full max-w-md">
          <Form mode="login" onSubmit={handleLogin} />
        </div>
      </div>
    </Background>
  );
};
export default Login;
