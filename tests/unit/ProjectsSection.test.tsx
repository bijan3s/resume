import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from '../../src/sections/ProjectsSection';
import { ThemeProvider } from '../../src/theme/ThemeContext';

describe('ProjectsSection component', () => {
  const renderProjects = () =>
    render(
      <ThemeProvider>
        <ProjectsSection />
      </ThemeProvider>
    );

  it('renders all four case studies', () => {
    renderProjects();
    expect(screen.getByText('AMNET Zero-Trust Network Platform')).toBeInTheDocument();
    expect(screen.getByText('Real-Time Multiplayer Mafia Game')).toBeInTheDocument();
    expect(screen.getByText('react-highlight-within')).toBeInTheDocument();
    expect(screen.getByText('Faraz SMS Panel')).toBeInTheDocument();
  });

  it('renders public links for AMNET and npm package', () => {
    renderProjects();
    const amnetLink = screen.getByRole('link', { name: /view amnet product website/i });
    expect(amnetLink).toHaveAttribute('href', 'https://amnet.ir');

    const npmLink = screen.getByRole('link', { name: /view on npm/i });
    expect(npmLink).toHaveAttribute('href', 'https://www.npmjs.com/package/react-highlight-within');
  });

  it('renders interactive demo component for react-highlight-within', () => {
    renderProjects();
    expect(screen.getByText(/Live Interactive Demo/i)).toBeInTheDocument();
  });
});
