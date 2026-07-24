import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Stack,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { profileData } from '../data/profile';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Engineering Approach', href: '#approach' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        color: '#0f172a',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 68 }, justifyContent: 'flex-end' }}>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                sx={{
                  color: '#475569',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  '&:hover': {
                    color: '#4f46e5',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 'auto' }}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component="a"
              href={profileData.resumeUrl}
              download
              startIcon={<DownloadIcon />}
              sx={{
                fontSize: '0.825rem',
                fontWeight: 600,
              }}
            >
              Download Résumé
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
