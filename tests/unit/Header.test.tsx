import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '../../src/components/Header';
import { ThemeProvider } from '../../src/theme/ThemeContext';

describe('Header component', () => {
  const renderHeader = () =>
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

  it('renders navigation links', () => {
    renderHeader();
    expect(screen.getAllByText('Experience')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Projects')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Engineering Approach')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Skills')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact')).toHaveLength(1);
  });

  it('renders Download Résumé button', () => {
    renderHeader();
    const resumeBtn = screen.getAllByRole('link', { name: /download résumé/i })[0];
    expect(resumeBtn).toBeInTheDocument();
    expect(resumeBtn).toHaveAttribute('href', '/resume.pdf');
  });
});
