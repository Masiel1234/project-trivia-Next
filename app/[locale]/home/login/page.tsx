'use client'

import { useRouter } from "next/navigation";
import { Form } from "@/components/Forms/Form";
import BackgroundIndex from "@/components/background/BackgroundIndex";
const Login: React.FC = () => {
const router = useRouter()
  const handleLogin = (data: { email: string; password: string; }) => {
   if (data.email === 'test@example.com' && data.password === '123') {
      router.push('/home')
    } else {
      alert('Correo o contraseña incorrectos')
      router.push('/');
    }
}
  return (
    <BackgroundIndex>
<div>
 <Form mode="login" onSubmit={handleLogin}/>
</div>
    </BackgroundIndex>
    
  )}
  export default Login;