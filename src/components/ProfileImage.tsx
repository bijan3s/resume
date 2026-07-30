import React, { useState } from 'react';
import { Box, Paper, useTheme } from '@mui/material';

interface ProfileImageProps {
  src?: string;
  alt: string;
  size?: number;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src = './profile-placeholder.svg',
  alt,
  size = 150,
}) => {
  const theme = useTheme();
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('./profile-placeholder.svg');
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: { xs: 130, sm: 150, md: size },
        height: { xs: 130, sm: 150, md: size },
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #1e1b4b', // Dark Indigo 900 border
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 4px 20px rgba(0, 0, 0, 0.4)'
          : '0 4px 20px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
          borderColor: '#312e81',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 6px 24px rgba(129, 140, 248, 0.3)'
            : '0 6px 24px rgba(79, 70, 229, 0.2)',
        },
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={alt}
        onError={handleError}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Paper>
  );
};
