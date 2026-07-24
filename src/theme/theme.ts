import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4f46e5', // Rich Indigo Primary
      light: '#6366f1',
      dark: '#3730a3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#059669', // Emerald Accent
      light: '#10b981',
      dark: '#047857',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff', // Clean white background for main section
      paper: '#f8fafc', // Crisp card surface
    },
    text: {
      primary: '#0f172a', // Deep charcoal/slate text for high contrast readability
      secondary: '#475569',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    subtitle1: {
      lineHeight: 1.7,
      fontSize: '1.05rem',
    },
    body1: {
      lineHeight: 1.85, // Generous spacious text reading height
      fontSize: '1.025rem',
    },
    body2: {
      lineHeight: 1.75,
      fontSize: '0.925rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
          '&:focus-visible': {
            outline: '2px solid #4f46e5',
            outlineOffset: '2px',
          },
        },
        containedPrimary: {
          color: '#ffffff !important',
          backgroundColor: '#4f46e5',
          boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
          '&:hover': {
            backgroundColor: '#3730a3',
            boxShadow: '0 6px 20px rgba(79, 70, 229, 0.45)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(79, 70, 229, 0.4)',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.06)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
          backgroundColor: '#ffffff',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            borderColor: 'rgba(79, 70, 229, 0.3)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
});
