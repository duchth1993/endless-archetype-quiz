import React, { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from '../types/quiz';
import { ChevronRight, Sparkles } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (optionIndex: number) => void;
  questionNumber: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  onAnswer,
  questionNumber 
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnimating) return;
    setSelectedOption(index);
    setIsAnimating(true);
    
    setTimeout(() => {
      onAnswer(index);
      setSelectedOption(null);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      {/* Question Card */}
      <div className="relative mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse-slow" />
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                Question {questionNumber}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 leading-relaxed">
                {question.question}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={isAnimating}
            className={`w-full group relative overflow-hidden rounded-xl transition-all duration-300 ${
              selectedOption === index
                ? 'scale-[1.02] shadow-2xl shadow-purple-500/30'
                : 'hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/20'
            }`}
          >
            {/* Background gradient on selection */}
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 transition-opacity duration-300 ${
              selectedOption === index ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Default background */}
            <div className={`absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 ${
              selectedOption === index ? 'opacity-0' : 'group-hover:bg-white/10 group-hover:border-purple-500/50'
            }`} />
            
            {/* Content */}
            <div className="relative p-5 flex items-center gap-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                selectedOption === index
                  ? 'bg-white text-purple-600'
                  : 'bg-white/10 text-white group-hover:bg-purple-500/30'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className={`flex-1 text-left text-lg transition-colors duration-300 ${
                selectedOption === index ? 'text-white font-medium' : 'text-white/80 group-hover:text-white'
              }`}>
                {option.text}
              </span>
              <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                selectedOption === index
                  ? 'text-white translate-x-1'
                  : 'text-white/40 group-hover:text-white/80 group-hover:translate-x-1'
              }`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
