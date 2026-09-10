# Smooth Navigation and Drawer

## What will change
- Turn the wide-screen navigation into a continuously gliding horizontal strip that pauses on hover and remains manually scrollable.
- Keep the active page clearly highlighted within the moving strip.
- Add a compact menu button on smaller screens that opens a right-side drawer containing all pages and the strategy-call action.
- Make the drawer close after selecting a page and preserve accessible labels, focus handling, and reduced-motion behavior.

## Technical details
- Update the shared deck header so every portfolio page receives the same navigation behavior.
- Reuse the existing Sheet and Button interface components for the drawer and trigger.
- Add a small global marquee animation with duplicated navigation items for a seamless loop, while disabling automatic movement for users who prefer reduced motion.
- Verify desktop scrolling, mobile drawer interactions, active-page styling, and app diagnostics.
