# Personal Portfolio

A dark-themed, single-page developer portfolio built with React and Vite. Features animated sections, project case studies, a built-in article reader, and a tag-filtered articles archive — all without any routing library.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Custom CSS (CSS Variables + Glassmorphism) |
| Icons | Lucide React |
| Compiler | React Compiler (Babel plugin) |

## Features

- **Animated Hero** — Typewriter terminal card, floating orbs, and staggered title entrance
- **Sidebar Navigation** — Fixed vertical nav with active section tracking via `IntersectionObserver`
- **Project Case Studies** — Full detail pages with cover image, architecture breakdown, and tech stack
- **Article Reader** — Inline reading progress bar, section numbering, excerpt lead block
- **Articles Archive** — Dedicated page showing all articles with tag-based filtering
- **Responsive** — Mobile-first layout; sidebar collapses to a horizontal top bar on small screens

## Project Structure

```
src/
├── components/
│   ├── article/
│   │   └── ArticleDetail.jsx     # Full article reader with reading progress
│   ├── common/
│   │   └── CoverImage.jsx
│   ├── layout/
│   │   └── Sidebar.jsx           # Fixed vertical nav
│   ├── project/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectDetail.jsx     # Case study page
│   │   ├── ProjectMeta.jsx
│   │   └── ArchitectureList.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectsSection.jsx
│       ├── ArticlesSection.jsx   # Shows latest 3 articles
│       └── ContactSection.jsx
├── data/
│   ├── projects.js               # Project content source
│   └── articles.js               # Article content source
├── hooks/
│   └── useActiveSection.js       # IntersectionObserver hook
├── pages/
│   ├── HomePage.jsx
│   └── AllArticlesPage.jsx       # Full archive with tag filter
└── App.jsx                       # View state router (no external router)
```

## Navigation / View States

The app manages views through local state in `App.jsx` — no React Router needed.

```
HomePage
 ├── click project card  →  ProjectDetail  →  back  →  HomePage
 ├── click article card  →  ArticleDetail  →  back  →  HomePage
 └── "View All" button   →  AllArticlesPage
                               └── click article  →  ArticleDetail  →  back  →  AllArticlesPage
```

## Content

All content lives in `src/data/`. Adding a new project or article is a matter of appending a new object to the relevant array — no component changes needed.

**Articles** (`articles.js`) — each entry has:
`id`, `badge`, `badgeColor`, `title`, `date`, `readTime`, `tags`, `excerpt`, `sections[]`

**Projects** (`projects.js`) — each entry has:
`badge`, `title`, `subtitle`, `role`, `timeline`, `platform`, `tech[]`, `coverImage`, `sideImage`, `overview[]`, `architecture[]`

## Getting Started

```bash
npm install
npm run dev
```

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint
```

## Design Tokens

Core CSS variables defined in `App.css`:

```css
--bg-dark: #070b14
--bg-panel: rgba(13, 20, 36, 0.6)   
--accent-blue: #3b82f6
--accent-cyan: #22d3ee
--accent-purple: #c084fc
--accent-emerald: #34d399
--text-main: #cbd5e1
--text-muted: #94a3b8
```
# myCV
