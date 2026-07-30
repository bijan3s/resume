import { Chip, Divider, Stack, Typography } from '@mui/material';

const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'NestJS',
  'Playwright',
  'Monitoring',
  'Grafana',
  'NATS',
];

export const SidebarSkills = () => (
  <>
    <Divider sx={{ width: '100%', mb: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
    <Typography
      variant="caption"
      sx={{
        fontWeight: 700,
        color: '#94a3b8',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        display: 'block',
        mb: 1.5,
      }}
    >
      Featured Skills
    </Typography>
    <Stack
      direction="row"
      spacing={0.8}
      sx={{ gap: 0.8, flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {skills.map((skill) => (
        <Chip
          key={skill}
          label={skill}
          size="small"
          sx={{
            fontSize: '0.725rem',
            fontWeight: 600,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#f1f5f9',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        />
      ))}
    </Stack>
  </>
);
