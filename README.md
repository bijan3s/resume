# Full-Stack TypeScript Developer Portfolio

A production-quality, responsive personal portfolio website for a **Full-Stack TypeScript Developer** specializing in real-time dashboards, cybersecurity products, complex frontend systems, automated testing, and performance optimization.

Built with **React 19**, **TypeScript 5**, **Vite 6**, **Material UI (MUI v6)**, **Vitest**, **React Testing Library**, **Playwright**, and **GitHub Actions** for automated static deployment to **GitHub Pages**.

---

## 🚀 Key Features & Highlights

- **Decoupled Data Architecture**: All editable portfolio content is stored in typed data files in `src/data/`. Customize your resume, bio, experiences, and project case studies without altering layout code.
- **Engineering-Focused Visual Design**: Minimalist charcoal slate design system with high-contrast text, tech cyan/emerald accenting, smooth dark/light theme switching, and accessible focus states.
- **Interactive Component Demos**: Embedded live interactive component demonstration for open-source npm package `react-highlight-within`.
- **Zero Horizontal Overflow**: Fully responsive across mobile (360px), tablet (768px), laptop (1024px), desktop (1440px), and large displays.
- **Comprehensive Testing Suite**: Includes unit tests via Vitest & React Testing Library and cross-browser end-to-end tests via Playwright.
- **Automated CI/CD**: Pre-configured GitHub Actions workflows for continuous integration (`ci.yml`) and GitHub Pages deployment (`deploy.yml`).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework & UI** | React 19, Material UI (MUI v6), @emotion/react, @emotion/styled |
| **Build & Tooling** | Vite 6, TypeScript 5, ESLint, Prettier |
| **Testing** | Vitest, React Testing Library, Playwright (E2E) |
| **CI/CD & Hosting** | GitHub Actions, GitHub Pages |

---

## 📋 Prerequisites & Quick Start

### Node.js Requirement
- **Node.js**: `v20.0.0` or higher (Tested on Node v24.15.0)
- **NPM**: `v10.0.0` or higher

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/[GITHUB USERNAME]/portfolio.git
cd portfolio

# 2. Install dependencies
yarn install

# 3. Start local Vite development server
yarn dev

# 4. Open in browser
# http://localhost:5173
```

---

## 💻 Available Commands

| Command | Description |
|---|---|
| `yarn dev` | Starts Vite local development server at `http://localhost:5173` |
| `yarn build` | Compiles TypeScript and builds production static bundle to `dist/` |
| `yarn preview` | Previews the built production static app locally |
| `yarn test` | Runs Vitest unit and component test suite |
| `yarn test:watch` | Runs Vitest in watch mode |
| `yarn test:e2e` | Executes Playwright end-to-end tests across viewports |
| `yarn typecheck` | Validates strict TypeScript compilation without emitting JS |
| `yarn lint` | Runs ESLint check across all codebase files |
| `yarn format` | Formats codebase using Prettier |

---

