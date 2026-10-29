# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
A mixed audience reaching one personal home base linked from everywhere: recruiters and employers skimming for internship or junior roles, fellow students and developers from GitHub and social links, and school or program reviewers. Most arrive cold, from a profile link, and spend under a minute.

## Product Purpose
The personal portfolio of Emir (handle `wagamela`), a student in the IT class of a Turkish vocational high school. It exists so a visitor leaves having done two things: opened the GitHub profile and projects, and remembered who Emir is. Success is a click through to GitHub plus a distinct impression, not a dense CV read.

## Positioning
A real student developer's site that shows its own activity: a live GitHub contribution graph rebuilt daily, a hand-made pixel avatar, and the site itself listed as a project. Its claim is honest, current work by a young developer, not polished-agency gloss.

## Operating Context
- Visitors arrive from GitHub, LinkedIn, X, and direct links; often on phones.
- Content is edited by hand in `src/data/profile.ts`; the owner is not a designer and changes text without touching components.
- Deploys from `main` via GitHub Actions to GitHub Pages, with a daily rebuild to refresh contributions.

## Capabilities and Constraints
- Astro static site: home (`src/pages/index.astro`) plus `/projects` and `/about` detail pages. Home sections: Hero, About, Experience, Projects, Interests, ContributionGraph, Footer.
- Contribution data is fetched from GitHub at build time (`src/lib/contributions.ts`); `SAMPLE_CONTRIBUTIONS=1` fakes it locally.
- **Bilingual: English and Turkish are both required.** The site is English-only today; how languages are switched or routed is undecided.
- All content must stay editable from the data file, not hard-coded in components.

## Brand Commitments
- Name/handle `wagamela`; first name Emir.
- Pixel avatar (`PixelAvatar.astro`) and pixel display font are part of the existing identity.
- Voice: plain, first-person, friendly, unpretentious student tone.

## Evidence on Hand
- Real: Software Development Intern at Raynet (2025, 3 months); this portfolio project; GitHub contribution history.
- Placeholders still marked `TODO` in `src/data/profile.ts`: tagline, location, status, bio, LinkedIn/X/email links, internship dates and description, two of three projects, interests.
- Do not invent projects, employers, testimonials, metrics, or skills to fill those gaps.

## Product Principles
1. GitHub is the proof: every section should make the path to real code shorter.
2. Memorable over exhaustive: personality beats length.
3. Honest about stage: present a student who is learning and shipping, never overclaim.
4. Owner-editable: any change must keep content in the data file and stay maintainable by a non-designer.
5. Both languages are first-class, not an afterthought.
