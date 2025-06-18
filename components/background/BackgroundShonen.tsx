import FondoShonen from "../../assets/shonen.jpg"
interface BackgroundShonenProps{
    children: React.ReactNode;
}
const BackgroundShonen: React.FC<BackgroundShonenProps> =({children}) => {
    return(
 <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoShonen})` }}
    >
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundShonen;