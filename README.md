# Button — design system component

React + TypeScript + Tailwind implementation of the "Mygtukas" Figma component set, with a matching Storybook.

## Structure

- `src/components/Button/Button.tsx` — the component. `type` / `state` / `size` props map 1:1 to the Figma variant properties (Type, State, Size).
- `src/components/Button/Button.stories.tsx` — Storybook stories: each variant, an interactive Controls-driven story, and a full matrix that mirrors the Figma variant frame.
- `tailwind.config.js` — Tailwind theme extended with the exact Figma design tokens (colors, radius) used by the component; see the comment at the top of the file for the token → class mapping.

## Run locally

```bash
npm install
npm run dev          # the app, at http://localhost:5173
npm run storybook    # Storybook, at http://localhost:6006
```

## Build

```bash
npm run build             # production app build
npm run build-storybook   # static Storybook site (storybook-static/), deployable anywhere
```
