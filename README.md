# Wei Kuo - Personal Portfolio

A modern, responsive portfolio website showcasing my professional experience, research contributions, projects, and certifications in AI, Machine Learning, and Software Engineering.

## About

This portfolio highlights my journey as an AI & Automation Engineer, Computer Science graduate from NYU Abu Dhabi, and my work across machine learning research, full-stack development, and intelligent automation systems.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Routing**: React Router
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Clone the repository
git clone https://github.com/[username]/its-wei.git

# Navigate to the project directory
cd its-wei

# Install dependencies
npm install

# Start development server (runs on http://localhost:8080)
npm run dev
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (Radix primitives)
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About & skills section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Experience.tsx  # Experience section wrapper
│   ├── ExperienceTimeline.tsx  # Timeline component
│   ├── Research.tsx    # Research publications
│   ├── Projects.tsx    # Projects section wrapper
│   ├── ProjectsShowcase.tsx  # Project cards display
│   ├── CertificatesCarousel.tsx  # Certificates slider
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer section
│   ├── SocialLinks.tsx # Social media links
│   ├── PaperModal.tsx  # Research paper viewer
│   ├── PDFModal.tsx    # PDF document viewer
│   ├── ResumeModal.tsx # Resume viewer
│   └── ParticlesBackground.tsx  # Animated background
├── pages/              # Page components
│   ├── Index.tsx       # Main single-page layout
│   └── NotFound.tsx    # 404 page
├── data/               # Centralized data
│   ├── certificates.ts # Certificates data
│   ├── experiences.ts  # Work experience data
│   ├── projects.ts     # Projects data
│   ├── research.ts     # Research publications data
│   └── skills.ts       # Skills data
├── config/             # Configuration files
│   ├── navigation.ts   # Navigation configuration
│   ├── socialLinks.ts  # Social media links config
│   └── constants.ts    # App constants
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static assets
├── App.tsx             # Root app component
├── App.css             # App-specific styles
├── main.tsx            # Application entry point
└── index.css           # Global styles & Tailwind imports
```

## Features

- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Smooth Animations**: Framer Motion animations with intersection observers
- **Dark Theme**: Professional dark theme with cyan accent colors
- **Interactive Sections**: Dynamic timeline, project showcase, certificates carousel
- **SEO Optimized**: Meta tags for social media sharing
- **Type Safe**: Full TypeScript implementation
- **Performance**: Optimized with Vite and React SWC

## Deployment

This site is deployed on GitHub Pages at: `https://[username].github.io/its-wei/`

Deployment is automated via GitHub Actions. Every push to the `main` branch triggers a new build and deployment.

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build ready for deployment
```

## Customization

### Updating Content

- **Personal Info**: Edit `src/components/Hero.tsx` and `src/components/About.tsx`
- **Experience**: Update `src/components/ExperienceTimeline.tsx`
- **Projects**: Modify `src/components/ProjectsShowcase.tsx`
- **Research**: Edit `src/components/Research.tsx`
- **Contact**: Update `src/components/Contact.tsx`

### Styling

- **Colors**: Modify CSS variables in `src/index.css`
- **Tailwind Config**: Edit `tailwind.config.ts` for custom animations and theme extensions
- **Component Styles**: Use Tailwind utility classes and the `cn()` helper from `src/lib/utils.ts`

## License

This project is open source and available for personal use.

## Contact

- **Email**: ck3294@nyu.edu
- **LinkedIn**: [chen-wei-kuo](https://linkedin.com/in/chen-wei-kuo)
- **GitHub**: [WeiKuoWei](https://github.com/WeiKuoWei)
