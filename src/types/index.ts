export interface User {
  id: string;
  name: string;
  email: string;
  registrationNumber?: string;
  createdAt: Date;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface SimulationResult {
  id: string;
  userId: string;
  questions: Question[];
  answers: number[];
  score: number;
  completedAt: Date;
}

export interface TechnicalTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
}

export interface ForumPost {
  id: string;
  userId: string;
  userName: string;
  title: string;
  content: string;
  replies: ForumReply[];
  createdAt: Date;
}

export interface ForumReply {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
}