export type JobType = 'Vollzeit' | 'Teilzeit' | 'Minijob' | 'Ausbildung' | 'Führungskraft';
export type JobCategory = 'Verkauf' | 'Logistik' | 'Filialleitung' | 'Kasse' | 'Aushilfe';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  category: JobCategory;
  date: string;
  salary?: string;
  description: string;
  tags: string[];
}

export type ViewState = 'HOME' | 'JOBS' | 'EMPLOYERS' | 'CANDIDATES' | 'KNOWLEDGE' | 'IMPRESSUM';

export interface NavItem {
  label: string;
  view: ViewState;
}

export interface FAQItem {
  question: string;
  answer: string;
}