
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Fintech Ecosystem',
    category: 'Mobile & Web Design',
    description: 'A revolutionary approach to digital banking, focusing on simplifying multi-currency transactions for global nomads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['UX Strategy', 'Figma Pro', 'Design System']
  },
  {
    id: '2',
    title: 'EcoSphere Analytics',
    category: 'SaaS Platform',
    description: 'An enterprise-grade dashboard visualizing real-time carbon emissions data for Fortune 500 manufacturing companies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Data Viz', 'Complex UI', 'Web App']
  },
  {
    id: '3',
    title: 'Lumina Smart Travel',
    category: 'E-commerce App',
    description: 'AI-driven travel companion that curates hyper-personalized itineraries based on user mood and past behavior.',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI Integration', 'Visual Design', 'iOS']
  },
  {
    id: '4',
    title: 'PureFlow Wellness',
    category: 'Health Tech',
    description: 'Integrating bio-feedback with guided meditation to help high-performing professionals manage workplace stress.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Product Design', 'User Testing', 'Branding']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Figma', level: 98, icon: '🎨' },
  { name: 'UX Research', level: 92, icon: '🔬' },
  { name: 'Strategy', level: 85, icon: '🧠' },
  { name: 'Prototyping', level: 95, icon: '⚡' },
  { name: 'Systems', level: 90, icon: '📐' },
  { name: 'Interaction', level: 88, icon: '🖱️' }
];

export const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'Work', href: 'work' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' }
];
