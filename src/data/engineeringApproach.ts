import { EngineeringPrinciple } from '../types/portfolio';

export const approachData: EngineeringPrinciple[] = [
  {
    id: 'architecture',
    title: 'Practical Architecture',
    quote:
      'I prefer maintainable architecture over unnecessary abstraction. I establish solid foundations and improve systems iteratively.',
    description:
      'Structuring codebases to make future changes safe, predictable, and simple.',
    bullets: [
      'Clean separation between data fetching, business logic, and rendering.',
      'Predictable component state management without redundant global stores.',
      'Performance profiling for high-density interfaces (Sigma.js WebGL graph acceleration).',
    ],
  },
  {
    id: 'testing',
    title: 'Testing as Engineering Leverage',
    quote:
      'I convert important production bugs into regression tests so failures do not return.',
    description:
      'Automated testing speeds up feature delivery and safeguards critical user flows.',
    bullets: [
      'Focusing automated test coverage on high-risk business paths.',
      'Playwright UI workflow testing across real browser engines.',
      'Bot-assisted test environments for multi-user real-time systems.',
    ],
  },
  {
    id: 'ownership',
    title: 'Ownership & Collaboration',
    quote:
      'I work beyond assigned UI tickets by solving product problems and taking responsibility for maintainability.',
    description:
      'Direct collaboration with company leadership, backend teams, and designers to deliver outcomes.',
    bullets: [
      'Cross-functional problem solving across frontend and backend boundaries.',
      'Refactoring legacy codebases into modern, tested TypeScript platforms.',
    ],
  },
];
