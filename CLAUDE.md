# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

K-NOMAD is a Korean digital nomad lifestyle platform built with Next.js 15.5.2, React 19, and Supabase. The application helps digital nomads find suitable cities in Korea by providing information about living costs, internet speeds, and community resources in both Korean and English.

## Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Building
npm run build        # Production build
npm start           # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix auto-fixable ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check Prettier formatting
```

## Architecture Overview

### Core Tech Stack
- **Next.js 15.5.2** with App Router (`src/app/` directory structure)
- **React 19** with TypeScript
- **Supabase** for authentication and backend services
- **Tailwind CSS v4** with custom utility classes and Korean typography support
- **Radix UI** components for accessible UI primitives

### Authentication & Security
- Supabase SSR authentication with middleware-based route protection
- Protected routes automatically redirect unauthenticated users to `/login`
- Authentication utilities in `src/utils/supabase/` (separate client/server implementations)
- Middleware (`middleware.ts`) handles authentication state and redirects

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/callback/      # Supabase auth callback
│   ├── login/              # Login page with server actions
│   ├── register/           # Registration page with server actions  
│   ├── error/              # Error handling page
│   ├── layout.tsx          # Root layout with Header/Footer
│   └── page.tsx            # Homepage (HeroSection + PopularCities)
├── components/
│   ├── ui/                 # Reusable UI components (Button, Input, Card, etc.)
│   ├── layout/             # Layout components (Header, Footer, Navigation)
│   ├── sections/           # Page sections (HeroSection, PopularCities, SearchFilter)
│   └── cards/              # Card components (CityCard)
├── lib/
│   └── utils.ts            # Utility functions (cn for className merging)
├── types/
│   └── index.ts            # TypeScript type definitions (City, User, Review, etc.)
├── utils/
│   └── supabase/           # Supabase client configurations (client.ts, server.ts)
└── data/                   # Static data (cities.ts)
```

### Styling & Design System
- **Tailwind CSS v4** with custom color palette and Korean font support
- **Pretendard** font for Korean text, **Outfit** for English elements
- Custom utilities: `.k-nomad-gradient`, `.k-nomad-text-gradient`, `.k-nomad-card-hover`
- Dark mode support with CSS custom properties
- Responsive grid classes: `.city-grid`, `.stats-grid`, `.features-grid`

### Component Patterns
- UI components follow Radix UI + Tailwind pattern with `cn()` utility
- Server Actions in route-specific `actions.ts` files for form handling
- TypeScript interfaces define props and data structures
- Components use Korean/English dual language support

### Authentication Flow
1. Middleware checks authentication status on all routes
2. Unauthenticated users redirected to `/login` (except `/auth`, `/register`, `/error`)
3. Login/Register pages use Server Actions for authentication
4. Successful auth redirects through `/auth/callback` route
5. Protected routes accessible after authentication

## Development Guidelines

### TypeScript Configuration
- Strict mode enabled with path mapping (`@/*` → `./src/*`)
- ESLint configured with Next.js and TypeScript rules
- Prettier integration for consistent code formatting

### Environment Variables Required
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Code Style
- Use TypeScript for all new files
- Follow established component patterns in `src/components/ui/`
- Utilize custom Tailwind utilities for consistent styling
- Implement proper Korean language support using Pretendard font
- Use Server Actions for form submissions in app router pages

### Testing & Deployment
- No test framework currently configured
- ESLint rules include Next.js core web vitals and TypeScript best practices
- Production builds require all environment variables

## Important: Quality Assurance

**Always run these commands after completing any work to ensure code quality:**

```bash
npm run lint        # Check for linting issues
npm run format:check # Check code formatting
```

**If there are any issues, fix them before completing the task:**

```bash
npm run lint:fix    # Auto-fix linting issues
npm run format      # Auto-format code
```

Note: TypeScript checking is automatically handled by Next.js during development and build processes. If you encounter TypeScript errors, resolve them before marking any task as complete.