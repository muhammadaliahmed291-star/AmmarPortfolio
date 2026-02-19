import { Project, Skill } from './types';
import { e_comerence, digitalAgency, loanManager, rideSharing, } from './utils/images';


export const PROJECTS: Project[] = [
  
  {
    id: '2',
    title: 'MAP APP INTERACTION',
    category: 'MAP APP',
    description: 'A dashboard design to visualize environmental data and carbon emissions trends clearly.',
    image: rideSharing, // local image 
    tags: ['Data Visualization', 'Web App', 'UI Design'],
    figmaLink: 'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
  },
  {
    id: '3',
  title: 'Friends Loan Manager',
  category: 'E-commerce App',
  description: 'Friends loan manager app interface that helps users plan trips and see personalized recommendations easily.',
  image: loanManager, // local image
  tags: ['App Design', 'UX/UI', 'Mobile'],
  figmaLink: 'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
},
  {
    id: '4',
    title: 'Online Shopping app',
    category: 'E-commerce',
    description: 'A wellness app interface with a clean design to track health activities and stress levels.',
    image: e_comerence, // local image
    tags: ['UI Design', 'Health App', 'User Friendly'],
    figmaLink:'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
  },
  {
    id: '5',
    title: 'Digital Agency Portal',
    category: 'Web & Mobile',
    description: 'A portfolio site design to showcase agency projects, case studies, and services with clarity.',
    image: digitalAgency, // local image
    tags: ['Portfolio', 'Web Design', 'UI/UX'],
    figmaLink: 'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
  }
];


// Skills array
export const SKILLS: Skill[] = [
  { name: 'Figma', level: 98, icon: '🎨' },
  { name: 'UX Research', level: 92, icon: '🔬' },
  { name: 'Strategy', level: 85, icon: '🧠' },
  { name: 'Prototyping', level: 95, icon: '⚡' },
  { name: 'Systems', level: 90, icon: '📐' },
  { name: 'Interaction', level: 88, icon: '🖱️' }
];

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'Work', href: 'work' },
  { label: 'About Us', href: 'about' },
  { label: 'Contact Us', href: 'contact' }
];
