"use client"
import FondoHome from "@/public/images/background/home.png";

interface BackgroundHomeProps{
    children: React.ReactNode;
}
const BackgroundHome: React.FC<BackgroundHomeProps> =({children}) => {

  return(
 <div
      className="overflow-y-hidden w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoHome})` }}
    >
    <div className=" w-full min-h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundHome;