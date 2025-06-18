'use client'

import FondoIsekai from "@/public/images/background/index.png"
interface BackgroundIsekaiProps{
    children: React.ReactNode;
}
const BackgroundIsekai: React.FC<BackgroundIsekaiProps> =({children}) => {
    return(
 <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoIsekai})` }}
    >
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundIsekai;