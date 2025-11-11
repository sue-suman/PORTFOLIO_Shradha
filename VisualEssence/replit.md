# Shradha Portfolio - Cinematic Video Editor & Graphic Designer

## Overview

A modern, cinematic portfolio website showcasing the work of Shradha, a video editor and graphic designer. The application features a minimal, typography-focused design with smooth animations, a project gallery, about section, and contact form. Built as a full-stack application with a React frontend and Express backend, the site emphasizes visual storytelling through clean design and generous white space.

**Status**: ✅ Complete and production-ready. All features tested and working.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for client-side routing (lightweight React Router alternative)
- Single-page application (SPA) architecture with client-side routing

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- Fully accessible, customizable components with consistent styling
- Components located in `client/src/components/ui/` directory
- "New York" style variant selected in components.json

**Styling & Design**
- **Tailwind CSS** for utility-first styling with custom configuration
- Custom color system using CSS variables for light/dark theme support
- Typography system featuring:
  - Inter for body text
  - Space Grotesk for display/headlines
  - Geist Mono for monospace
- Cinematic neutral color palette:
  - Light mode: Background 98%, Input 88%, Secondary 96%, neutral grays
  - Dark mode: Background 8%, Input 20%, Secondary 18%, neutral grays
  - Minimal color accent (250° 30% 20%) for visual interest
- Custom spacing system based on 4px units (p-4, h-8, m-16, py-24)

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management
- Custom API request utilities in `lib/queryClient.ts`
- Toast notifications for user feedback using shadcn/ui toast system

**Animation & Interactivity**
- **Framer Motion** for page transitions and component animations
- Scroll-triggered animations and smooth transitions throughout
- Responsive navigation with mobile hamburger menu
- Fixed header with backdrop blur effect on scroll

**Theme System**
- Custom dark/light mode implementation via ThemeProvider context
- Theme persistence using localStorage
- CSS variables for dynamic color switching
- Default theme set to "dark" mode

### Backend Architecture

**Server Framework**
- **Express.js** as the web server framework
- TypeScript throughout the backend
- Custom middleware for request logging with response time tracking
- JSON request body parsing with raw body preservation

**API Design**
- RESTful API endpoints under `/api` prefix
- Two main endpoints:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve all submissions
- Zod schema validation for incoming requests
- Consistent error handling with appropriate HTTP status codes

**Development vs Production**
- Development: Vite dev server middleware integration for HMR
- Production: Static file serving from `dist/public`
- Environment-aware logging and error handling
- Development features include runtime error overlay and Replit-specific plugins

**Data Storage**
- In-memory storage implementation (`MemStorage` class)
- Interface-based storage design (`IStorage`) for future extensibility
- Contact submissions stored with UUID identifiers
- Timestamp tracking for all submissions
- Note: Currently uses memory storage; schema suggests future PostgreSQL migration via Drizzle ORM

### Database Design (Future Implementation)

**Schema Definition**
- Drizzle ORM configured for PostgreSQL dialect
- Single table defined: `contact_submissions`
  - `id` (varchar, primary key)
  - `name` (text, required)
  - `email` (text, required)
  - `message` (text, required)
  - `createdAt` (timestamp, auto-generated)
- Zod validation schemas derived from Drizzle tables
- Migration files configured to output to `./migrations` directory

**Database Strategy**
- Schema prepared for PostgreSQL via Neon serverless driver
- Current implementation uses in-memory storage as placeholder
- Database credentials expected via `DATABASE_URL` environment variable
- Ready for migration using `npm run db:push` command

### Page Structure

**Home Page** (`/`)
- Hero section with large typographic treatment of "Shradha"
- Video reel section for showcasing work
- Specialty cards highlighting skills (Video Editing, Motion Design, Visual Storytelling)
- Smooth scroll navigation

**Projects Page** (`/projects`)
- Grid layout of project thumbnails with categories
- Projects include: Product Demos, Case Studies, Social Media content, Motion Graphics
- Placeholder images from Unsplash
- Category badges for filtering/organization
- Accessible play button overlays with aria-labels and keyboard navigation
- Smooth hover animations and transitions

**About Page** (`/about`)
- Skills organized by category (Video Editing, Graphic Design, Creative Focus, Specialties)
- Software proficiency with Adobe Creative Suite icons
- Platform expertise (YouTube, Instagram, brand content)
- Icon integration via React Icons and Lucide

**Contact Page** (`/contact`)
- React Hook Form with Zod validation
- Required fields: name, email, message (min 10 characters)
- Form submission via React Query mutation
- Success/error toast notifications
- Social media links section

