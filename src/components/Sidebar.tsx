import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import { profileData } from '../data/profile';
import { ProfileImage } from './ProfileImage';

const featuredSkillBadges = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Nest.js',
  'Playwright',
  'Monitoring',
  'Grafana',
  'NATS',
];

export const Sidebar: React.FC = () => {
  return (
    <Box
      component="aside"
      sx={{
        position: { lg: 'fixed' },
        top: 0,
        left: 0,
        bottom: 0,
        width: { lg: '300px', xl: '340px' },
        height: { lg: '100vh' },
        zIndex: 1100,
        overflowY: { lg: 'auto' },
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '4px',
        },
      }}
    >
      <Box
        sx={{
          p: { xs: 3, sm: 4 },
          height: { lg: '100%' },
          borderRadius: 0,
          backgroundColor: '#090d16',
          color: '#f8fafc',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '6px 0 24px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Dark Indigo Bordered Profile Image Avatar */}
        <Box sx={{ mb: 2.5, mt: { lg: 2 } }}>
          <ProfileImage src={profileData.profileImage} alt={profileData.name} size={150} />
        </Box>

        {/* Name & Title */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: '1.4rem',
            color: '#f8fafc',
            mb: 0.5,
          }}
        >
          {profileData.name}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            color: '#818cf8',
            fontWeight: 700,
            fontSize: '0.875rem',
            mb: 1.5,
          }}
        >
          {profileData.headlineTitle}
        </Typography>

        {/* Location Display */}
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 1.5 }}
        >
          <LocationOnIcon sx={{ fontSize: '0.95rem', color: '#94a3b8' }} />
          <Typography
            variant="body2"
            sx={{ color: '#94a3b8', fontSize: '0.825rem', fontWeight: 500 }}
          >
            {profileData.location}
          </Typography>
        </Stack>

        {/* Open to Relocation Chip */}
        {profileData.openToRelocation && (
          <Chip
            icon={
              <FlightTakeoffIcon
                sx={{ fontSize: '0.85rem !important', color: '#818cf8 !important' }}
              />
            }
            label="Open to Relocation"
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: '0.75rem',
              mb: 2.5,
              backgroundColor: 'rgba(129, 140, 248, 0.12)',
              color: '#818cf8',
              border: '1px solid rgba(129, 140, 248, 0.3)',
            }}
          />
        )}

        {/* Social & Contact Actions */}
        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          sx={{ mb: 2.5, width: '100%' }}
        >
          <IconButton
            component="a"
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            size="small"
            sx={{
              color: '#f8fafc',
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': { backgroundColor: '#334155' },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>

          <IconButton
            component="a"
            href={profileData.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            size="small"
            sx={{
              color: '#f8fafc',
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': { backgroundColor: '#334155' },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>

          <IconButton
            component="a"
            href={`mailto:${profileData.email}`}
            aria-label="Send Email"
            size="small"
            sx={{
              color: '#f8fafc',
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': { backgroundColor: '#334155' },
            }}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* View / Download Résumé Button (HTML) */}
        <Button
          fullWidth
          variant="contained"
          size="small"
          component="a"
          href="/resume.pdf"
          download="Bijan_Seydabadi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<DescriptionIcon />}
          sx={{
            py: 1.2,
            fontSize: '0.85rem',
            fontWeight: 700,
            mb: 2.5,
            backgroundColor: '#6366f1',
            color: '#ffffff !important',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
            '&:hover': {
              backgroundColor: '#4f46e5',
              boxShadow: '0 6px 20px rgba(99, 102, 241, 0.55)',
            },
          }}
        >
          Download Résumé
        </Button>

        <Divider sx={{ width: '100%', mb: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Featured Skills Quick Badges */}
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
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: 0.8 }}
        >
          {featuredSkillBadges.map((skill) => (
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
      </Box>
    </Box>
  );
};
