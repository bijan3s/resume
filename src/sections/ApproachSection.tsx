import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Stack, useTheme } from '@mui/material';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ShieldCheckIcon from '@mui/icons-material/Verified';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { SectionHeader } from '../components/SectionHeader';
import { approachData } from '../data/engineeringApproach';

export const ApproachSection: React.FC = () => {
  const theme = useTheme();

  const getIcon = (id: string) => {
    switch (id) {
      case 'architecture':
        return <ArchitectureIcon color="primary" fontSize="large" />;
      case 'testing':
        return <ShieldCheckIcon color="primary" fontSize="large" />;
      case 'performance':
        return <SpeedIcon color="primary" fontSize="large" />;
      case 'ai-development':
        return <PsychologyIcon color="primary" fontSize="large" />;
      default:
        return <AssessmentIcon color="primary" fontSize="large" />;
    }
  };

  return (
    <Box
      id="approach"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Engineering Philosophy"
          title="How I Build Software"
          subtitle="Core engineering principles focused on architecture, rigorous automated testing, profiled performance, controlled tool usage, and end-to-end ownership."
        />

        <Grid container spacing={3}>
          {approachData.map((principle) => (
            <Grid item xs={12} md={6} key={principle.id}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(principle.id)}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                      {principle.title}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: theme.palette.primary.main,
                      mb: 2,
                      borderLeft: `3px solid ${theme.palette.primary.main}`,
                      pl: 2,
                      py: 0.5,
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    “{principle.quote}”
                  </Typography>

                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    {principle.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {principle.bullets.map((bullet, idx) => (
                      <Typography component="li" key={idx} variant="body2" sx={{ color: theme.palette.text.primary, mb: 0.8, fontSize: '0.875rem' }}>
                        {bullet}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
