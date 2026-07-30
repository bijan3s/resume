import { test, expect } from '@playwright/test';
import { profileData } from '../../src/data/profile';

test.describe('Portfolio E2E Tests', () => {
  test('homepage loads with correct title and primary sections', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(
      new RegExp(`${profileData.name} — Full-Stack TypeScript Engineer`, 'i')
    );

    // Verify main section headings
    await expect(
      page.getByRole('heading', { name: 'Full-Stack TypeScript Engineer', level: 1 })
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Professional Experience' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Skills & Technologies' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
  });

  test('contains valid public links and resume download', async ({ page }) => {
    await page.goto('/');

    // Check AMNET public site link
    const amnetLink = page.getByRole('link', { name: /view amnet product website/i });
    await expect(amnetLink).toHaveAttribute('href', 'https://amnet.ir');

    // Check npm package link
    const npmLink = page.getByRole('link', { name: /view on npm/i });
    await expect(npmLink).toHaveAttribute(
      'href',
      'https://www.npmjs.com/package/react-highlight-within'
    );

    // Check resume download link
    const resumeLink = page.getByRole('link', { name: /download résumé \(pdf\)/i }).first();
    await expect(resumeLink).toHaveAttribute('href', './resume.pdf');
  });

  test('no horizontal scroll overflow at 360px mobile width', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto('/');

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
