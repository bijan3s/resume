import { Metric } from '../types/portfolio';

export const metricsData: Metric[] = [
  {
    id: 'devices',
    value: '~10,000 devices',
    label: 'Network Visualization Scope',
    description: 'Interactive network graph capacity, depending on graph edge density.',
  },
  {
    id: 'testing',
    value: '~80% UI coverage',
    label: 'Automated Test Protection',
    description: 'Automated coverage of important production UI behavior and critical workflows.',
  },
  {
    id: 'experience',
    value: '3+ years',
    label: 'Engineering Track Record',
    description: 'Professional full-stack and frontend development experience.',
  },
  {
    id: 'realtime',
    value: 'Real-time systems',
    label: 'Infrastructure & Streaming',
    description: 'Experience with NATS, JetStream, WebSockets, Mediasoup, Redis, and monitoring.',
  },
];
