export type TalentRoleKey = 'csr' | 'bdr' | 'am' | 'ae';

export interface TalentRoleInfo {
  key: TalentRoleKey;
  code: string;
  name: string;
  fullTitle: string;
  badge: string;
  focus: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  vettingAssessment: string;
  techStack: string[];
  colorHex: number;
}

export interface EngagementModelTier {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  metrics: { label: string; value: string; detail: string }[];
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  timeline: string;
  primaryObjective: string;
  keyActivities: string[];
  kpis: { label: string; target: string }[];
  status: 'active' | 'upcoming' | 'planned';
}

export interface VettingCriterion {
  category: string;
  role: TalentRoleKey;
  title: string;
  evaluationMethod: string;
  benchmark: string;
  weight: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface ContactInquiry {
  fullName: string;
  workEmail: string;
  companyName: string;
  servicesInterested: string[];
  teamSize?: string;
  message: string;
  submittedAt: string;
}
