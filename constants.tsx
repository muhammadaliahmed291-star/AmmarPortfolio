import { Project, Skill } from './types';
import { e_comerence, digitalAgency, loanManager, RideSharing } from './utils/images';


export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ride Sharing App',
    category: 'Mobile & Web Design',
    description: 'A Ride Sharing App is a mobile application that allows users to book rides easily from one location to another',
    image: RideSharing, // local image
    tags: ['UX Design', 'Figma', 'Web & Mobile'],
    figmaLink: 'https://www.figma.com/proto/xqZAO333o6aEWLtieT8rlH/Ride-Sharing-App?node-id=109-2&t=haSPPfMZN2o1WKtl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=109%3A2'
  },
  {
    id: '2',
    title: 'EcoSphere Analytics',
    category: 'SaaS Platform',
    description: 'A dashboard design to visualize environmental data and carbon emissions trends clearly.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200', // online URL
    tags: ['Data Visualization', 'Web App', 'UI Design'],
    figmaLink: 'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
  },
  {
    id: '3',
    title: 'Friends Loan Manger',
    category: 'E-commerce App',
    description: 'Friends loan manager app interface that helps users plan trips and see personalized recommendations easily.',
    image: loanManager, // local image
    tags: ['App Design', 'UX/UI', 'Mobile'],
    figmaLink: 'https://www.figma.com/design/s7qqJx0PqCAermbFuuvpJ6/FriendsLoanManager?node-id=0-1&t=JGMc5tAQsVF79NtB-1'
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
    figmaLink: 'https://www.figma.com/design/9IIpnH5tKB3aN2qGSSMrp1/Digital-Agency?node-id=67-4&t=m39r8lOx5w8lZDmh-1'
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
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' }
];
