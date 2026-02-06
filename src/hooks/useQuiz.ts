import { useState, useCallback } from 'react';
import { QuizState, ArchetypeKey } from '../types/quiz';
import { quizQuestions } from '../data/questions';

const initialScores: Record<ArchetypeKey, number> = {
  sentinel: 0,
  weaver: 0,
  oracle: 0,
  builder: 0,
  ghost: 0
};

const initialState: QuizState = {
  currentQuestion: 0,
  answers: [],
  scores: { ...initialScores },
  result: null,
  isComplete: false
};

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>(initialState);
  const [hasStarted, setHasStarted] = useState(false);

  const startQuiz = useCallback(() => {
    setHasStarted(true);
    setState(initialState);
  }, []);

  const answerQuestion = useCallback((optionIndex: number) => {
    setState(prev => {
      const question = quizQuestions[prev.currentQuestion];
      const selectedOption = question.options[optionIndex];
      
      // Update scores
      const newScores = { ...prev.scores };
      Object.entries(selectedOption.scores).forEach(([key, value]) => {
        newScores[key as ArchetypeKey] += value;
      });
      
      const newAnswers = [...prev.answers, optionIndex];
      const isLastQuestion = prev.currentQuestion >= quizQuestions.length - 1;
      
      if (isLastQuestion) {
        // Calculate result
        const result = Object.entries(newScores).reduce((a, b) => 
          b[1] > a[1] ? b : a
        )[0] as ArchetypeKey;
        
        return {
          ...prev,
          answers: newAnswers,
          scores: newScores,
          result,
          isComplete: true
        };
      }
      
      return {
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
        scores: newScores
      };
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setState(initialState);
    setHasStarted(false);
  }, []);

  const retakeQuiz = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    hasStarted,
    currentQuestion: quizQuestions[state.currentQuestion],
    totalQuestions: quizQuestions.length,
    startQuiz,
    answerQuestion,
    resetQuiz,
    retakeQuiz
  };
};
