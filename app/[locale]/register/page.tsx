'use client'
import { useRouter } from "next/navigation";
import Background from "@/components/background/Background";
import LanguageSelector from "@/components/button/LanguageSelector"
import { Form } from "@/components/Forms/Form"
import { useLocale } from "next-intl";
import '@/app/globals.css'

const Register: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const handleRegister = (data: { email: string; password: string; name?: string }) => {

    if (data.email && data.name && data.password) {
     alert(`Bienvenido/a, ${data.name || 'usuario'}!`);
     router.push(`/${locale}/home`);
    }else{
      alert('Error');
    }
};
  return (<>
    <LanguageSelector/>
    <Background variant="home">
<div className="">
  <Form mode="register" onSubmit={handleRegister}/>
</div>
      </Background>
      </>
  )}

  export default Register
