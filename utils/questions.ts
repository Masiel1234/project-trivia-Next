import type { Question } from "@/types/question/Question";

interface RawQuestion {
  question: string;
  options: string[];
  correct: number;
}

export const formatQuestions = (data: RawQuestion[]): Question[] => {
  return data.map((q, index) => ({
    id: index,
    question: q.question,
    options: q.options,
    correctAnswerIndex: q.correct,
  }));
};
