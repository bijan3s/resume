import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import { metricsData } from '../data/metrics';

export const ImpactSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="impact"
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {metricsData.map((metric) => (
            <Grid item xs={12} sm={6} md={3} key={metric.id}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                  transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.1rem' },
                      fontWeight: 800,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: theme.palette.primary.main,
                      mb: 0.5,
                    }}
                  >
                    {metric.value}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      mb: 1,
                    }}
                  >
                    {metric.label}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {metric.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
