export type ArchetypeKey = 'sentinel' | 'weaver' | 'oracle' | 'builder' | 'ghost';

export interface Archetype {
  key: ArchetypeKey;
  name: string;
  title: string;
  description: string;
  coreTrait: string;
  color: string;
  gradient: string;
  icon: string;
  actions: string[];
  quote: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  scores: Record<ArchetypeKey, number>;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  scores: Record<ArchetypeKey, number>;
  result: ArchetypeKey | null;
  isComplete: boolean;
}
