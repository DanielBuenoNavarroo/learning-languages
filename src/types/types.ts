export type Due = {
  id: number;
  srsLevel: number;
  nextReview: number;
  correctStreak: number;
  wrongCount: number;
  lastSeen: number;
};

export type GermanWord = {
  id: number;
  word: string;
  plural: string;
  trans: string;
  type: "sustantivo" | "verbo" | "adjetivo" | string;
  level: "a1" | "a2" | "b1" | "b2" | "c1" | string;
};

export type WordState = Due & GermanWord;

type ProgressContextType = {
  progress: number;
  learnedToday: number;
  weeklyProgress: Record<string, number>;
  incrementProgress: () => Promise<void>;
  resetProgress: () => Promise<void>;
};
