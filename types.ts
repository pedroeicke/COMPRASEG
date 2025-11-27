import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Speaker {
  name: string;
  image: string;
  role?: string;
  bio?: string[]; // Adicionado array de strings para parágrafos
}

export interface Coordinator {
  name: string;
  image: string;
  bio: string[];
}

export interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}