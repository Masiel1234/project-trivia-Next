import FondoSeinen from "../../assets/seinen.jpg"
interface BackgroundSeinenProps{
    children: React.ReactNode;
}
const BackgroundSeinen: React.FC<BackgroundSeinenProps> =({children}) => {
    return(
 <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoSeinen})` }}
    >
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundSeinen;