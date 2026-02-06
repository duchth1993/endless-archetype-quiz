import React from 'react';
import { Sparkles, ArrowRight, Shield, HeartHandshake, Eye, Hammer, Ghost } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

const archetypeIcons = [
  { icon: Shield, color: 'from-indigo-500 to-purple-600', name: 'Sentinel' },
  { icon: HeartHandshake, color: 'from-pink-500 to-rose-600', name: 'Weaver' },
  { icon: Eye, color: 'from-violet-500 to-fuchsia-600', name: 'Oracle' },
  { icon: Hammer, color: 'from-emerald-500 to-teal-600', name: 'Builder' },
  { icon: Ghost, color: 'from-slate-500 to-zinc-600', name: 'Ghost' },
];

export const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center animate-fade-in">
      {/* Hero Section */}
      <div className="relative mb-12">
        {/* Floating orbs background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        </div>
        
        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-white/80">Discover Your Role in the Endless Ecosystem</span>
        </div>
        
        {/* Title */}
        <h1 className="relative text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            What's Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Endless Archetype?
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="relative text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Every community needs different kinds of contributors. 
          Take this 5-question journey to discover where you naturally fit.
        </p>
      </div>
      
      {/* Archetype Preview */}
      <div className="mb-12">
        <p className="text-white/40 text-sm uppercase tracking-wider mb-6">Five Archetypes Await</p>
        <div className="flex flex-wrap justify-center gap-4">
          {archetypeIcons.map(({ icon: Icon, color, name }) => (
            <div 
              key={name}
              className="group relative"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      <button
        onClick={onStart}
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white text-lg font-bold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative">Begin Your Discovery</span>
        <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      {/* Time estimate */}
      <p className="mt-6 text-white/40 text-sm">
        ⏱️ Takes about 2 minutes
      </p>
      
      {/* Features */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Self-Discovery', desc: 'Understand your natural strengths and tendencies' },
          { title: 'Personalized Path', desc: 'Get tailored recommendations for contribution' },
          { title: 'Share & Connect', desc: 'Find others who share your archetype' },
        ].map((feature, i) => (
          <div 
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/60 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
