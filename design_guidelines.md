# Design Guidelines: Cinematic Portfolio for Shradha

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium creative portfolios (Awwwards, Behance) and film/video industry standards. The design should evoke the precision and artistry of professional film editing through bold typography, dramatic spacing, and intentional white space.

## Typography System

**Primary Font**: Google Fonts - 'Inter' for body text (clean, modern readability)
**Display Font**: 'Space Grotesk' or 'Syne' for headlines (cinematic, bold presence)

**Hierarchy**:
- Hero Name: text-7xl to text-9xl (desktop), text-5xl (mobile) - dominant, commanding presence
- Section Headings: text-4xl to text-5xl, medium weight
- Subheadings: text-2xl to text-3xl
- Body Text: text-base to text-lg, leading-relaxed for comfortable reading
- UI Elements: text-sm to text-base

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of 4, 8, 16, 24 (p-4, h-8, m-16, py-24)

**Container Strategy**:
- Full-width sections for cinematic impact (w-full)
- Constrained content: max-w-7xl mx-auto px-8
- Text-heavy sections: max-w-4xl for optimal reading

**Section Padding**: py-24 to py-32 (desktop), py-16 (mobile)

## Component Library

### Navigation
- Fixed header with semi-transparent backdrop blur (backdrop-blur-lg)
- Minimal navigation: Logo/Name left, 4 links right (Home, Projects, About, Contact)
- Hamburger menu for mobile with full-screen overlay transition
- Light/Dark mode toggle icon (top-right)

### Homepage Structure

**Hero Section** (90vh):
- Large typographic treatment of "Shradha" as focal point
- Subtitle: "Video Editor & Graphic Designer" in smaller weight
- Short 1-2 sentence tagline about storytelling/precision
- Subtle scroll indicator at bottom
- No background image - pure typography with generous negative space

**Video Reel Section** (full viewport):
- Embedded 16:9 video player (Vimeo/YouTube embed)
- Maximum width: max-w-6xl
- Video title above: "Latest Reel" or "Featured Work"
- Brief description below in smaller text
- Padding around video for breathing room

**Quick Skills/Specialties Grid** (3 columns desktop, 1 mobile):
- Icon + Title + Brief description for each specialty
- Icons from Heroicons (Film, Sparkles, PaintBrush, etc.)
- Grid layout: grid-cols-1 md:grid-cols-3 gap-12

**CTA Section**:
- "Let's Create Together" headline
- Primary button: "View Projects"
- Secondary text link: "Get in Touch"

### Projects Page

**Grid Layout**:
- Masonry-style or uniform grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each project card: Video thumbnail + overlay on hover
- Title overlays thumbnail (bottom-left positioning)
- On hover: Slight scale transform (scale-105), overlay darkens, "View Project" appears
- Gap between cards: gap-8

**Project Card Specs**:
- Aspect ratio: 16:9 or 4:3 for consistency
- Thumbnail placeholder with subtle gradient overlay
- Category tag (e.g., "YouTube Edit", "Motion Design")

### About Page

**Layout**: Two-column on desktop (md:grid-cols-2), single column mobile
- Left: Professional photo placeholder (rounded-lg, max-w-md)
- Right: Narrative text about creative journey

**Skills Breakdown Section**:
- Four distinct skill categories (Video Editing, Graphic Design, Creative Focus, Specialties)
- Each with icon, title, and bullet points
- Grid layout: grid-cols-1 md:grid-cols-2 gap-16

**Current Role Highlight**:
- Boxed section (border or subtle background treatment)
- "Currently" label, company name (EOXS), role, brief description

### Contact Page

**Layout**: Centered form with max-w-2xl
- Form fields: Full name, Email, Message (textarea)
- Large, touchable input fields (h-12 for inputs, h-32 for textarea)
- Submit button: Full-width on mobile, auto-width on desktop

**Social Links Section** (below form):
- Horizontal row of social icons with labels
- YouTube, Instagram, LinkedIn
- Icon size: w-6 h-6, with hover scale effect

## Images

**About Page**: 
- Professional portrait placeholder (400x500px or similar portrait ratio)
- Positioned left column, with text wrapping right
- Rounded corners (rounded-lg)

**Projects Page**:
- Video thumbnail placeholders for each project (16:9 ratio)
- Minimum 6-9 project thumbnails to showcase range
- Placeholder should suggest video content (play button overlay, film grain texture)

**No large hero images** - The homepage hero is pure typography-focused for cinematic minimalism.

## Animations & Interactions

**Subtle, Film-Inspired Transitions**:
- Page transitions: Smooth fade (300ms duration)
- Scroll-triggered fade-ins for sections (intersection observer)
- Hover states: Gentle scale transforms (scale-105) on project cards
- Button hovers: Slight translate-y movement
- Navigation: Smooth scroll behavior

**Light/Dark Mode Toggle**:
- Smooth transition between modes (transition-all duration-300)
- Icon rotation on toggle
- Persist preference in localStorage

## Responsive Breakpoints

- Mobile: Base styles (< 768px)
- Tablet: md: (768px+) - 2 columns where applicable
- Desktop: lg: (1024px+) - Full multi-column layouts
- Wide: xl: (1280px+) - Maximum content width constraints

## Key Design Principles

1. **Cinematic Negative Space**: Don't fear emptiness - embrace dramatic spacing
2. **Typography as Art**: Large, bold typefaces create visual hierarchy and drama
3. **Precision Alignment**: Everything grid-aligned, no arbitrary positioning
4. **Subtle Motion**: Transitions enhance, never distract from content
5. **Content-First**: Work showcases take center stage, UI supports quietly

This portfolio should feel like a carefully edited film - intentional, refined, and visually striking.