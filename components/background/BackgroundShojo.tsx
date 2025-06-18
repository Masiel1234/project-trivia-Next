import FondoShojon from "../../assets/shojo.jpg"
interface BackgroundShojoProps{
    children: React.ReactNode;
}
const BackgroundShojo: React.FC<BackgroundShojoProps> =({children}) => {
    return(
 <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoShojon})` }}
    >
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundShojo;