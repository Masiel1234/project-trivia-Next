import FondoSpokon from "../../assets/spokon.jpg"
interface BackgroundSpokonProps{
    children: React.ReactNode;
}
const BackgroundSpokon: React.FC<BackgroundSpokonProps> =({children}) => {
    return(
 <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoSpokon})` }}
    >
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundSpokon;