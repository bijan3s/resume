import { createServer } from 'vite';
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePdf() {
  console.log('Starting local Vite dev server for PDF generation...');
  const server = await createServer({
    configFile: false,
    root: path.resolve(__dirname, '..'),
    server: { port: 5199 },
  });
  await server.listen();
  console.log('Vite server running at http://localhost:5199');

  console.log('Launching Playwright Chromium...');
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  console.log('Navigating to portfolio page...');
  await page.goto('http://localhost:5199', { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'screen' });

  // Give images and fonts time to render completely
  await page.waitForTimeout(1500);

  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`Document scroll height: ${fullHeight}px`);

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pdfPath = path.join(publicDir, 'resume.pdf');
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    width: '1440px',
    height: `${fullHeight}px`,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
  });

  console.log(`Successfully generated pixel-perfect desktop PDF at: ${pdfPath}`);

  await browser.close();
  await server.close();
}

generatePdf().catch((err) => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
