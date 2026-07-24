import React from 'react';
import { Box, Typography, Button, Stack, Grid, useTheme } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { profileData } from '../data/profile';

export const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="hero" sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 4, md: 6 } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' },
          fontWeight: 800,
          color: theme.palette.text.primary,
          mb: 1.5,
        }}
      >
        {profileData.headlineTitle}
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: { xs: '1.1rem', md: '1.35rem' },
          mb: 2.5,
        }}
      >
        {profileData.headlineSub}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: theme.palette.text.secondary,
          maxWidth: '780px',
          mb: 4,
          fontSize: { xs: '1rem', md: '1.075rem' },
          lineHeight: 1.85,
        }}
      >
        {profileData.summary}
      </Typography>

      {/* Engineering Proof Points Grid */}
      <Grid container spacing={2} sx={{ mb: 4, maxWidth: '780px' }}>
        {profileData.proofPoints.map((point) => (
          <Grid item xs={12} sm={6} key={point}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <CheckCircleOutlineIcon color="primary" fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                {point}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Action Buttons */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" sx={{ gap: 1.5 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#projects"
          startIcon={<VisibilityIcon />}
        >
          View Projects
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          component="a"
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<DescriptionIcon />}
        >
          View / Download Résumé
        </Button>
      </Stack>
    </Box>
  );
};
