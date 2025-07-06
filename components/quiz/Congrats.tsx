import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props{
    onReturn: () => void;
}
const Congrats: React.FC<Props> = ({ onReturn}) => {
    const t = useTranslations('quiz');
    return(
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-black-700 mb-4">{t('congratulationsTitle')}</h2>
      <p className="text-xl text-gray-800 mb-6">{t('congratulationsMessage')}</p>
     <Link href="/home" passHref>
      <button
        onClick={onReturn}
        className="w-full px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
      >
        {t('backToHome')}
      </button>
      </Link>
    </div>
    );
};
export default Congrats;