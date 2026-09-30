# Good Seed Fellowship (GSF) Website

Modern, responsive informational website for Good Seed Fellowship (GSF) built with:

- React + Vite
- Tailwind CSS
- Reusable components
- Mobile-first responsive design

## Features

- Sticky responsive navbar with mobile menu
- Hero section with call-to-action buttons
- About, Mission, Programs, Resources, FAQ, and Contact sections
- Card-based layouts for programs and resources
- Interactive accordion FAQ
- Contact form UI (frontend only)
- Smooth scrolling and subtle animations
- Professional footer with important links

## Project Structure

```text
GSF-website/
|-- public/
|   |-- gsf-logo.svg.png
|-- src/
|   |-- components/
|   |   |-- layout/
|   |   |   |-- Footer.jsx
|   |   |   |-- Navbar.jsx
|   |   |-- sections/
|   |   |   |-- AboutSection.jsx
|   |   |   |-- ContactSection.jsx
|   |   |   |-- FAQSection.jsx
|   |   |   |-- HeroSection.jsx
|   |   |   |-- MissionSection.jsx
|   |   |   |-- ProgramsSection.jsx
|   |   |   |-- ResourcesSection.jsx
|   |   |-- ui/
|   |   |   |-- Button.jsx
|   |   |   |-- Card.jsx
|   |   |   |-- FAQItem.jsx
|   |   |   |-- LogoMark.jsx
|   |   |   |-- SectionHeader.jsx
|   |-- data/
|   |   |-- siteContent.js
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- .gitignore
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
```

## Prerequisites

Install Node.js 18+ (recommended 20+) so `node` and `npm` are available in your terminal.

## Setup and Run

From the project root:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Where to Edit Content Quickly

Update most text and links in:

- `src/data/siteContent.js`

You can later replace placeholders for:

- GroupMe / Linktree / social links
- Official contact details
- Final FAQ and footer legal links

## Notes

- Current contact form is UI-only and does not submit to a backend.
- The logo is a custom SVG placeholder based on your direction and can be replaced anytime with final media assets.
