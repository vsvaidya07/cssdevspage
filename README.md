# Vidhathri Vaidya — Developer Portfolio (React)

A dark-terminal developer portfolio rebuilt with **React + Vite** from the Week 01 HTML / Week 02 CSS version.

## Run it

```bash
npm install
npm run dev       # development server with hot reload
npm run build     # production build into dist/
npm run preview   # preview the production build
```

Needs Node.js 18 or newer.

## Project structure

```
src/
├── main.jsx                 entry point
├── App.jsx                  page layout, theme state, scroll-spy
├── styles.css               all styling (CSS Grid + Flexbox, responsive, dark/light tokens)
├── data/portfolio.js        ALL content as arrays/objects — edit your info here
├── hooks/
│   ├── useInView.js         scroll-reveal helper
│   └── useMediaQuery.js     media query as React state
└── components/
    ├── About.jsx            About Me
    ├── Skills.jsx           Skills (category filter + click for details)
    ├── SkillCard.jsx
    ├── Projects.jsx         Projects (category filter)
    ├── ProjectCard.jsx
    ├── Academics.jsx        animated score bars
    ├── Activities.jsx
    ├── Contact.jsx          contact links + copy-email button
    ├── Navbar.jsx           sidebar / mobile top bar with morphing highlight
    ├── FilterChips.jsx      reusable filter buttons
    ├── Section.jsx          shared section wrapper
    ├── BootScreen.jsx       typed boot sequence
    ├── ThemeToggle.jsx      dark / light switch
    └── Uptime.jsx           live uptime counter
```

## How it meets the brief

| Requirement | Where |
|---|---|
| React project set up properly | Vite + `package.json`, `vite.config.js` |
| Separate About / Skills / Projects / Contact components | `src/components/` |
| JSX | every component |
| Props | `App` passes data arrays down, e.g. `<Skills skills={skills} />`, `<ProjectCard project={project} />` |
| Arrays + `map()` | skills, projects, academics, activities, contact, nav, filter chips |
| State | `useState` for filters, selected skill, theme, boot screen, copy button, active nav link |
| Responsive | Grid sidebar layout → single column + sticky top nav under 720px |
| Bonus: dark/light toggle | `ThemeToggle` + `theme` state in `App` (saved in localStorage) |
| Bonus: project filter / interactive skills | `Projects`, `Skills`, `FilterChips` |
| Bonus: separate files | one component per file |

## Editing your content

Open `src/data/portfolio.js` — add a skill, project or activity by adding one object to its array and the page updates automatically.
Check the LinkedIn URL in the `contact` array matches your real profile.

## Push to GitHub

```bash
git init
git add .
git commit -m "Week 03: portfolio rebuilt with React components"
git branch -M main
git remote add origin https://github.com/vsvaidya07/<repo-name>.git
git push -u origin main
```

Keep the repo **public**. `node_modules/` and `dist/` are ignored by `.gitignore`.

## Optional: live site on GitHub Pages

```bash
npm run build
```

then publish the `dist/` folder (for example with the `gh-pages` package, or a GitHub Actions Pages workflow). `base: './'` in `vite.config.js` keeps asset paths working from a repo sub-path.
