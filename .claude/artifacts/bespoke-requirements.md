# Entono — Bespoke Requirements

**Project:** Entono (High Fashion Autumn Wear Brand)
**Generated:** 2026-05-01

---

## Feature Requirements

### feat-001: Single-Page Scroll Experience
- **Category:** feature
- **Description:** Single-page landing site with smooth scroll navigation between sections (Hero, Collections, Lookbook, About, Contact)
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /
- **Acceptance Criteria:**
  - Nav links scroll to correct sections via anchor navigation
  - Smooth scroll behavior enabled
  - Hero section fills full viewport height
- **Priority:** critical

### feat-002: Lookbook Lightbox
- **Category:** feature
- **Description:** Click-to-open lightbox for lookbook images with smooth scale animation and close button
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /lookbook
- **Acceptance Criteria:**
  - Clicking a lookbook image opens full-screen lightbox
  - Close button and backdrop click dismiss lightbox
  - Image caption displayed below lightbox image
- **Priority:** high

### feat-003: Hero Parallax Scrolling
- **Category:** feature
- **Description:** Hero section with parallax background image, content fade-out on scroll, and subtle scale effect
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /
- **Acceptance Criteria:**
  - Background image moves at different scroll rate than foreground content
  - Hero content fades out as user scrolls down
  - Subtle scale effect on background image during scroll
- **Priority:** high

### feat-004: Scroll-Triggered Animations
- **Category:** feature
- **Description:** Sections animate in on scroll using Framer Motion's useInView hook with staggered delays
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /
- **Acceptance Criteria:**
  - Each section fades up into view when scrolled into viewport
  - Staggered delays create cascading effect within sections
  - Animations only fire once (not on re-entry)
- **Priority:** high

### feat-005: Collection Hover Interactions
- **Category:** feature
- **Description:** Collection cards with hover lift effect, image zoom, and expandable description
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /collections
- **Acceptance Criteria:**
  - Hovering a collection card lifts it with Y translation
  - Image zooms slightly on hover
  - Description text expands below card on hover
- **Priority:** high

### feat-006: Contact Form with Submit Feedback
- **Category:** feature
- **Description:** Contact form with name, email, message fields and animated submit confirmation
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /contact
- **Acceptance Criteria:**
  - Form validates required fields
  - Submit shows "Thank you" confirmation animation
  - Form resets after 3 seconds
- **Priority:** medium

### feat-007: Sticky Transparent-to-Solid Navigation
- **Category:** feature
- **Description:** Fixed header that transitions from transparent to frosted glass on scroll
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** /
- **Acceptance Criteria:**
  - Nav is transparent at page top
  - Becomes bg-oat/90 with backdrop-blur-md after scrolling 60px
  - Mobile hamburger menu with animated icon transitions
- **Priority:** critical

---

## Design Requirements

### design-001: Warm Earth Tone Palette
- **Category:** design
- **Description:** Curated warm earth tone palette — oat, charcoal, warm gray, umber, sienna — conveying autumn luxury
- **Testable:** false
- **Test Strategy:** manual-visual
- **Page:** *
- **Acceptance Criteria:**
  - All CSS custom properties defined in globals.css @theme
  - Colors consistent across all sections
  - No deviation from established palette
- **Priority:** critical

### design-002: Typography Hierarchy — Playfair + Inter
- **Category:** design
- **Description:** Playfair Display for display/headings, Inter for body text. Ultra-tight tracking on brand name, wide tracking on labels
- **Testable:** false
- **Test Strategy:** manual-visual
- **Page:** *
- **Acceptance Criteria:**
  - Playfair Display loaded via next/font/google
  - Inter loaded via next/font/google
  - Custom tracking tokens (--tracking-ultra, --tracking-wide, --tracking-widest) applied correctly
- **Priority:** critical

### design-003: Luxurious Minimal Aesthetic
- **Category:** design
- **Description:** High-fashion minimalist aesthetic with generous whitespace, large display typography, and editorial-style image grids
- **Testable:** false
- **Test Strategy:** manual-visual
- **Page:** *
- **Acceptance Criteria:**
  - Sections use generous padding (py-32 md:py-48)
  - Large display headings (text-4xl to text-9xl)
  - Image grids use tight gaps (gap-3 md:gap-4) for editorial feel
- **Priority:** high

### design-004: Custom Scrollbar & Selection Styling
- **Category:** design
- **Description:** Custom scrollbar with warm gray thumb, umber selection background
- **Testable:** false
- **Test Strategy:** manual-visual
- **Page:** *
- **Acceptance Criteria:**
  - Custom scrollbar with 6px width
  - Selection uses umber background with oat text
- **Priority:** low

---

## Content Requirements

### content-001: Three Collections Displayed
- **Category:** content
- **Description:** Three collections displayed — SS26 "Gilded Afternoon", FW25 "Amber & Stone", RES25 "Last Light"
- **Testable:** true
- **Test Strategy:** manual-visual
- **Page:** /collections
- **Acceptance Criteria:**
  - All three collections rendered with name, title, description, image
  - Collection images loaded from /images/
- **Priority:** critical

### content-002: Lookbook — 5+ Editorial Images
- **Category:** content
- **Description:** Lookbook section with 5 editorial images in masonry-style grid with captions
- **Testable:** true
- **Test Strategy:** manual-visual
- **Page:** /lookbook
- **Acceptance Criteria:**
  - All lookbook images rendered in grid
  - Each image has caption overlay on hover
- **Priority:** critical

### content-003: Brand Story & Stats
- **Category:** content
- **Description:** About section with brand philosophy text, atelier image, and stats (Founded 2019, 12 Collections, 1 Season)
- **Testable:** true
- **Test Strategy:** manual-visual
- **Page:** /about
- **Acceptance Criteria:**
  - Brand philosophy text rendered in three paragraphs
  - Stats grid shows 2019, 12, 1 with labels
- **Priority:** high

### content-004: Contact Information & Form
- **Category:** content
- **Description:** Contact section with email addresses, Paris atelier address, and contact form
- **Testable:** true
- **Test Strategy:** manual-visual
- **Page:** /contact
- **Acceptance Criteria:**
  - hello@entono.com, press@entono.com displayed
  - Paris address displayed
  - Contact form with name, email, message fields
- **Priority:** critical

---

## Constraint Requirements

### constraint-001: No Backend / No Database
- **Category:** constraint
- **Description:** Single-page static site — no backend, no database, no CMS. All content is statically embedded in components
- **Testable:** true
- **Test Strategy:** code-review
- **Page:** *
- **Acceptance Criteria:**
  - No Prisma / database models
  - No API routes for content
  - All data embedded in component files
- **Priority:** critical

### constraint-002: No E-Commerce / No Checkout
- **Category:** constraint
- **Description:** Brand showcase site only — no shopping cart, no product pages, no payment integration
- **Testable:** true
- **Test Strategy:** code-review
- **Page:** *
- **Acceptance Criteria:**
  - No cart or checkout flows
  - No product detail pages
- **Priority:** critical

### constraint-003: Mobile-First Responsive Design
- **Category:** constraint
- **Description:** Site must work on mobile with hamburger menu, stacked layouts, and touch-friendly interactions
- **Testable:** true
- **Test Strategy:** playwright-interaction
- **Page:** *
- **Acceptance Criteria:**
  - Mobile nav uses hamburger menu with full-screen overlay
  - Grid layouts stack to single column on mobile
  - Touch targets are adequately sized
- **Priority:** critical

### constraint-004: Image Assets Pre-loaded
- **Category:** constraint
- **Description:** All images are pre-generated editorial photos stored in /public/images/ — no dynamic image generation or CDN
- **Testable:** true
- **Test Strategy:** code-review
- **Page:** *
- **Acceptance Criteria:**
  - All images reference /images/entono_*.png
  - No external image URLs
- **Priority:** medium

---

## Metadata

| Metric | Value |
|--------|-------|
| Total Requirements | 17 |
| Testable | 12 |
| Manual Only | 5 |
| Critical Priority | 8 |
| High Priority | 5 |
| Medium Priority | 3 |
| Low Priority | 1 |

### By Category
- Feature: 7
- Design: 4
- Content: 4
- Constraint: 4

### Anticipated Handoffs
- `bespoke-requirements.json` → Review stage (bespoke interaction tests)
- `brief.json` → Research stage (competitive analysis context)

### Dependencies
- `framer-motion` — all animations
- `tailwindcss` v4 — styling system
- `next/font/google` — Playfair Display + Inter fonts
- `lucide-react` — available but not yet used in current components
- `@radix-ui/react-slot` — available but not yet used
