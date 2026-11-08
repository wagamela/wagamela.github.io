# wagamela.github.io

My personal portfolio, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Editing the content

All the text on the site lives in [`src/data/profile.ts`](src/data/profile.ts):
bio, social links, experience, projects and interests. Lines marked `TODO` are placeholders.

## Running it locally

Needs Node.js 22.23 or newer (24 recommended).

```sh
npm install
npm run dev          # http://localhost:4321
```

The contribution graph is fetched from GitHub when the site builds. To preview it with
fake data instead, run `SAMPLE_CONTRIBUTIONS=1 npm run dev`.

## Deploying

Every push to `main` builds and deploys the site through
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It also rebuilds once a day
so the contribution graph stays fresh.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Project layout

```
src/
  data/profile.ts            ← your content
  components/                ← one file per section
  lib/contributions.ts       ← loads the GitHub contribution calendar
  styles/global.css          ← colors, fonts and shared styles
  pages/index.astro          ← puts the sections together
```