## 📁 Directory Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml            # Automated CI typecheck, test, and build workflow
│       └── deploy.yml        # GitHub Pages deployment workflow
├── public/
│   ├── favicon.svg           # Tech branding favicon
│   ├── profile-placeholder.svg
│   ├── social-preview-placeholder.svg
│   ├── amnet-dashboard-placeholder.svg
│   ├── amnet-diagram-placeholder.svg
│   ├── mafia-mobile-placeholder.svg
│   ├── mafia-diagram-placeholder.svg
│   ├── mafia-bot-placeholder.svg
│   ├── resume.pdf            # PDF Resume download target
│   └── CNAME                 # Custom domain configuration placeholder
├── src/
│   ├── components/           # Reusable UI elements (Header, Footer, MediaPlaceholder, etc.)
│   ├── data/                 # Content data files (profile, experience, projects, skills, etc.)
│   ├── sections/             # Page sections (Hero, Impact, Experience, Projects, Skills, etc.)
│   ├── theme/                # Custom MUI theme tokens and ThemeProvider context
│   ├── types/                # Strict TypeScript interfaces
│   ├── App.tsx               # Root Application layout
│   ├── index.css             # Global CSS reset & reduced-motion rules
│   └── main.tsx              # Application entry point
├── tests/
│   ├── unit/                 # Vitest & React Testing Library component tests
│   └── e2e/                  # Playwright end-to-end test suite
├── index.html                # Page entry with complete SEO & JSON-LD metadata
├── package.json
├── vite.config.ts            # Vite & Vitest configuration
├── playwright.config.ts      # Playwright E2E configuration
├── tsconfig.json
├── README.md
└── LICENSE
```

---

## ✏️ How to Customize Portfolio Content

All personal data, experience timeline details, project case studies, and skills are stored in `src/data/`:

### 1. Update Profile & Contact Info (`src/data/profile.ts`)
Replace placeholders like `[FULL NAME]`, `[EMAIL ADDRESS]`, `[LINKEDIN URL]`, and `[GITHUB URL]` with your actual details:

```ts
export const profileData: Profile = {
  name: 'Your Name',
  headlineTitle: 'Full-Stack TypeScript Developer',
  email: 'your.email@example.com',
  linkedInUrl: 'https://linkedin.com/in/yourprofile',
  githubUrl: 'https://github.com/yourusername',
  location: 'Neyshabur, Iran',
  openToRelocation: true,
  // ...
};
```

### 2. Replace Profile Image
Add your photo to `public/profile.jpg` (or `profile.png`) and update `profileImage` in `src/data/profile.ts`:

```ts
profileImage: '/profile.jpg',
```
*Note: If the image fails to load or is missing, the site gracefully falls back to a neutral SVG avatar placeholder without breaking layout.*

### 3. Replace Résumé PDF
Drop your official resume file into `public/resume.pdf`. The header and hero download buttons link directly to `/resume.pdf`.

### 4. Add or Edit Project Case Studies (`src/data/projects.ts`)
Each project in `projectsData` adheres to the `Project` interface:

```ts
{
  id: 'my-new-project',
  title: 'Project Title',
  subtitle: 'One-line technical summary',
  context: 'Project background...',
  problem: 'Engineering challenge...',
  role: 'Your specific contributions...',
  technicalApproach: ['Key architecture point 1', 'Key architecture point 2'],
  results: ['Measurable outcome 1', 'Measurable outcome 2'],
  technologies: ['React', 'TypeScript', 'Node.js'],
  links: [{ label: 'View Live App', url: 'https://example.com', isPrimary: true }],
}
```

---

## 🌐 Deploying to GitHub Pages

This project is configured to deploy automatically to GitHub Pages via GitHub Actions when pushing to the `main` or `master` branch.

### 1. Repository Settings Setup
1. On GitHub, go to your repository **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.

### 2. Base Path Handling
The Vite build automatically handles both root domains (`username.github.io`) and sub-path repository URLs (`username.github.io/portfolio/`).
- If deploying to a project repository (`username.github.io/portfolio`), set an environment variable secret `VITE_BASE_PATH` in GitHub Secrets to `/portfolio/`, or let GitHub Actions build using relative assets.

### 3. Custom Domain Setup (Optional)
If using a custom domain (e.g. `portfolio.yourdomain.com`):
1. Add your custom domain to `public/CNAME`.
2. Configure your domain registrar's DNS settings (CNAME or ALIAS record pointing to `username.github.io`).

---

## 🧪 Running Tests

### Unit Tests (Vitest)
```bash
npm run test
```

### End-to-End Tests (Playwright)
```bash
# Install Playwright browser binaries first time
npx playwright install --with-deps chromium

# Execute E2E tests
npm run test:e2e
```

---

## ♿ Accessibility & SEO

- **Accessibility**: Follows WCAG principles with semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`), `h1`–`h3` heading hierarchy, visible focus rings (`:focus-visible`), and system `prefers-reduced-motion` compliance.
- **SEO**: Complete Open Graph tags, Twitter Card metadata, and JSON-LD `Person` structured data embedded in `index.html`.

---

## 📄 License

[MIT License](LICENSE) © 2026 [FULL NAME]
