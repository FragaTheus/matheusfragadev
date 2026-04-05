```tsx
// ✅ Correct
<div className="flex flex-col gap-4 w-full px-6 text-lg font-semibold text-zinc-800 border rounded-xl shadow-md hover:opacity-80">

// ❌ Wrong
<div style={{ display: 'flex', padding: '24px' }}>
```

---

## "use client" / "use server" Rules

- **By default, all components are Server Components.** Do not add `"use client"` unless strictly necessary.
- Add `"use client"` only when the component requires browser-only APIs or React hooks that do not run on the server, such as:
  - Animations (Framer Motion, GSAP, etc.)
  - Carousel/Swiper components
  - `useState`, `useEffect`, `useRef`, `useContext`
  - Event listeners or DOM manipulation
  - Any third-party library that requires the browser environment

```tsx
// ✅ Only when necessary
"use client";

const AnimatedBanner = () => {
  // uses animation library or useState
};

export default AnimatedBanner;
```

- Never add `"use client"` to wrappers, layouts, or pages unless they themselves require browser APIs.
- Isolate client-side logic as deep in the tree as possible to maximize server rendering.

---

## Next.js Specific Rules

- **Images**: Always use `next/image`. Never use native `<img>` tags.
- **Links**: Always use `next/link`. Never use native `<a>` tags for internal navigation.
- **Fonts**: Use `next/font` for font loading.
- `error.tsx`, `loading.tsx`, and `not-found.tsx` must be placed directly inside `app/` for global coverage.
- Route-specific error and loading states may also be created inside their respective route segment folders.
- `error.tsx` requires `"use client"` by Next.js convention.

---

## TypeScript Rules

- `any` is strictly forbidden. Use `unknown` if type is truly uncertain, and narrow it.
- All component props must be typed via an interface stored in the `/data/` folder of the feature or in `shared/components/data/` if global.
- Props must never be typed inline inside the component file.
- Always import and reference the interface explicitly.

```tsx
// ✅ Correct — interface in data/ folder
// features/home/components/data/hero.types.ts
export interface HeroLayoutProps {
  title: string;
  subtitle: string;
  cta: string;
}

// features/home/components/layouts/HeroLayout.tsx
import { HeroLayoutProps } from "@/features/home/components/data/hero.types";

const HeroLayout = ({ title, subtitle, cta }: HeroLayoutProps) => {
  return <></>;
};

export default HeroLayout;

// ❌ Wrong — inline typing
const HeroLayout = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {};
```

---

## Text Content Rules

- All textual content (titles, descriptions, labels, CTAs, alt texts, etc.) must be stored as `.json` files inside `features/[feature-name]/text-content/`.
- Components and layouts must **never** contain hardcoded strings.
- The wrapper is responsible for importing the JSON and passing it as props.

```json
// features/home/text-content/heroContent.json
{
  "title": "Welcome to the platform",
  "subtitle": "Start building today",
  "cta": "Get started"
}
```

```tsx
// features/home/wrappers/HeroWrapper.tsx
import heroContent from "@/features/home/text-content/heroContent.json";
import HeroLayout from "@/features/home/components/layouts/HeroLayout";

const HeroWrapper = () => {
  return <HeroLayout {...heroContent} />;
};

export default HeroWrapper;
```

---

## Constants Rules

- Arrays, schemas, enums, and static data must be stored in `/constants/` — inside the feature or in `shared/constants/` if global.
- Never inline constant arrays or objects directly inside components.

---

## Types & Interfaces Rules

- All types and interfaces live in `/data/` folders — feature-level or `shared/components/data/` if global.
- File naming: `camelCase.ts` → `hero.types.ts`, `navItem.types.ts`

---

## Hooks Rules

- Custom hooks live in a `/hooks/` folder — inside the feature or in `shared/hooks/` if global.
- Never write hook logic inline inside components or wrappers.
- Always prefix with `use`: `useScrollPosition.ts`, `useMediaQuery.ts`

---

## Page Rules (app/)

- Pages must only import and render **wrapper components**.
- No logic, no direct imports of layouts or UI components inside pages.

```tsx
// app/page.tsx
import HeroWrapper from "@/features/home/wrappers/HeroWrapper";

const HomePage = () => {
  return (
    <>
      <HeroWrapper />
    </>
  );
};

export default HomePage;
```

---

## Scalability Guidelines

- When a new need arises (hook, constant, type, helper), evaluate:
  - **Specific to one feature?** → create inside that feature folder.
  - **Reused across features?** → create inside `shared/`.
- Never create ad-hoc folders outside the defined structure without justification.
- Features must remain isolated. Features must **not** import directly from other features.

---

## Acceptance Criteria (mandatory before delivering any code)

After every implementation, the following steps are **required** before considering the task complete:

1. **Run build**: `next build` must complete with **zero errors**.
2. **Run lint**: `next lint` must complete with **zero errors** and **zero warnings**.
3. If any error or warning is found:
   - Analyze the error carefully.
   - Refactor the code to resolve it.
   - Re-run build and lint.
   - **Only deliver code that is fully functional and passing all checks.**

> ⚠️ Never deliver partial, broken, or untested code. Every deliverable must be production-ready.

---

## Summary Checklist

Before submitting any implementation, verify:

- [ ] All imports use `@` alias
- [ ] No relative path imports (`../../`)
- [ ] `resolveJsonModule: true` in tsconfig
- [ ] Component file names in `PascalCase.tsx`
- [ ] Hook files prefixed with `use` in `camelCase.ts`
- [ ] Constant and JSON files in `camelCase`
- [ ] Folders in `kebab-case`
- [ ] Components follow `const Component = () => {}` + `export default` pattern
- [ ] No `any` types used
- [ ] All props typed via interface in `/data/` folder
- [ ] No hardcoded text inside components or layouts
- [ ] Text content stored in `.json` inside `text-content/`
- [ ] Constants stored in `/constants/`
- [ ] No CSS Modules, no inline styles, no `.css` files (except root globals.css)
- [ ] All styling via Tailwind CSS utility classes only
- [ ] No external UI libraries installed or used
- [ ] `"use client"` only where strictly necessary (animations, browser APIs)
- [ ] `next/image` used for all images
- [ ] `next/link` used for all internal navigation
- [ ] `error.tsx`, `loading.tsx`, `not-found.tsx` inside `app/`
- [ ] Wrappers only integrate — no logic or styling
- [ ] Pages only render wrappers
- [ ] `next build` passes ✅
- [ ] `next lint` passes ✅
