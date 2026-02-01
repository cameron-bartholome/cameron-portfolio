import { css } from 'styled-components';

const variables = css`
  :root {
    /* Core backgrounds (template used "navy", but we're reusing names for now) */
    --dark-navy: #0b0c0d; /* page background (near-black) */
    --navy: #0e0f11; /* base surface */
    --light-navy: #121417; /* cards / sections */
    --lightest-navy: #161a1e; /* subtle contrast surface */
    --navy-shadow: rgba(0, 0, 0, 0.7);

    /* Text greys (template used "slate" for text tones) */
    --dark-slate: #70757a; /* muted headings / labels */
    --slate: #9aa0a6; /* secondary text */
    --light-slate: #c7cbd1; /* brighter secondary text */
    --lightest-slate: #e6e6e6; /* near-white text */

    /* Whites */
    --white: #ededed;

    /* Accent (template uses green as the main accent in a lot of places) */
    --green: #00e5c3; /* your teal accent */
    --green-tint: rgba(0, 229, 195, 0.1);

    /* Optional: keep these but make them less "template-y" */
    --pink: #ff4d8d; /* only if used for highlights/errors */
    --blue: #2ea8ff; /* only if used for links */

    /* Semantic tokens (use going forward)
    * Added: 2026-02
    */
    --bg: var(--dark-navy);
    --surface: var(--navy);
    --surface-2: var(--light-navy);
    --text: var(--white);
    --text-muted: var(--slate);
    --accent: var(--green);
    --accent-tint: var(--green-tint);

    /* Fonts */

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
