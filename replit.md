# Overview

This is a pnpm workspace monorepo utilizing TypeScript for a streaming service. It comprises an API server and an Astro-powered static site for the streaming service, along with shared libraries and utility scripts. The project aims to deliver a premium global digital media streaming service with a strong focus on internationalization, user experience, and SEO.

## User Preferences

I prefer detailed explanations. I want iterative development. I want to be asked before making major changes.

## System Architecture

The monorepo uses pnpm workspaces with TypeScript 5.9. Each package is a composite TypeScript project.

**Core Technologies:**
- **API Framework**: Express 5
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod (v4) and `drizzle-zod`
- **API Codegen**: Orval (from OpenAPI spec)
- **Frontend Framework**: Astro 5.x (SSG) with React for interactive components (Islands Architecture)
- **Styling**: Tailwind CSS 3.x with a custom dark theme (deep blacks, navy blues, brand accent #3B82F6)
- **Typography**: Inter font family

**Monorepo Structure and Components:**

- **`artifacts/api-server`**: An Express 5 API server handling business logic and data persistence. It uses `@workspace/api-zod` for validation and `@workspace/db` for database interactions.
- **`artifacts/streaming-site`**: An Astro 5.0 SSG website providing a premium global digital media streaming service.
    - **UI/UX**: Features a glassmorphic design for elements like the Cookie Banner and Free Trial card. The site has a dark theme with specific color palettes.
    - **Internationalization (i18n)**: Astro 5's built-in i18n with subdirectory routing. All locales including English use `/{locale}/` paths (e.g., `/en/`, `/da/`, `/sv/`). All UI text is centrally managed via a `t(locale, key)` helper. Pricing uses local currencies based on the locale.
    - **Language Redirect Middleware**: `@astrojs/node@9` adapter enables SSR middleware. Root `/` is non-prerendered and 302-redirects based on `Accept-Language` header. Cookie `sv-preferred-locale` (set by language switcher) overrides header detection. Supports `nb`/`nn` → `no` mapping.
    - **Navigation**: Hybrid conditional routing for header links (hash anchors on homepage, absolute URLs on subpages). Footer always uses standalone page links for SEO. Language switcher preserves the current page context and sets locale preference cookie.
    - **SEO**: Comprehensive meta tags (OG, Twitter, canonical), per-locale `hreflang` tags, JSON-LD schemas (FAQPage, Service), automated XML sitemap with i18n alternates, and `robots.txt`. Production domain: `https://www.streamvault.com`. All canonical/hreflang URLs use this domain consistently.
    - **Image Optimization**: Utilizes Astro's `<Image />` component with `sharp` for WebP conversion, responsive `srcset`, and lazy loading. Images are stored in `src/assets/images/`.
    - **Content Management**: Astro Content Collections are configured for `guides` and `blog`.
    - **Pricing Model**: A 4-tier pricing system (Trial, Starter, Pro, Ultimate) with localized details for VOD count, Anti-Freeze level, and support tiers.
    - **Legal Pages**: Includes Terms, Privacy, DMCA, and Cookies pages with specific content and contact information.
- **`lib/db`**: Database layer using Drizzle ORM for PostgreSQL. Exports a Drizzle client and schema models.
- **`lib/api-spec`**: Manages the OpenAPI 3.1 specification and Orval configuration to generate API client code.
- **`lib/api-zod`**: Contains generated Zod schemas from the OpenAPI spec, used for API request and response validation.
- **`lib/api-client-react`**: Provides generated React Query hooks and a fetch client from the OpenAPI spec.
- **`scripts`**: A package for utility scripts, allowing execution of individual TypeScript files.

**TypeScript Configuration**: The monorepo uses `composite: true` for all packages, extending `tsconfig.base.json`. Root `tsconfig.json` lists all packages as project references, ensuring correct type checking and build order.

## External Dependencies

- **Node.js**: Version 24
- **pnpm**: Package manager
- **PostgreSQL**: Database system
- **Express**: Web application framework
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **Zod**: Schema declaration and validation library
- **Orval**: OpenAPI code generator
- **esbuild**: Bundler for JavaScript/TypeScript
- **Astro**: Web framework for building fast content-focused websites
- **React**: JavaScript library for building user interfaces (used as islands in Astro)
- **Tailwind CSS**: Utility-first CSS framework
- **sharp**: High-performance Node.js image processing (for Astro image optimization)
- **WhatsApp**: Integrated for customer support, free trial, and purchase flows (via `+212631130357`)