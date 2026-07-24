import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Rating,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { SectionHeader } from '../components/SectionHeader';
import { starSkillsData } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        position: 'relative',
      }}
    >
      <SectionHeader
        badge="Proficiency & Competencies"
        title="Skills & Technologies"
        subtitle="Core engineering proficiencies rated by technical depth, production experience, and mastery."
      />

      <Card
        sx={{
          backgroundColor: '#f8fafc', // Soft off-white outer container background
          borderColor: 'rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
          <Grid container spacing={2.5}>
            {starSkillsData.map((skill) => (
              <Grid item xs={12} md={6} key={skill.name}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2.5,
                    backgroundColor: '#ffffff', // Crisp pure white skill card popping against soft container background
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    justifyContent: 'space-between',
                    gap: 1.5,
                    height: '100%',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      boxShadow: '0 4px 16px rgba(79, 70, 229, 0.12)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: '#0f172a', mb: 0.5 }}
                    >
                      {skill.name}
                    </Typography>
                    <Chip
                      label={skill.category}
                      size="small"
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(79, 70, 229, 0.08)',
                        color: theme.palette.primary.main,
                        border: '1px solid rgba(79, 70, 229, 0.25)',
                      }}
                    />
                  </Box>

                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Rating
                      value={skill.rating}
                      readOnly
                      precision={0.5}
                      icon={<StarIcon sx={{ color: '#f59e0b', fontSize: '1.25rem' }} />}
                      emptyIcon={<StarIcon sx={{ color: '#cbd5e1', fontSize: '1.25rem' }} />}
                    />
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#475569', ml: 0.5 }}>
                      {skill.rating}/5
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
