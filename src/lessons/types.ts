// Shared shape for every lesson. Teaching content lives here as data
// (not in messages/fi.json or en.json) per Phase 10.2A's architecture
// decision: generic UI labels (like "Vocabulary" or "Mark complete")
// go through next-intl; the actual bilingual/trilingual teaching
// content is lesson data, because forcing every example sentence into
// the global translation files would make them unmanageable as the
// curriculum grows.

export type TriLingualText = {
  fi: string;
  en: string;
  bn?: string;
};

export type PronounRow = {
  fi: string;
  en: string;
  bn: string;
};

export type Example = {
  fi: string;
  bn: string;
  en: string;
};

export type VocabItem = {
  fi: string;
  bn: string;
  en: string;
};

export type QuizQuestion = {
  question: TriLingualText;
  options: TriLingualText[];
  correctIndex: number;
  explanation: TriLingualText;
};

export type PracticeItem = {
  prompt: TriLingualText;
  answer: string;
  hint?: TriLingualText;
};

export type Lesson = {
  slug: string;
  month: number;
  title: TriLingualText;
  intro: TriLingualText;
  objectives: TriLingualText[];
  pronounTable?: PronounRow[];
  explanation: TriLingualText[];
  examples: Example[];
  vocabulary: VocabItem[];
  pronunciation: TriLingualText;
  commonMistakes: TriLingualText[];
  practice: PracticeItem[];
  quiz: QuizQuestion[];
  summary: TriLingualText;
};