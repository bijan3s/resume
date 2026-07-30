import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Card, CardContent, Grid, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { profileData } from '../data/profile';

export const ContactSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 5, md: 8 } }}>
      <SectionHeader
        badge="Contact & Connect"
        title="Let's Build Something Great"
        subtitle="Open to engineering positions, technical contracts, and architectural collaborations."
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                Direct Communication
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                Feel free to send an email or reach out via professional networks:
              </Typography>

              <Stack spacing={2} sx={{ mb: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component="a"
                  href={`mailto:${profileData.email}`}
                  startIcon={<EmailIcon />}
                  fullWidth
                >
                  Send Email ({profileData.email})
                </Button>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    fullWidth
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href={profileData.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkedInIcon />}
                    fullWidth
                  >
                    LinkedIn
                  </Button>
                </Stack>

                <Button
                  variant="outlined"
                  color="primary"
                  component="a"
                  href={profileData.resumeUrl}
                  download
                  startIcon={<DownloadIcon />}
                  fullWidth
                >
                  Download Résumé
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                Location & Details
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  {profileData.location}
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
              >
                Specializing in Full-Stack TypeScript development, React & Node.js web platforms,
                zero-trust network dashboards, and automated UI testing.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
