import React from 'react';

interface QuizProgressProps {
  current: number;
  total: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({ current, total }) => {
  const progress = ((current) / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-purple-300">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm font-medium text-purple-300">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-500 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="flex justify-between mt-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i < current
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                : i === current
                ? 'bg-white/20 text-white border-2 border-purple-400 animate-pulse'
                : 'bg-white/5 text-white/40'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
