import { useTranslation } from "react-i18next";
import type { Question } from "./Question";

interface Props{
    question: Question;
    selectedOptionIndex: number|null;
    onNext: ()=> void;
}
const Feedback:React.FC<Props> = ({ question, selectedOptionIndex,onNext}) => {
    const { t } = useTranslation();
    const isCorrect = selectedOptionIndex === question.correctAnswerIndex;

    return(
        <div className="mt-6 p-4 border-t border-gray-200">
      <p className={`text-lg font-medium mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
        {isCorrect
          ? t('quiz.correctFeedback')
          : `${t('quiz.incorrectFeedback')} ${t(question.options[question.correctAnswerIndex])}`}
      </p>
      <button
        onClick={onNext}
        className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300"
      >
        {t('quiz.nextQuestion')}
      </button>
    </div>
  );
};
export default Feedback;