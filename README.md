# Daniel Yeung — Portfolio

An interactive, recruiter-friendly portfolio for Daniel Yeung, built with Next.js, TypeScript, and Tailwind CSS. The site is a static frontend and does not require a database, AI API, or server-side credentials.

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Edit `src/app/page.tsx` to update the page and `src/app/globals.css` to adjust its visual system.

## Checks

```bash
npm run lint
npm run build
```

## Deployment

The app can be deployed to Vercel by importing the GitHub repository and keeping the default Next.js build settings. Push validated changes to the deployment branch to trigger a deployment, then verify the production URL.

## Content to confirm before launch

- Add the approved PDF CV to `public/` and link it from the page.
- Confirm the formal COMPUTHON 2026 award wording before presenting it as a credential.
- Review the YOLOv4 repository and add verified implementation details and outcomes.
- Add a preferred professional contact method if one should be published.

Project content currently lives in `src/app/page.tsx`; no credentials or environment variables are needed for the public portfolio.
