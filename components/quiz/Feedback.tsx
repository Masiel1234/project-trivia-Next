import { useTranslations } from "next-intl";
import type { Question } from "../../types/question/Question";

interface Props {
  question: Question;
  selectedOptionIndex: number | null;
  onNext: () => void;
}
const Feedback: React.FC<Props> = ({
  question,
  selectedOptionIndex,
  onNext,
}) => {
  const t = useTranslations();
  const isCorrect = selectedOptionIndex === question.correctAnswerIndex;

  return (
    <div
      className="mt-6 p-4 border-t border-gray-200"
      role="region"
      aria-label="Retroalimentación de la respuesta"
      aria-live="polite"
    >
      <p
        className={`text-lg font-medium mb-4 ${
          isCorrect ? "text-green-600" : "text-red-600"
        }`}
        role="alert"
      >
        {isCorrect
          ? t("quiz.correctFeedback")
          : `${t("quiz.incorrectFeedback")} ${t(
              question.options[question.correctAnswerIndex]
            )}`}
      </p>
      <button
        onClick={onNext}
        className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300"
        aria-label="Pasar a la siguiente pregunta"
      >
        {t("quiz.nextQuestion")}
      </button>
    </div>
  );
};
export default Feedback;
