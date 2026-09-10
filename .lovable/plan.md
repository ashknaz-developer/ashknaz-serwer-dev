# Navigation and Theme Settings

## Confirmed scope
Only these existing files will be modified:
- `src/components/DeckLayout.tsx`
- `src/styles.css`

## Changes
- Preserve the desktop navigation design while adding manual horizontal scrolling, smooth scroll behavior, and a subtle one-time entrance slide rather than a continuous marquee.
- Add a compact menu button on smaller screens using the existing Button and Sheet components.
- List each existing destination once in the drawer, retain active-page styling, include the existing Strategy Call action, and close after selection.
- Add compact Theme Settings to the drawer/header using the current token system, with the existing dark appearance remaining the default.
- Respect reduced-motion preferences and preserve focus, keyboard, and dialog behavior supplied by the existing controls.

## Verification
- Check wide and mobile layouts, manual navigation scrolling, drawer open/close and selection, active-page styling, theme switching, links, keyboard labels, reduced motion, and diagnostics.
