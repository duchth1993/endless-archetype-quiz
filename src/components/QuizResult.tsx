import React, { useState, useRef } from 'react';
import { archetypes } from '../data/archetypes';
import { ArchetypeKey } from '../types/quiz';
import { NessyMascot } from './NessyMascot';
import { 
  Share2, 
  Twitter, 
  Copy, 
  Check, 
  RefreshCw, 
  ChevronRight,
  Sparkles,
  Download
} from 'lucide-react';

interface QuizResultProps {
  archetype: ArchetypeKey;
  scores: Record<ArchetypeKey, number>;
  onRetake: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ archetype, scores, onRetake }) => {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);
  
  const result = archetypes[archetype];
  const maxScore = Math.max(...Object.values(scores));
  
  const shareText = `I'm a ${result.name} — ${result.title}! 🌟\n\nWhat's your Endless archetype?\n\n#EndlessArchetype #Web3`;
  const shareUrl = window.location.href;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      {/* Result Card */}
      <div ref={resultCardRef} className="relative mb-8">
        <div className={`absolute -inset-2 bg-gradient-to-r ${result.gradient} rounded-3xl blur-xl opacity-40 animate-pulse-slow`} />
        
        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
          {/* Header pattern */}
          <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} opacity-20`} />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          <div className="relative p-8 md:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${result.gradient} text-white text-sm font-semibold shadow-lg`}>
                <Sparkles className="w-4 h-4" />
                Your Endless Archetype
              </div>
            </div>
            
            {/* Mascot */}
            <div className="flex justify-center mb-8">
              <NessyMascot archetype={archetype} size="lg" animated />
            </div>
            
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-3`}>
                {result.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                {result.title}
              </p>
            </div>
            
            {/* Quote */}
            <div className="max-w-2xl mx-auto mb-8">
              <blockquote className="text-center text-lg md:text-xl text-white/60 italic">
                {result.quote}
              </blockquote>
            </div>
            
            {/* Description */}
            <div className="max-w-2xl mx-auto mb-10">
              <p className="text-center text-white/80 text-lg leading-relaxed">
                {result.description}
              </p>
            </div>
            
            {/* Core Trait Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white/60 text-sm uppercase tracking-wider">Core Trait</span>
                <span className={`text-lg font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                  {result.coreTrait}
                </span>
              </div>
            </div>
            
            {/* Score Breakdown */}
            <div className="max-w-xl mx-auto mb-10">
              <h3 className="text-white/60 text-sm uppercase tracking-wider text-center mb-4">
                Your Archetype Affinity
              </h3>
              <div className="space-y-3">
                {Object.entries(scores)
                  .sort(([, a], [, b]) => b - a)
                  .map(([key, score]) => {
                    const arch = archetypes[key as ArchetypeKey];
                    const percentage = (score / maxScore) * 100;
                    return (
                      <div key={key} className="flex items-center gap-3">
                        <span className={`w-20 text-sm font-medium ${key === archetype ? 'text-white' : 'text-white/50'}`}>
                          {arch.name}
                        </span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${
                              key === archetype 
                                ? `bg-gradient-to-r ${arch.gradient}` 
                                : 'bg-white/30'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className={`w-8 text-sm text-right ${key === archetype ? 'text-white font-bold' : 'text-white/50'}`}>
                          {score}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            
            {/* Recommended Actions */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-white text-xl font-bold text-center mb-6">
                Your Path Forward
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {result.actions.map((action, index) => (
                  <div 
                    key={index}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${result.gradient} flex items-center justify-center`}>
                        <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Share Button */}
        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${result.gradient} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
          >
            <Share2 className="w-5 h-5" />
            Share Your Result
          </button>
          
          {showShareMenu && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-800 rounded-xl border border-white/10 shadow-2xl p-2 min-w-[200px] animate-fade-in z-10">
              <button
                onClick={handleTwitterShare}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
                Share on X
              </button>
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-white/60" />
                    Copy to Clipboard
                  </>
                )}
              </button>
            </div>
          )}
        </div>
        
        {/* Retake Button */}
        <button
          onClick={onRetake}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          <RefreshCw className="w-5 h-5" />
          Retake Quiz
        </button>
      </div>
      
      {/* Shareable Card Preview */}
      <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="text-white/60 text-sm uppercase tracking-wider text-center mb-4">
          Shareable Card
        </h3>
        <div className={`max-w-md mx-auto p-6 rounded-xl bg-gradient-to-br ${result.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }} />
          <div className="relative text-center">
            <div className="flex justify-center mb-4">
              <NessyMascot archetype={archetype} size="sm" animated={false} />
            </div>
            <p className="text-white/80 text-sm mb-1">I'm a</p>
            <h4 className="text-white text-2xl font-black mb-1">{result.name}</h4>
            <p className="text-white/80 text-sm mb-4">{result.title}</p>
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
              #EndlessArchetype
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
