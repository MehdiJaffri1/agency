export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: "development" | "ai" | "marketing" | "design" | "enterprise";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  companyName?: string;
  serviceInterest: string;
  budgetRange: string;
  projectBrief: string;
  scheduledDate: string;
  scheduledTime: string;
  createdAt: string;
}
