import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Link,
  useTheme,
  Grid,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';
import LockIcon from '@mui/icons-material/Lock';
import { SectionHeader } from '../components/SectionHeader';
import { experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        position: 'relative',
      }}
    >
      <SectionHeader
        badge="Track Record"
        title="Professional Experience"
        subtitle="3+ years of full-stack and frontend engineering across cybersecurity products, real-time control panels, SaaS systems, and mobile applications."
      />

      <Stack spacing={3.5}>
        {experienceData.map((item) => (
          <Card
            key={item.id}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.divider,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              {/* Card Header Row */}
              <Grid container spacing={2} sx={{ mb: 2, alignItems: 'flex-start' }}>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 800, color: theme.palette.text.primary, mb: 0.5 }}
                  >
                    {item.role}
                  </Typography>

                  <Stack direction="row" spacing={1.5} sx={{ gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <BusinessIcon sx={{ fontSize: '1rem', color: theme.palette.primary.main }} />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                      >
                        {item.company}
                      </Typography>
                    </Stack>

                    {item.companyUrl && (
                      <Link
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: theme.palette.text.secondary,
                          textDecoration: 'none',
                          '&:hover': { color: theme.palette.primary.main },
                        }}
                      >
                        <span>Website ({item.companyUrl.replace('https://', '')})</span>
                        <LaunchIcon sx={{ fontSize: '0.85rem' }} />
                      </Link>
                    )}
                  </Stack>
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                  <Stack
                    direction="column"
                    spacing={0.5}
                    sx={{ alignItems: { xs: 'flex-start', sm: 'flex-end' } }}
                  >
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <CalendarTodayIcon sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                        {item.startDate} – {item.endDate}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <LocationOnIcon sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }} />
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                        {item.location === item.workMode ? item.location : `${item.location} (${item.workMode})`}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>

              {/* Company Description */}
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2.5,
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </Typography>

              {/* Responsibilities & Achievements */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: theme.palette.text.primary }}>
                Key Engineering Contributions:
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 3 }}>
                {item.achievements.map((achievement, idx) => (
                  <Typography
                    component="li"
                    key={idx}
                    variant="body2"
                    sx={{
                      color: theme.palette.text.primary,
                      mb: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {achievement}
                  </Typography>
                ))}
              </Box>

              {/* Public note if management panel is private */}
              {item.publicNotes && (
                <Box
                  sx={{
                    p: 1.5,
                    mb: 3,
                    borderRadius: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9',
                    border: `1px solid ${theme.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <LockIcon sx={{ fontSize: '1rem', color: theme.palette.text.secondary }} />
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {item.publicNotes}
                  </Typography>
                </Box>
              )}

              {/* Technology Stack Chips */}
              <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', mb: 1, color: theme.palette.text.secondary }}>
                Technologies Used:
              </Typography>
              <Stack direction="row" spacing={1} sx={{ gap: 0.8, flexWrap: 'wrap' }}>
                {item.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f1f5f9',
                      color: theme.palette.text.primary,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
