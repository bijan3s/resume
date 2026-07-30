import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from '../../src/sections/HeroSection';
import { ThemeProvider } from '../../src/theme/ThemeContext';

describe('HeroSection component', () => {
  const renderHero = () =>
    render(
      <ThemeProvider>
        <HeroSection />
      </ThemeProvider>
    );

  it('renders primary positioning headline', () => {
    renderHero();
    expect(screen.getByText('Full-Stack TypeScript Engineer')).toBeInTheDocument();
  });

  it('renders core skills proof points', () => {
    renderHero();
    expect(screen.getByText('React, Next.js & React Native')).toBeInTheDocument();
    expect(screen.getByText('Real-Time Systems & Automated Testing')).toBeInTheDocument();
    expect(screen.getByText('Node.js & NestJS')).toBeInTheDocument();
    expect(screen.getByText('3+ Years of Experience')).toBeInTheDocument();
  });

  it('renders View Projects and Download Résumé buttons', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download résumé/i })).toBeInTheDocument();
  });
});
