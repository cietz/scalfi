import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  age: number;
  text: string;
  rating: number;
}

export interface DoctorInfo {
  name: string;
  specialty: string;
  crm: string;
}