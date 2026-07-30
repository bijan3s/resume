import React, { useState } from 'react';
import { Box, Typography, TextField, Paper, Chip, Stack, useTheme } from '@mui/material';

export const ReactHighlightWithinDemo: React.FC = () => {
  const theme = useTheme();
  const sampleText =
    'React and TypeScript engineer specializing in real-time dashboards, performance optimization, and automated testing.';
  const [highlightTerm, setHighlightTerm] = useState('TypeScript');

  const presetTerms = ['TypeScript', 'React', 'dashboards', 'testing'];

  const renderHighlightedText = () => {
    const term = highlightTerm.trim();
    if (!term) return sampleText;

    try {
      const escapedTerm = term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      const regex = new RegExp(`(${escapedTerm})`, 'gi');
      const parts = sampleText.split(regex);

      return parts.map((part, index) => {
        if (part.toLowerCase() === term.toLowerCase()) {
          return (
            <Box
              component="mark"
              key={index}
              sx={{
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                borderRadius: '4px',
                padding: '2px 6px',
                fontWeight: 700,
                display: 'inline-block',
                mx: '2px',
              }}
            >
              {part}
            </Box>
          );
        }
        return <span key={index}>{part}</span>;
      });
    } catch {
      return sampleText;
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#f8fafc',
        borderColor:
          theme.palette.mode === 'dark' ? 'rgba(129, 140, 248, 0.3)' : 'rgba(79, 70, 229, 0.3)',
        borderRadius: 3,
        mt: 2,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 800, mb: 1, color: theme.palette.primary.main }}
      >
        ⚡ Live Interactive Demo (react-highlight-within)
      </Typography>

      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
        Type a term below or click preset chips to highlight keywords:
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
        <Typography
          variant="caption"
          sx={{ alignSelf: 'center', color: theme.palette.text.secondary, fontWeight: 600 }}
        >
          Presets:
        </Typography>
        {presetTerms.map((term) => (
          <Chip
            key={term}
            label={term}
            size="small"
            clickable
            color={highlightTerm.toLowerCase() === term.toLowerCase() ? 'primary' : 'default'}
            onClick={() => setHighlightTerm(term)}
          />
        ))}
      </Stack>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Highlight Keyword / Term"
          size="small"
          value={highlightTerm}
          onChange={(e) => setHighlightTerm(e.target.value)}
          placeholder="e.g. TypeScript"
          fullWidth
        />

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.925rem',
            lineHeight: 1.8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <Typography
            variant="caption"
            sx={{ display: 'block', color: '#475569', mb: 0.5, fontWeight: 700 }}
          >
            Live Highlight Output:
          </Typography>
          <Box sx={{ color: '#0f172a', fontWeight: 500 }}>{renderHighlightedText()}</Box>
        </Box>
      </Box>
    </Paper>
  );
};
