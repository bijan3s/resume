import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Stack, Typography } from '@mui/material';

import { profileData } from '../data/profile';
import { ProfileImage } from './ProfileImage';

export const SidebarIdentity = () => {
  return (
    <>
      <Box sx={{ mb: 2.5, mt: { lg: 2 } }}>
        <ProfileImage src={profileData.profileImage} alt={profileData.name} size={150} />
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: 800, fontSize: '1.4rem', color: '#f8fafc', mb: 0.5 }}
      >
        {profileData.name}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: '#818cf8', fontWeight: 700, fontSize: '0.875rem', mb: 1.5 }}
      >
        {profileData.headlineTitle}
      </Typography>
      <Stack
        direction="row"
        spacing={0.5}
        sx={{ mb: 1.5, alignItems: 'center', justifyContent: 'center' }}
      >
        <LocationOnIcon sx={{ fontSize: '0.95rem', color: '#94a3b8' }} />
        <Typography
          variant="body2"
          sx={{ color: '#94a3b8', fontSize: '0.825rem', fontWeight: 500 }}
        >
          {profileData.location}
        </Typography>
      </Stack>
    </>
  );
};
