import React from 'react';
import { Box, Container, Typography, Link, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: theme.palette.mode === 'dark' ? '#070a12' : '#ffffff',
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 3, sm: 6, lg: 8, xl: 12 }, // Exact alignment & padding matching main page sections
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
              {profileData.name} — Full-Stack TypeScript Engineer
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              © {currentYear} • Built with React, TypeScript &amp; Material UI
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Link
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="GitHub"
              sx={{ '&:hover': { color: theme.palette.primary.main } }}
            >
              <GitHubIcon fontSize="small" />
            </Link>
            <Link
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="LinkedIn"
              sx={{ '&:hover': { color: theme.palette.primary.main } }}
            >
              <LinkedInIcon fontSize="small" />
            </Link>
            <Link
              href={`mailto:${profileData.email}`}
              color="inherit"
              aria-label="Email"
              sx={{ '&:hover': { color: theme.palette.primary.main } }}
            >
              <EmailIcon fontSize="small" />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
