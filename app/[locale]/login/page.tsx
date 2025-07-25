'use client'

import { useRouter } from "next/navigation";
import { Form } from "@/components/Forms/Form";
import Background from "@/components/background/Background";
const Login: React.FC = () => {
const router = useRouter()
  const handleLogin = (data: { email: string; password: string; }) => {
   if (data.email === 'test@example.com' && data.password === '123') {
    localStorage.setItem(
      'user',
      JSON.stringify({name: 'user', email:data.email})
    );
    router.push('/home')
    } else {
      alert('Correo o contraseña incorrectos')
      router.push('/');
    }
}
  return (
    <Background variant="home">
<div className="h-full  ">
 <Form mode="login" onSubmit={handleLogin}/>
</div>
    </Background>
    
  )}
  export default Login;