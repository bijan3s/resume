import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Sidebar } from '../../src/components/Sidebar';
import { ThemeProvider } from '../../src/theme/ThemeContext';
import { profileData } from '../../src/data/profile';

describe('Sidebar component', () => {
  const renderSidebar = () =>
    render(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );

  it('renders profile name, title, location, and relocation status', () => {
    renderSidebar();
    expect(screen.getByText(profileData.name)).toBeInTheDocument();
    expect(screen.getByText(profileData.headlineTitle)).toBeInTheDocument();
    expect(screen.getByText(profileData.location)).toBeInTheDocument();
    expect(screen.getByText('Open to Relocation')).toBeInTheDocument();
  });

  it('renders View / Download Résumé button', () => {
    renderSidebar();
    const resumeBtn = screen.getByRole('link', { name: /download résumé/i });
    expect(resumeBtn).toBeInTheDocument();
    expect(resumeBtn).toHaveAttribute('href', './resume.pdf');
  });

  it('handles profile image load error gracefully with fallback', () => {
    renderSidebar();
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    fireEvent.error(img);
    expect(img.src).toContain('profile-placeholder.svg');
  });
});
