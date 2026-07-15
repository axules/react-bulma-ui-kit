# react-bulma-ui-kit — AI Agent Specification

## Project Overview

React UI kit based on the [Bulma](https://bulma.io/) CSS framework (v1.0.4). Provides reusable React components and utility hooks for building Bulma-styled interfaces. Supports React 18–19.

- **Version:** 1.20.2
- **License:** ISC
- **Author:** Shelest Denis (axules@gmail.com)
- **Repository:** https://github.com/axules/react-bulma-ui-kit
- **Docs (GitHub Pages):** https://axules.github.io/react-bulma-ui-kit/

## Architecture

### Directory Structure

```
src/                         # Source files (JSX)
├── classNamePrefix.js       # Utility: creates prefixed className factory
├── withRef.js                # HOC: forwardRef wrapper (withForwardedRef)
├── useBooleanState.js       # Hook: boolean state management
├── useEffectUpdate.js       # Hook: effect that skips first call
├── useRefCallback.js        # Hook: ref with onChange callback
├── useRefState.js           # Hook: state-backed ref (triggers re-render)
├── useReusableRef.js        # Hook: uses provided ref or creates new one
├── useStaticCallback.js     # Hook: stable callback that always calls latest handler
├── useSyncState.js          # Hook: state synchronized with deps
└── components/              # UI components
    ├── _utils.js            # Bulma CSS class name helpers
    ├── Button.jsx           # Button component
    ├── Card.jsx             # Card component (CardContent, CardFooter, CardFooterItem, CardHead, CardHeadIcon, CardHeadTitle, CardImage)
    ├── Modal.jsx            # Modal component (ModalCard, ModalCardBody, ModalCardFooter, ModalCardHead, ModalCardTitle, ModalContent)
    ├── Panel.jsx            # Panel component (PanelBlock, PanelHead, PanelIcon, PanelTab, PanelTabs)
    ├── Table.jsx            # Table component (TableCell, TableRow)
    ├── Tabs.jsx             # Tabs component (Tab)
    ├── Tag.jsx              # Tag component (Tags)
    ├── ...                  # Other components (Block, Box, Buttons, Checkbox, Content, Control, DeleteButton, Field, HelpText, Icon, Label, Message, Notification, NumberInput, Radio, SelectInput, SubmitForm, TextField, TextInput, Title)
lib/                         # Compiled output (Babel, CommonJS modules + source maps)
docs/                        # Built documentation site
docsSrc/                     # Documentation source
├── sheets/                  # Per-component sandbox examples (.sheet.js)
├── components/              # React components for doc pages
├── styles/                  # SCSS styles for docs
├── build.js                 # Build script for docs
└── webpackSheets.js         # Webpack config for sheet compilation
```

### Build Pipeline

| Step | Command | Description |
|------|---------|-------------|
| App build | `cross-env NODE_ENV=production babel --source-maps --delete-dir-on-start -d lib src -x .js,.jsx` | Transpile JSX to CommonJS |
| Docs build | `node ./docsSrc/build.js` | Build documentation site (webpack) |
| Full build | `npm run build` | Runs app-build, then docs-build |

- **Babel config:** `babel.config.js` — preset-env (commonjs modules), preset-react (automatic JSX runtime), pipeline operator (fsharp proposal), export-default-from plugin, transform-react-remove-prop-types.
- **Webpack config:** `webpack.config.js` — builds `.sheet.js` files from `src/` into `docs/`. Uses TerserPlugin for minification, splitChunks for vendor/utils caching.

## Coding Conventions

### Language & Syntax

- **Language:** English (code, comments, identifiers).
- **File extensions:** `.js` for utilities/hooks, `.jsx` for components.
- **JavaScript features:** ES2024+ with Babel transforms:
  - **Pipeline operator** (`|>`) — used for functional composition, e.g. `Button |> memo |> withForwardedRef`.
  - **Export default from** (`@babel/plugin-proposal-export-default-from`).

### Module System

- **Sources:** ES modules (`import`/`export`).
- **Compiled output:** CommonJS (`require`/`module.exports`).
- **React import:** Automatic JSX runtime (no `import React from 'react'` needed).

### Component Patterns

1. **Composition via Pipe Operator:**
   ```jsx
   export default Component
     |> memo
     |> withForwardedRef;
   ```
   - `withForwardedRef` adds a `forwardedRef` prop to the component using `React.forwardRef`.
   - Components are always wrapped with `memo`.

2. **Props Convention:**
   - Use destructuring with `...restProps` spread.
   - `as` prop for polymorphic HTML tag (default varies by component).
   - Forward ref via `forwardedRef` prop (not `ref`).

3. **Bulma CSS Class Naming:**
   - Utility functions in [`src/components/_utils.js`](src/components/_utils.js):
     - `getStyleClassName()` — style modifiers (`is-danger`, `is-success`, `is-warning`, `is-info`, `is-link`, `is-primary`)
     - `getTextColorClassName()` — text color modifiers (`has-text-danger`, etc.)
     - `getBrightnessClassName()` — brightness/color modifiers (`is-white`, `is-light`, `is-dark`, `is-black`, `is-text`, `is-ghost`)
     - `getSizeClassName()` — size modifiers (`is-small`, `is-medium`, `is-large`)
     - `getAlignClassName()` — alignment modifiers (`is-left`, `is-centered`, `is-right`)
     - `skeletonClassName()` — skeleton loading state (`has-skeleton`, `is-skeleton`)

4. **Default Export Pattern:**
   Every component file exports a single default component (memoized + ref-forwarded).

### Prop Types

- All components use `PropTypes` for runtime type checking.
- Boolean modifier props follow Bulma naming (`primary`, `danger`, `small`, `rounded`, etc.).

### classNamePrefix Utility

[`src/classNamePrefix.js`](src/classNamePrefix.js) creates a function that generates class names with a given prefix:

```js
const btn = classNamePrefix('button');
btn('--large', 'custom-class') // → 'button--large custom-class'
btn.toString() // → 'button'
```

## Hooks Reference

| Hook | File | Purpose |
|------|------|---------|
| `useBooleanState` | [`src/useBooleanState.js`](src/useBooleanState.js) | Returns `[value, setTrue, setFalse, toggle, setValue]` for boolean state |
| `useEffectUpdate` | [`src/useEffectUpdate.js`](src/useEffectUpdate.js) | `useEffect` that skips the first call (fires only on dependency changes) |
| `useRefCallback` | [`src/useRefCallback.js`](src/useRefCallback.js) | Ref that calls `onChange(value, prevValue)` when `.current` changes |
| `useRefState` | [`src/useRefState.js`](src/useRefState.js) | Ref stored in state — changes trigger re-render |
| `useReusableRef` | [`src/useReusableRef.js`](src/useReusableRef.js) | Accepts optional external ref, creates new one if not provided |
| `useStaticCallback` | [`src/useStaticCallback.js`](src/useStaticCallback.js) | Stable callback identity that always calls the latest handler |
| `useSyncState` | [`src/useSyncState.js`](src/useSyncState.js) | State synchronized with dependencies (like `useState` + `useEffect` combo) |

## Component List

### Layout Components
- `Block` — Bulma Block (spacing container)
- `Box` — Bulma Box (container with shadow/border)
- `Content` — Bulma Content (text content formatting)
- `Title` — Bulma Title/Subtitle

### Form Components
- `Button` — Button with loading, skeleton, style/size/brightness variants
- `Buttons` — Button group (horizontal list of buttons)
- `Checkbox` — Checkbox input
- `Control` — Form control wrapper (with icons, loading state)
- `Field` — Form field (label + control + help text, horizontal/grouped)
- `HelpText` — Help/error text
- `Label` — Form label
- `NumberInput` — Number input
- `Radio` — Radio button
- `SelectInput` — Select dropdown
- `SubmitForm` — Form submit handler wrapper
- `TextInput` — Text input with icon/loading variants
- `TextField` — Textarea with icon/loading variants

### Media Components
- `Icon` — Bulma Icon (with text size integration)
- `DeleteButton` — Delete/close button (skeleton variant)

### Navigation Components
- `Tab` / `Tabs` — Tab navigation
- `Panel` / `PanelBlock` / `PanelHead` / `PanelIcon` / `PanelTab` / `PanelTabs` — Bulma Panel

### Overlay Components
- `Modal` — Modal with overlay, close, keyboard handling
- `ModalCard` / `ModalCardBody` / `ModalCardFooter` / `ModalCardHead` / `ModalCardTitle` — Modal Card variation
- `ModalContent` — Modal content container
- `Message` — Bulma Message (colored message box)
- `Notification` — Bulma Notification (dismissible colored alert)

### Card Components
- `Card` / `CardContent` / `CardFooter` / `CardFooterItem` / `CardHead` / `CardHeadIcon` / `CardHeadTitle` / `CardImage` — Bulma Card

### Table Components
- `Table` / `TableCell` / `TableRow` — Bulma Table

### Tag Components
- `Tag` / `Tags` — Bulma Tag

## Testing

- **Framework:** Jest (`jest.config.js`)
- **Command:** `npm test`

## Linting

- **Tool:** ESLint v10.5
- **Config:** [`eslint.config.js`](eslint.config.js) uses `eslint-presets` (jsConfig + reactConfig) with custom overrides.
- **Parser:** `@babel/eslint-parser`
- **Plugins:** `@stylistic`, `import`, `import-newlines`, `jsx-a11y`, `react`, `react-hooks`, `simple-import-sort`, `es-plugin-es`
- **Command:** `npm run eslint`

## Dependencies

- **Runtime:** `classnames` (2.x) — class name utility
- **Peer:** `react` (18-19), `react-dom` (18-19)
- **Dev:** Babel 8, Webpack 5, Bulma 1.0.4, Sass for SCSS processing, `prop-types` for runtime type checking, `core-js` 3.x for polyfills

## Import Paths

```js
// Components
import Button from 'react-bulma-ui-kit/lib/components/Button';
import Card from 'react-bulma-ui-kit/lib/components/Card';

// Hooks
import { useBooleanState } from 'react-bulma-ui-kit/lib/useBooleanState';
import { useEffectUpdate } from 'react-bulma-ui-kit/lib/useEffectUpdate';

// Utilities
import { classNamePrefix } from 'react-bulma-ui-kit/lib/classNamePrefix';
```

Shorter aliases also supported via `exports` in `package.json`:
- `react-bulma-ui-kit/components/*` → `./lib/components/*.js`
- `react-bulma-ui-kit/c/*` → `./lib/components/*.js`
