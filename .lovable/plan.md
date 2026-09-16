# Executive Portfolio Master Overhaul

## Goal
Upgrade the existing ten-page portfolio without replacing its content structure: make every page overflow-safe from 320px through 4K, simplify navigation into a universal executive drawer, strengthen dark/light/system themes, and turn the existing assistant launcher into an animated cyber-robot experience.

## Implementation

### 1. Responsive foundation across all ten pages
- Add global width, overflow, media, and reduced-motion safeguards in the existing stylesheet.
- Audit and adjust every portfolio route’s fixed-size visual frames, dense header rows, grids, pills, mockups, charts, and decorative layers so they shrink, wrap, or stack safely on narrow screens.
- Preserve each page’s current content and visual concept while making desktop mockups, phone frames, SVG dashboards, and imagery fluid.
- Keep multi-column layouts on larger screens and collapse dense sections to one column where mobile readability requires it.

### 2. Universal executive header and drawer
- Preserve the AS identity and “Ashknaz Serwer | Digital Engineering” branding in a compact, overflow-safe header.
- Replace the desktop category strip with always-visible Theme, WhatsApp strategy-call, and Menu controls at every breakpoint.
- Reuse the existing accessible Sheet and Button controls for a right-side, full-height drawer.
- Add the existing ten destinations once, numbered 01–10, with current-page styling and automatic close after selection.
- Add a profile identity block, Dark/Light/System controls, and verified WhatsApp, Instagram, LinkedIn, GitHub, YouTube, and Facebook links.
- Wire all strategy-call actions to the supplied WhatsApp URL.

### 3. High-contrast theme refinement
- Keep dark as the first-load default and preserve saved Dark/Light/System preferences.
- Refine semantic tokens toward the requested obsidian/white and porcelain/charcoal palettes, without hardcoded page-level theme colors.
- Add subtle theme transitions while disabling them when reduced motion is requested.

### 4. Animated cyber-robot assistant
- Create a distinctive transparent cyber-robot avatar asset and use it as the assistant’s identity instead of a generic chat icon.
- Add a restrained float, pulse ring, online badge, and pointer-responsive depth effect; disable movement for reduced-motion users.
- Keep the assistant fixed safely above the slide controls, with a mobile layout that cannot exceed the viewport.
- Preserve the existing instant local ten-domain knowledge base, welcome message, six suggestions, and action links.
- Recompose the transcript and composer with AI Elements primitives while retaining local instant answers and accessible controls.

### 5. Verified links and shared footer
- Update shared navigation, assistant actions, and footer social destinations to the exact supplied URLs.
- Keep email, Canva, GitHub profile, Smart Khata repository, and contact details consistent wherever they already appear.

## Technical details
- Expected edits: `src/components/DeckLayout.tsx`, `src/components/AiAssistant.tsx`, `src/lib/assistant-knowledge.ts`, `src/styles.css`, and the ten existing files under `src/routes/`.
- Expected additions: generated robot artwork under `src/assets/` and installed AI Elements source components under `src/components/ai-elements/` (plus only their required shared UI dependencies).
- No database or external AI API will be added; answers remain instant and client-side.
- Existing routes, portfolio copy, slide ordering, and page-specific visual identity remain intact except where supplied links/contact wording supersede old values.

## Verification
- Check every route at 320px, 393px, 768px, 1280px, and a wide desktop viewport for zero horizontal overflow.
- Verify drawer focus behavior, keyboard close, active state, all ten destinations, theme persistence/system response, and every external link.
- Verify robot motion, reduced-motion behavior, assistant open/close, all six suggestions, free-text Q&A, action buttons, and mobile keyboard-safe sizing.
- Run project diagnostics, type checking, linting, and browser console checks before completion.
