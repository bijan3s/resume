import React from 'react';
import { Box, Typography, Chip, useTheme } from '@mui/material';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: align }}>
      {badge && (
        <Chip
          label={badge}
          size="small"
          sx={{
            mb: 1.5,
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(129, 140, 248, 0.1)' : 'rgba(79, 70, 229, 0.08)',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(129, 140, 248, 0.3)' : 'rgba(79, 70, 229, 0.3)'}`,
          }}
        />
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '1.85rem', sm: '2.35rem', md: '2.65rem' },
          fontWeight: 800,
          color: theme.palette.text.primary,
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: align === 'center' ? '720px' : '100%',
            mx: align === 'center' ? 'auto' : 0,
            fontSize: { xs: '0.975rem', md: '1.075rem' },
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
