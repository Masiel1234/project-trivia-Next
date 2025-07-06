import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface AbandonQuizButtonProps {
  message?: string; 
  confirmButtonText?: string;
  cancelButtonText?: string;
  title?: string;
}

const ButtonLeave: React.FC<AbandonQuizButtonProps> = () => {
  const  t  = useTranslations('buttonLeave');
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleAbandon = () => {
    setShowModal(true);
  };
  const cancelAbandon = () => {
    setShowModal(false);
  };


  return (
    <>
      <button
       onClick={handleAbandon}
        className="fixed bottom-20 left-4 w-40 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out"
      >
       {t('title')}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-blue-100/70 bg-opacity-100 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <p className="text-lg font-semibold text-black mb-6 text-center">{t('message')}</p>
            <div className="flex justify-around space-x-4">
              <Link href="/home" passHref>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              >
                {t('confirmButtonText')}
              </button>
              </Link>
              <button
                onClick={cancelAbandon}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
              >
                {t('cancelButtonText')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonLeave;