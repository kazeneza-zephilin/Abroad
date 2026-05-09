# Project Overview

A high-conversion Next.js website template for visa application and study abroad agencies in Rwanda.

The site is optimized for:
- SEO
- lead generation
- consultation bookings
- trust building
- mobile conversions

Pages are pre-rendered to static HTML at build time.

Core business goal:
Generate qualified study abroad leads while filtering non-serious applicants through a structured qualification quiz.

---

# Business Context

Target audience:
- Students applying to universities abroad
- Parents funding international education
- Professionals seeking study opportunities overseas
- Applicants looking for visa guidance

Primary services:
- University applications
- Visa application assistance
- Scholarship guidance
- Admission consulting
- Interview preparation
- Document review
- IELTS / Duolingo guidance

Primary conversion actions:
- WhatsApp inquiry
- Consultation booking
- Quiz completion
- Contact form submission

---

# Voice — read before writing any content

When writing any blog post, service page, destination page, quiz result, or customer-facing copy, read the files in `./references/`.

| File | Purpose |
|------|----------|
| `references/voice.md` | Writing style, formatting, rhythm, anti-patterns |
| `references/humour.md` | Brand humour guidelines |
| `references/stats.md` | Real business numbers and metrics |
| `references/stories.md` | Real student stories and anecdotes |
| `references/opinions.md` | Strong opinions supported by numbers |

## Content Rules

Never use:
- "unlock"
- "leverage"
- "seamless"
- "world-class"
- "journey"
- "fast-paced world"
- "dream university"

Never use:
- emojis
- exclamation marks
- fake urgency
- fake scarcity

Writing style:
- Start with the answer
- Use short paragraphs
- Write for mobile reading
- Use real numbers from `stats.md`
- Use plain language
- Explain complicated processes clearly
- Be transparent about timelines and requirements
- Tell users when they may not need an agency

Before shipping any content:
- Re-read `references/voice.md`
- Remove AI-sounding phrasing
- Remove filler
- Remove generic motivational language

---

# SEO Strategy

The website is SEO-first.

Primary keyword clusters:
- study abroad Rwanda
- Canada student visa Rwanda
- UK student visa Rwanda
- Germany study visa
- scholarship opportunities for Rwandan students
- study in Canada from Rwanda
- visa consultants Rwanda
- international education Rwanda

Every important page must target a specific search intent.

---

# Content Structure

## Required Pages

### Home
High-conversion landing page focused on:
- trust
- destinations
- testimonials
- consultation CTA
- qualification quiz CTA

### Destination Pages
Examples:
- Study in Canada
- Study in UK
- Study in Germany
- Study in Australia
- Study in USA

Each destination page should include:
- tuition overview
- visa requirements
- application process
- intakes
- scholarships
- FAQs

### Services Pages
Examples:
- Visa Assistance
- Admission Support
- Scholarship Guidance
- Interview Preparation

### Blog
SEO-focused educational content.

### Testimonials
Real student outcomes and stories.

### Contact
Simple mobile-first contact page.

---

# Qualification Quiz System

The qualification quiz is a core conversion feature.

Purpose:
- Filter non-serious applicants
- Pre-qualify leads
- Improve consultation quality
- Increase conversion rates
- Reduce repetitive screening calls

The quiz must feel:
- professional
- fast
- modern
- helpful

---

# Quiz UX Rules

- Mobile-first
- Multi-step experience
- One question per screen
- Progress indicator
- Clear next-step navigation
- Completion time under 3 minutes
- Minimal friction
- Smooth transitions

Avoid:
- long forms
- large paragraphs
- intimidating wording
- unnecessary questions

---

# Quiz Questions

Possible qualification areas:
- Preferred destination country
- Current education level
- Academic performance
- English proficiency
- Budget range
- Sponsorship availability
- Passport status
- Preferred intake
- Previous visa rejection history

The system should identify:
- high-intent applicants
- scholarship seekers
- urgent applicants
- unqualified leads

---

# Quiz Results

After completion:
- Show personalized recommendations
- Suggest suitable destinations
- Recommend consultation booking
- Trigger WhatsApp CTA
- Guide users toward the next step

Examples:
- "Your profile may qualify for UK foundation programs"
- "Your budget aligns better with German public universities"
- "You may need stronger English test scores first"

Never:
- guarantee visas
- guarantee scholarships
- make unrealistic promises

---

# Quiz SEO Strategy

The quiz should contribute to SEO indirectly.

Requirements:
- Static SEO landing pages for quiz entry points
- Optimized metadata
- FAQ schema
- Internal linking to destination pages
- Search-intent-focused copy around the quiz

Examples:
- "Check Your Canada Study Visa Eligibility"
- "Study Abroad Eligibility Quiz for Rwandan Students"

Quiz pages should target informational + transactional keywords.

---

# On-page SEO

When generating or editing long-form content, read `on-page-seo.md`.

Required:
- FAQ section with FAQPage schema
- Breadcrumbs + BreadcrumbList schema
- Author byline + Person schema
- Table of contents
- 3–5 internal links
- 2–3 authoritative external links
- Open Graph + Twitter Card meta
- Content length aligned with SERP competitors

---

# Technical SEO

Site-wide:
- `app/sitemap.ts`
- `app/robots.ts`
- Canonical URLs
- Open Graph images
- Image dimensions for CLS
- Semantic HTML5 structure
- Static pre-rendering (`output: 'export'`)
- Mobile viewport configuration

---

# UX & Design

The website must feel:
- trustworthy
- premium
- modern
- calm
- clear

Avoid:
- flashy startup visuals
- noisy gradients
- excessive animations
- cluttered layouts

Prioritize:
- whitespace
- readability
- mobile UX
- conversion clarity
- loading speed

---

# Design Rules

- One accent colour only
- Consistent spacing system
- Premium typography
- Subtle animations
- No emoji icons
- No generic gradients
- Large touch targets on mobile

---

# Conversion Requirements

Every important page should include:
- WhatsApp CTA
- Consultation CTA
- Quiz CTA
- Testimonials or proof
- Clear next steps

Lead forms should request only essential information.

---

# Tech Stack

- Language: TypeScript
- Framework: Next.js 15 (App Router)
- Rendering: Static Site Generation (`output: 'export'`)
- Styling: Tailwind CSS
- Content: Flat TypeScript files in `/content/*.ts`
- Deployment: Vercel

---

# SSG Constraints — do NOT break these

- No `cookies()`
- No `headers()`
- No runtime API routes
- No dynamic SSR rendering
- No `force-dynamic`
- Dynamic routes must implement `generateStaticParams`
- All content fetched at build time

---

# Organisation Rules

- One component per file
- Shared components in `/components/`
- Page-specific content in `/content/*.ts`
- Do not create unnecessary folders

---

# Development Rules

## Rule 1: Always read first
Read `CLAUDE.md` before starting any task.

## Rule 2: Define before build
No implementation before structure approval.

## Rule 3: Look before create
Check existing files before creating new ones.

## Rule 4: Test before respond
Run `npm run build` before saying "done".

## Core Rule
Do exactly what is requested. Nothing more.

---

# Testing

Before marking a task complete:

- `npm run build` passes
- Every route shows `○ (Static)`
- HTML source contains rendered content
- JSON-LD schema exists where required
- Mobile responsiveness verified
- Lighthouse performance acceptable
- Voice review completed
- No AI-sounding copy
- No placeholder content

Never say "done" if:
- build fails
- pages are dynamic
- content sounds AI-generated
- mobile UX is broken
- schema is missing
- pages are untested

---

# Scope

Only build what is requested.

If anything is unclear, ask before starting.