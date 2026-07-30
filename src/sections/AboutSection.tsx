import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Stack, Chip, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import { SectionHeader } from '../components/SectionHeader';
import { aboutData } from '../data/about';

export const AboutSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Background &amp; Education"
          title="About Me"
          subtitle="Analytical background, systems thinking, formal engineering education, and language proficiencies."
        />

        <Grid container spacing={4}>
          {/* Bio Narrative Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ height: '100%', backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={1.5} sx={{ mb: 2.5, alignItems: 'center' }}>
                  <Box sx={{ p: 1, borderRadius: 1, backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9' }}>
                    <PersonIcon color="primary" />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                    Professional Background
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  {aboutData.bio.map((paragraph, idx) => (
                    <Typography key={idx} variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Education & Languages Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3} sx={{ height: '100%' }}>
              {/* Education Card */}
              <Card sx={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: 'center' }}>
                    <Box sx={{ p: 1, borderRadius: 1, backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9' }}>
                      <SchoolIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', color: theme.palette.text.primary }}>
                        Formal Education
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        {aboutData.education.period}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 0.5 }}>
                    {aboutData.education.degree}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 2 }}>
                    {aboutData.education.institution}
                  </Typography>

                  <Stack spacing={1}>
                    {aboutData.education.highlights.map((highlight, idx) => (
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start' }} key={idx}>
                        <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main, fontSize: '1rem', mt: 0.2 }} />
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem' }}>
                          {highlight}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card sx={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider, flexGrow: 1 }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: 'center' }}>
                    <Box sx={{ p: 1, borderRadius: 1, backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9' }}>
                      <LanguageIcon color="primary" />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', color: theme.palette.text.primary }}>
                      Language Proficiency
                    </Typography>
                  </Stack>

                  <Stack spacing={1.5}>
                    {aboutData.languages.map((lang) => (
                      <Box key={lang.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, borderRadius: 1, backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc', border: `1px solid ${theme.palette.divider}` }}>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                          {lang.name}
                        </Typography>
                        <Chip label={lang.proficiency} size="small" color="primary" variant="outlined" sx={{ fontWeight: 600, fontSize: '0.75rem' }} />
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
