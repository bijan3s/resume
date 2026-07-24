import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactSection } from '../../src/sections/ContactSection';
import { ThemeProvider } from '../../src/theme/ThemeContext';
import { profileData } from '../../src/data/profile';

describe('ContactSection component', () => {
  const renderContact = () =>
    render(
      <ThemeProvider>
        <ContactSection />
      </ThemeProvider>
    );

  it('renders contact mailto button', () => {
    renderContact();
    const mailLink = screen.getByRole('link', { name: /send email/i });
    expect(mailLink).toHaveAttribute('href', `mailto:${profileData.email}`);
  });

  it('renders location and details', () => {
    renderContact();
    expect(screen.getByText(profileData.location)).toBeInTheDocument();
  });
});
