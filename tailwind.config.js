/**
 * Tailwind theme wired directly to the Figma design tokens used in the
 * "Mygtukas / Button" component set, so class names trace back 1:1 to the
 * variables defined in Figma:
 *
 *   color/primary        -> colors.primary
 *   color/primary-hover  -> colors['primary-hover']
 *   color/text-light     -> colors['on-primary']
 *   color/disabled       -> colors['disabled-surface']
 *   color/text-disabled  -> colors['on-disabled']
 *   radius/md            -> borderRadius.md (8px)
 *   spacing/pad-x, pad-y -> covered by Tailwind's default spacing scale
 *                           (px-4/py-2.5 = 16/10px, px-5/py-3 = 20/12px)
 *   spacing/gap          -> gap-2 (8px)
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-hover': '#1D4ED8',
        'on-primary': '#FFFFFF',
        'disabled-surface': '#E5E7EB',
        'on-disabled': '#9CA3AF',
      },
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
};
