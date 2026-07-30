import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'amnet',
    title: 'AMNET Zero-Trust Network Platform',
    subtitle:
      'Real-time control and monitoring panel for the AMNET zero-trust cybersecurity product (amnet.ir) at Amnesh.',
    context:
      'AMNET (amnet.ir) is an enterprise zero-trust networking platform enabling network administrators to monitor device relationships, security policies, and infrastructure state in real time.',
    role: 'Frontend Architect & Developer leading UI panel design and real-time state integration.',
    technologies: ['React', 'Material UI', 'NATS', 'JetStream', 'Docker', 'Playwright'],
    links: [
      {
        label: 'View AMNET Product Website (amnet.ir)',
        url: 'https://amnet.ir',
        isPrimary: true,
      },
    ],
    media: [
      {
        type: 'image',
        src: '/amnet.gif',
        alt: 'AMNET Dashboard Demo GIF',
        caption: 'AMNET zero-trust Landing page animation',
      },
      {
        type: 'image',
        src: '/amnet.png',
        alt: 'AMNET Dashboard Screenshot',
        caption: 'Sanitized AMNET zero-trust dashboard preview.',
      },
    ],
  },
  {
    id: 'mafia-game',
    title: 'Real-Time Multiplayer Mafia Game',
    subtitle: 'Multiplayer social-deduction platform with custom testing and voice streaming.',
    status: 'Core functionality complete',
    context:
      'Multiplayer game platform featuring real-time state synchronization, Mediasoup voice channels, mobile client applications, and bot-driven automated testing environments.',
    role: 'Full-Stack Developer managing backend APIs, Mediasoup voice integration, and bot testing infrastructure.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'React Native',
      'Node.js',
      'Mediasoup',
      'Redis',
      'Mongo',
      'Playwright',
    ],
    media: [
      {
        type: 'image',
        src: '/mafia.png',
        alt: 'Mobile UI Screenshots',
        caption: 'Kotlin/Compose clients.',
      },
    ],
  },
  {
    id: 'react-highlight-within',
    title: 'react-highlight-within',
    subtitle: 'Open-source React package published on npm for dynamic text highlighting.',
    context:
      'Lightweight React component published on npm that overlays dynamic text highlights over input and textarea fields with zero dependencies and custom regex rule support.',
    role: 'Author & Maintainer',
    technologies: ['React', 'TypeScript', 'npm', 'Vite', 'Vitest'],
    links: [
      {
        label: 'View on npm',
        url: 'https://www.npmjs.com/package/react-highlight-within',
        isPrimary: true,
      },
    ],
    hasInteractiveDemo: true,
    codeSnippet: `npm install react-highlight-within`,
  },
  {
    id: 'faraz-sms',
    title: 'Faraz SMS Panel',
    subtitle: 'React operational interface for managing high-volume SMS gateway services.',
    context:
      'Management interface for dispatching, filtering, and scheduling high-volume SMS gateway services.',
    role: 'Frontend Developer modernizing operational workflows and API components.',
    technologies: ['React', 'TypeScript', 'Material UI', 'REST APIs', 'PostgreSQL'],
    links: [
      {
        label: 'View Faraz SMS Website (farazsms.com)',
        url: 'https://farazsms.com/',
        isPrimary: true,
      },
    ],
  },
];
