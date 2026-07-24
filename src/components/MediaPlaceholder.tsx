import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface MediaPlaceholderProps {
  type: 'image' | 'video' | 'diagram';
  src: string;
  alt: string;
  caption?: string;
  height?: number | string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type,
  src,
  alt,
  caption,
  height = 260,
}) => {
  const theme = useTheme();

  const getIcon = () => {
    switch (type) {
      case 'diagram':
        return <AccountTreeIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />;
      case 'video':
        return <PlayCircleOutlineIcon sx={{ color: theme.palette.secondary.main, fontSize: 32 }} />;
      default:
        return <ImageIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />;
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.divider,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: height,
          backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            // Hide image on load error and display neutral fallback text block
            e.currentTarget.style.display = 'none';
          }}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            p: 1,
          }}
        />
        {/* Fallback container shown if image fails or isn't rendered */}
        <Box
          sx={{
            position: 'absolute',
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            p: 2,
            textAlign: 'center',
          }}
        >
          {getIcon()}
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
            {alt}
          </Typography>
        </Box>
      </Box>
      {caption && (
        <Box sx={{ p: 1.5, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block' }}>
            {caption}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};
