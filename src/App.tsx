import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import { QuizIntro } from './components/QuizIntro';
import { QuizProgress } from './components/QuizProgress';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResult } from './components/QuizResult';
import { Infinity } from 'lucide-react';

function App() {
  const {
    state,
    hasStarted,
    currentQuestion,
    totalQuestions,
    startQuiz,
    answerQuestion,
    retakeQuiz
  } = useQuiz();

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>
      
      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Infinity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Endless</span>
          </div>
          
          {hasStarted && !state.isComplete && (
            <button
              onClick={retakeQuiz}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Start Over
            </button>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 px-4 py-8 md:py-16">
        {!hasStarted ? (
          <QuizIntro onStart={startQuiz} />
        ) : state.isComplete && state.result ? (
          <QuizResult 
            archetype={state.result} 
            scores={state.scores}
            onRetake={retakeQuiz}
          />
        ) : (
          <div>
            <QuizProgress 
              current={state.currentQuestion} 
              total={totalQuestions} 
            />
            <QuizQuestion
              question={currentQuestion}
              questionNumber={state.currentQuestion + 1}
              onAnswer={answerQuestion}
            />
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            Built for the Endless community with 💜
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
