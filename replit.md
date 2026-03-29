# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── streaming-site/     # Astro 5 SSG streaming service website
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `artifacts/streaming-site` (`@workspace/streaming-site`)

Astro 5.0 SSG website for a premium global digital media streaming service. Built with Islands Architecture — static HTML by default, React components only for interactive elements.

- **Framework**: Astro 5.x (Static Site Generation)
- **Styling**: Tailwind CSS 3.x with custom dark theme (deep blacks, navy blues, brand accent #3B82F6)
- **Typography**: Inter font family
- **Architecture**: `.astro` files for layouts, pages, and static sections. React islands (`client:load`) only for MobileMenu and FaqAccordion. All components accept `locale` prop and pull text from `t()` dictionary. React islands receive translated strings as props from Astro parents (SSG-translated at build time)
- **i18n**: Astro 5 built-in i18n with subdirectory routing. Default locale `en` (no prefix), Nordic locales: `da`, `no`, `sv`, `fi`, `is` (prefixed). Full centralized translation dictionary in `src/i18n/ui.ts` with `t(locale, key)` helper — covers ALL visible text (nav, hero, features, content, pricing, setup, FAQ, footer, aria labels). Locale configs and page meta in `src/i18n/translations.ts`. Layout injects dynamic hreflang tags for all 6 locales + x-default. Zero English text on Nordic pages. Pricing uses local currencies: EUR (€) for EN/FI, DKK (kr) for DA, NOK (kr) for NO, SEK (kr) for SV, ISK (kr) for IS.
- **SEO**: Full meta tags (OG, Twitter, canonical, per-locale hreflang for all 6 versions + x-default), JSON-LD schemas (FAQPage + Service), automated XML sitemap via `@astrojs/sitemap` with i18n hreflang alternates, `robots.txt` pointing to `sitemap-index.xml`
- **Content Collections**: Configured for `guides` and `blog` collections (Astro Content Collections)
- **Structure**:
  - `src/i18n/ui.ts` — comprehensive translation dictionary for all UI text across all 6 locales, with `t(locale, key)` helper function
  - `src/i18n/translations.ts` — locale configs (code, label, hreflang, ogLocale), page meta (title/description) for all 6 locales
  - `src/layouts/Layout.astro` — base HTML layout with SEO head, optional `schema` prop for per-page JSON-LD, `noIndex` prop, `locale` prop for i18n
  - `src/layouts/LegalLayout.astro` — legal page layout with WebPage schema, breadcrumbs, prose styling
  - `src/layouts/BlogPost.astro` — blog article layout with Article schema, related posts sidebar, CTA widget
  - `src/pages/index.astro` — main landing page, English (injects its own FAQPage schema)
  - `src/pages/da/index.astro` — Danish landing page
  - `src/pages/no/index.astro` — Norwegian landing page
  - `src/pages/sv/index.astro` — Swedish landing page
  - `src/pages/fi/index.astro` — Finnish landing page
  - `src/pages/is/index.astro` — Icelandic landing page
  - `src/pages/product/[id].astro` — Product detail pages (1-month, 3-months, 6-months, 12-months)
  - `src/pages/{da,no,sv,fi,is}/product/[id].astro` — Locale-specific product detail pages
  - `src/pages/terms.astro` — Terms of Service
  - `src/pages/privacy.astro` — Privacy Policy (GDPR compliant UK/FR)
  - `src/pages/dmca.astro` — DMCA Policy
  - `src/pages/cookies.astro` — Cookie Policy (EU/UK compliant)
  - `src/pages/device-setup.astro` — Device setup guides (Firestick, Android TV, Apple TV, Smart TVs, Mobile)
  - `src/pages/troubleshooting.astro` — FAQ-style troubleshooting (uses React accordion island)
  - `src/pages/blog/index.astro` — Blog grid index page
  - `src/pages/blog/[...slug].astro` — Dynamic blog post routing
  - `src/components/*.astro` — static Astro components (Header, Hero, Features, ContentShowcase, Pricing, ProductDetail, Setup, Faq, Footer, Breadcrumbs)
  - `src/components/react/*.tsx` — React islands (MobileMenu, FaqAccordion, TroubleshootingAccordion)
  - `src/content/guides/` — guides content collection
  - `src/content/blog/` — blog content collection (4 posts: welcome, VPN guide, Firestick setup, Premier League)
  - `src/content.config.ts` — content collection schemas (blog has category enum: news/tutorials/reviews/tips)
- **Note**: In Astro 5, `post.id` includes `.md` extension — use `post.id.replace(/\.md$/, '')` for URL slugs
- **Build**: `pnpm --filter @workspace/streaming-site run build` outputs to `dist/`
- **Dev**: `pnpm --filter @workspace/streaming-site run dev`

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
