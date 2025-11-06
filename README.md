# Task Flow – Junior-Friendly React Todo App

I’m a curious junior computer engineer and this project is where I practice modern React patterns without getting overwhelmed. Task Flow lets me polish core skills (state, hooks, component composition) while shipping something useful: a sleek todo manager with light/dark themes and smooth micro-interactions.

## Features I Built While Learning
- **Smart filters** – switch between `All`, `Active`, and `Completed` lists with instant feedback.
- **Contextual clearing** – the clear button adapts to the selected filter (clear active, clear completed, or wipe the entire list).
- **Inline editing for active tasks** – hover an item to reveal edit controls; only unfinished todos can be updated to avoid weird completed-state edits.
- **Persistent state** – todos are stored in `localStorage`, so my experiments survive refreshes.
- **Keyboard-friendly input** – hit `Enter` to add tasks or save edits, and `Esc` to cancel edits.
- **Theme toggle** – `ToggleTheme.jsx` switches between a cozy dark mode and a bright light mode using CSS variables and Tailwind utilities.

## Tech Stack
- **Vite + React 19** – for fast refresh and the latest React ergonomics.
- **Tailwind CSS 4** – utility-first styling, perfect for prototyping UI ideas quickly.
- **lucide-react** – icon set for buttons (add, edit, delete, etc.).
- **Framer Motion (future use)** – installed for upcoming transitions.

## Getting Started
```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the suggested URL (usually http://localhost:5173)
```

> Requires Node.js 18+ (Vite 7 compatibility). I’m using npm, but yarn/pnpm will work too.

## Available Scripts
| Command        | Description |
| -------------- | ----------- |
| `npm run dev`  | Launches Vite in dev mode with hot module replacement. |
| `npm run build`| Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for smoke-testing. |
| `npm run lint` | Runs ESLint with React hooks + Refresh plugins. |

## Project Tour
- `src/App.jsx` – core todo logic: filtering, counters, inline editing, and the auto-persist hook.
- `src/components/ToggleTheme.jsx` – minimal theme switcher that updates the `data-theme` attribute.
- `src/index.css` – Tailwind layer plus custom tweaks for the glassmorphic cards.
- `vite.config.js` – Vite + React plugin config (support for JSX fast refresh and Tailwind 4).

## What I Learned
1. **Hook composition** – using `use

https://github.com/user-attachments/assets/cd3372b2-e35d-4092-8250-8e84e762c2bd

Memo` to derive `activeCount`/`completedCount` keeps renders predictable.
2. **Derived UI states** – conditional rendering of edit buttons based on `filter` taught me how to keep UX rules inside React, not CSS hacks.
3. **Local persistence** – wrapping `localStorage` reads in a lazy `useState` initializer prevents hydration mismatches.

## Next Ideas
- Animate list reordering with Framer Motion.
- Add drag-and-drop prioritization.

