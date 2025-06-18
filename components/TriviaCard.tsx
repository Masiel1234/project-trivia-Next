import { useTranslation } from 'react-i18next';

interface Props {
  pregunta: string;
  opciones: { [key: string]: string };
  onRespuesta: (opcion: string) => void;
}

const TriviaCard: React.FC<Props> = ({ pregunta, opciones, onRespuesta }) => {
    const { t } = useTranslation()
  return (
    
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-6 text-center">{pregunta}</h2>
      <div className="grid gap-4 ">
        {Object.entries(opciones).map(([letra, texto]) => (
          <button
            key={letra}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 cursor-pointer p-3 rounded-md transition-all duration-300"
            onClick={() => onRespuesta(letra)}
            title={t("buttonLeave.Leave_Game")}
          >
            {letra}. {texto}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TriviaCard;
