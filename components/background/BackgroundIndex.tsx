"use client"
import FondoIndex from "@/public/images/background/index.png"

interface BackgroundIndexProps{
    children: React.ReactNode;
}
const BackgroundIndex: React.FC<BackgroundIndexProps> =({children}) => {
    return(
 <div
      className="overflow-y-hidden w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoIndex})` }}
    >
    <div className="bg-pink-300/30 w-full min-h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundIndex;