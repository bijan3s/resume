import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from './theme/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { profileData } from './data/profile';

export const App: React.FC = () => {
  useEffect(() => {
    document.title = `${profileData.name} — ${profileData.headlineTitle}`;
  }, []);

  return (
    <ThemeProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', backgroundColor: '#ffffff' }}>
        {/* Dark Edge-to-Edge Desktop Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            pl: { lg: '300px', xl: '340px' },
            flexGrow: 1,
            position: 'relative',
            backgroundColor: '#ffffff',
            transition: 'padding 0.3s ease',
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              pt: { xs: 4, lg: 6 },
              pb: { xs: 6, lg: 8 },
              px: { xs: 3, sm: 6, lg: 8, xl: 12 },
            }}
          >
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
          </Container>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
