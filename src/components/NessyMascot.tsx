import React from 'react';
import { Shield, HeartHandshake, Eye, Hammer, Ghost } from 'lucide-react';
import { ArchetypeKey } from '../types/quiz';

interface NessyMascotProps {
  archetype: ArchetypeKey;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const archetypeConfig = {
  sentinel: {
    icon: Shield,
    bgGradient: 'from-indigo-600 to-purple-700',
    accentColor: 'text-indigo-300',
    glowColor: 'shadow-indigo-500/50',
    eyeColor: '#818cf8'
  },
  weaver: {
    icon: HeartHandshake,
    bgGradient: 'from-pink-500 to-rose-600',
    accentColor: 'text-pink-300',
    glowColor: 'shadow-pink-500/50',
    eyeColor: '#f472b6'
  },
  oracle: {
    icon: Eye,
    bgGradient: 'from-violet-600 to-fuchsia-600',
    accentColor: 'text-violet-300',
    glowColor: 'shadow-violet-500/50',
    eyeColor: '#a78bfa'
  },
  builder: {
    icon: Hammer,
    bgGradient: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-300',
    glowColor: 'shadow-emerald-500/50',
    eyeColor: '#34d399'
  },
  ghost: {
    icon: Ghost,
    bgGradient: 'from-slate-600 to-zinc-700',
    accentColor: 'text-slate-300',
    glowColor: 'shadow-slate-500/50',
    eyeColor: '#94a3b8'
  }
};

const sizeConfig = {
  sm: { container: 'w-24 h-24', icon: 20 },
  md: { container: 'w-40 h-40', icon: 32 },
  lg: { container: 'w-56 h-56', icon: 48 }
};

export const NessyMascot: React.FC<NessyMascotProps> = ({ 
  archetype, 
  size = 'md',
  animated = true 
}) => {
  const config = archetypeConfig[archetype];
  const sizeStyles = sizeConfig[size];
  const IconComponent = config.icon;

  return (
    <div className={`relative ${sizeStyles.container} ${animated ? 'animate-float' : ''}`}>
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} rounded-full blur-xl opacity-50 ${animated ? 'animate-pulse-slow' : ''}`} />
      
      {/* Main body */}
      <div className={`relative ${sizeStyles.container} bg-gradient-to-br ${config.bgGradient} rounded-full shadow-2xl ${config.glowColor} flex items-center justify-center overflow-hidden`}>
        {/* Inner pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/30 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-white/20 rounded-full" />
        </div>
        
        {/* Eyes */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex gap-3">
          <div className="relative">
            <div 
              className={`${size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-4 h-4' : 'w-3 h-3'} rounded-full bg-white shadow-inner`}
              style={{ boxShadow: `inset 0 0 10px ${config.eyeColor}` }}
            >
              <div 
                className={`absolute ${size === 'lg' ? 'w-3 h-3' : size === 'md' ? 'w-2 h-2' : 'w-1.5 h-1.5'} rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${animated ? 'animate-look' : ''}`}
                style={{ backgroundColor: config.eyeColor }}
              />
            </div>
          </div>
          <div className="relative">
            <div 
              className={`${size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-4 h-4' : 'w-3 h-3'} rounded-full bg-white shadow-inner`}
              style={{ boxShadow: `inset 0 0 10px ${config.eyeColor}` }}
            >
              <div 
                className={`absolute ${size === 'lg' ? 'w-3 h-3' : size === 'md' ? 'w-2 h-2' : 'w-1.5 h-1.5'} rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${animated ? 'animate-look' : ''}`}
                style={{ backgroundColor: config.eyeColor }}
              />
            </div>
          </div>
        </div>
        
        {/* Archetype icon badge */}
        <div className={`absolute bottom-2 right-2 ${size === 'lg' ? 'p-2' : 'p-1'} bg-white/20 backdrop-blur-sm rounded-full`}>
          <IconComponent size={sizeStyles.icon / 2} className="text-white" />
        </div>
        
        {/* Sparkles */}
        {animated && (
          <>
            <div className="absolute top-2 right-4 w-1 h-1 bg-white rounded-full animate-sparkle" />
            <div className="absolute top-6 left-3 w-1.5 h-1.5 bg-white rounded-full animate-sparkle-delayed" />
            <div className="absolute bottom-4 left-6 w-1 h-1 bg-white rounded-full animate-sparkle" />
          </>
        )}
      </div>
    </div>
  );
};
