import { useRouter } from "next/navigation";
import BackgroundHome from "@/components/background/BackgroundIndex"
import { Form } from "@/components/Forms/Form"

const Register: React.FC = () => {
  const router = useRouter();
  const handleRegister = (data: { email: string; password: string; name?: string }) => {

    if (data.email && data.name && data.password) {
     alert(`Bienvenido/a, ${data.name || 'usuario'}!`);
     router.push('/index') 
    }else{
      alert('Error');
    }
};
  return (
    <BackgroundHome>
<div className="">
  <Form mode="register" onSubmit={handleRegister}/>
</div>
      </BackgroundHome>
  )}
  export default Register
