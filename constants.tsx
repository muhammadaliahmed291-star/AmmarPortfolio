import { Project, Skill } from './types';
import { e_comerence, digitalAgency, loanManager, rideSharing, mapapp, } from './utils/images';


export const PROJECTS: Project[] = [
  
  {
    id: '1',
    title: 'Ride Sharing',
    category: 'Ride Sharing App',
    description: 'Ride Sharing App is a user-friendly mobile application designed to help people book rides easily and travel safely to their destination.',
    image: rideSharing, // local image 
    tags: ['Data Visualization', 'Web App', 'UI Design'],
    figmaLink: 'https://www.figma.com/design/xqZAO333o6aEWLtieT8rlH/Ride-Sharing-App?node-id=0-1&t=Ls1o2MSydT2XKGRn-1'
  },
  {
    id: '2',
  title: 'Friends Loan Manager',
  category: 'E-commerce App',
  description: 'Friends loan manager app interface that helps users plan trips and see personalized recommendations easily.',
  image: loanManager, // local image
  tags: ['App Design', 'UX/UI', 'Mobile'],
  figmaLink: 'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
},
  {
    id: '3',
    title: 'Online Shopping app',
    category: 'E-commerce',
    description: 'A wellness app interface with a clean design to track health activities and stress levels.',
    image: e_comerence, // local image
    tags: ['UI Design', 'Health App', 'User Friendly'],
    figmaLink:'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
  },
  {
    id: '4',
    title: 'Digital Agency Portal',
    category: 'Web & Mobile',
    description: 'A portfolio site design to showcase agency projects, case studies, and services with clarity.',
    image: digitalAgency, // local image
    tags: ['Portfolio', 'Web Design', 'UI/UX'],
    figmaLink: 'https://www.figma.com/proto/N84WglRYfOGc4i5W3ibFK8/E-commerce-APP?node-id=3-26&p=f&t=wosNQgTznBJvRpoS-1'
  },
  {
    id: '5',
    title: 'MAP APP INTERACTION',
    category: 'MAP APP',
    description: 'Map App Interaction allows users to add their current location and search for any desired place easily. It provides a smooth experience to find nearby locations, addresses, and destinations in real time.',
    image: mapapp, // local image
    tags: ['Portfolio', 'Web Design', 'UI/UX'],
    figmaLink: 'https://www.figma.com/proto/MBRQyZpV2tACoLRQSuzqwS/MAP-Interaction-Design?node-id=5-13&p=f&t=rlp9kYtIlG6C2DEs-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A13'
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
