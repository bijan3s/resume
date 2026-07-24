export interface StarSkill {
  name: string;
  category: string;
  rating: number; // 1 to 5 stars
}

export const starSkillsData: StarSkill[] = [
  { name: 'React & Next.js', category: 'Frontend', rating: 5 },
  { name: 'TypeScript & JavaScript', category: 'Languages', rating: 5 },
  { name: 'Automated Testing (Playwright, Jest, Vitest)', category: 'Quality Assurance', rating: 5 },
  { name: 'Real-Time Streaming (NATS, JetStream, WebSockets)', category: 'Real-Time Systems', rating: 5 },
  { name: 'Material UI & Design Systems', category: 'Frontend', rating: 5 },
  { name: 'Node.js & Express', category: 'Backend', rating: 4 },
  { name: 'React Native (Cross-Platform Mobile)', category: 'Mobile', rating: 4 },
  { name: 'Databases (PostgreSQL, MongoDB, Redis)', category: 'Databases', rating: 4 },
  { name: 'Observability & Tooling (Grafana, Vector, Docker)', category: 'DevOps & Tooling', rating: 4 },
];
