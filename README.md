# Good Seed Fellowship (GSF) Website

Modern, responsive informational website for Good Seed Fellowship (GSF) built with:

- React + Vite
- Tailwind CSS
- Reusable components
- Mobile-first responsive design

## Features

- Sticky responsive navbar with mobile menu
- Hero section with call-to-action buttons
- Shared next-gathering summary and compact event cards, using Eastern time
- Collapsible past meetings and automatic schedule refresh
- About, Mission, Programs, Resources, FAQ, and Contact sections
- Card-based layouts for programs and resources
- Interactive accordion FAQ
- Direct email, phone, GroupMe, and Instagram contact links
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
|   |   |   |-- UpcomingEvents.jsx
|   |   |-- ui/
|   |   |   |-- Button.jsx
|   |   |   |-- Card.jsx
|   |   |   |-- FAQItem.jsx
|   |   |   |-- Icon.jsx
|   |   |   |-- LogoMark.jsx
|   |   |   |-- SectionHeader.jsx
|   |-- data/
|   |   |-- events.js
|   |   |-- siteContent.js
|   |-- lib/
|   |   |-- eventSchedule.js
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

Update meeting dates, times, rooms, and descriptions in `src/data/events.js`.
Keep dates in `YYYY-MM-DD` format and times in `h:mm AM/PM` format. The hero
and event list share the same schedule, refresh each minute and when the window
regains focus, and move meetings into the past section after their Eastern-time
end time. Past meetings remain available in a collapsed list.

## Notes

- The site uses direct contact links; there is no contact form or backend.
- The fellowship emblem is stored in `public/gsf-logo.svg.png`.
- Keyboard navigation includes a skip link, visible focus indicators, and Escape
  to close the mobile menu. Animation respects reduced-motion preferences.