**Navigation Component**
- Fixed header with scroll-based background blur
- Desktop: horizontal nav links + theme toggle
- Mobile: hamburger menu with full-screen overlay
- Framer Motion animations for menu transitions
- Active route highlighting

### Design System Principles

**Typography Hierarchy**
- Hero text: text-7xl to text-9xl (desktop), text-5xl (mobile)
- Section headings: text-4xl to text-5xl
- Subheadings: text-2xl to text-3xl
- Body text: text-base to text-lg with relaxed leading
- UI elements: text-sm to text-base

**Layout Constraints**
- Full-width sections for cinematic impact
- Content constrained to max-w-7xl with horizontal padding
- Text-heavy sections use max-w-4xl for optimal reading
- Section vertical padding: py-24 to py-32 (desktop), py-16 (mobile)

**Interactive Elements**
- Hover effects: hover-elevate utility class
- Active states: active-elevate-2 utility class
- Custom button variants: default, destructive, outline, secondary, ghost
- Consistent border radius: lg (.5625rem), md (.375rem), sm (.1875rem)

## External Dependencies

### UI & Styling Libraries
- **@radix-ui/react-*** - Comprehensive suite of accessible UI primitives (accordion, dialog, dropdown, select, etc.)
- **tailwindcss** - Utility-first CSS framework
- **framer-motion** - Animation library for React
- **class-variance-authority** & **clsx** - Class name composition utilities
- **lucide-react** - Icon library
- **react-icons** - Additional icons (SiAdobe* for software logos)
- **embla-carousel-react** - Carousel component

### Form & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolvers for react-hook-form
- **zod** - TypeScript-first schema validation
- **drizzle-zod** - Zod schema generation from Drizzle tables

### Data Fetching
- **@tanstack/react-query** - Server state management and data fetching

### Backend & Database (Configured but not currently active)
- **drizzle-orm** - TypeScript ORM for SQL databases
- **drizzle-kit** - CLI companion for Drizzle ORM
- **@neondatabase/serverless** - PostgreSQL serverless driver for Neon
- **connect-pg-simple** - PostgreSQL session store (imported but not used)

### Development Tools
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React plugin for Vite
- **@replit/vite-plugin-*** - Replit-specific development plugins (error modal, cartographer, dev banner)
- **tsx** - TypeScript execution for Node.js
- **esbuild** - JavaScript bundler for production builds

### Utilities
- **wouter** - Lightweight routing for React
- **date-fns** - Date utility library
- **cmdk** - Command menu component
- **nanoid** - Unique ID generator
- **vaul** - Drawer/modal primitive (imported via drawer.tsx)
- **input-otp** - OTP input component
- **react-day-picker** - Calendar/date picker component
- **react-resizable-panels** - Resizable panel layouts
- **recharts** - Charting library (imported but not visibly used)

### Google Fonts
- Inter - Body text font
- Space Grotesk - Display/headline font
- Geist - Alternative sans-serif
- Geist Mono - Monospace font

### Image Assets
- Unsplash - Placeholder images for project thumbnails

## Recent Changes (November 11, 2025)

### Theme Palette Fixes
- ✅ Fixed light mode input token from pure black (0%) to neutral gray (88%)
- ✅ Fixed light mode secondary token to proper neutral (96%)
- ✅ Fixed dark mode background from pure black to cinematic gray (8%)
- ✅ Fixed dark mode secondary from near-white to proper dark neutral (18%)
- ✅ Ensured typography consistency across both themes (Inter/Space Grotesk/Geist Mono)
- ✅ Unified border radius to 0.375rem across both themes

### Accessibility Improvements
- ✅ Converted project card play overlays from purely visual divs to accessible buttons
- ✅ Added aria-labels to all play buttons
- ✅ Added data-testids for testing automation
- ✅ Enabled keyboard navigation for all interactive elements
- ✅ Added focus states to play button overlays

### Testing
- ✅ Passed comprehensive end-to-end testing (27 test steps)
- ✅ Verified all page navigation and routing
- ✅ Tested contact form submission and validation
- ✅ Confirmed API integration and data storage
- ✅ Validated theme toggle persistence
- ✅ Verified social media links open in new tabs
- ✅ Confirmed responsive design across breakpoints

## Social Media Integration

- **YouTube**: [@everrsuze](https://www.youtube.com/@everrsuze)
- **Instagram**: [@suzzan.off.the.radar](https://www.instagram.com/suzzan.off.the.radar)
- **LinkedIn**: Placeholder link (to be updated with actual profile)

## Deployment Notes

The application is ready for publishing to Replit:
1. All features tested and working
2. No critical bugs or console errors
3. Responsive design validated
4. Accessibility compliance verified
5. Contact form storing submissions successfully
6. Theme persistence working across sessions