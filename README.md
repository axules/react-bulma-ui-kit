# react-bulma-ui-kit


React UI kit based on the [Bulma](https://bulma.io/) CSS framework. Provides reusable React components and utility hooks for building Bulma-styled interfaces. Supports React 18–19.

- **Documentation:** https://axules.github.io/react-bulma-ui-kit/
- **Repository:** https://github.com/axules/react-bulma-ui-kit
- **Author:** Shelest Denis ([axules@gmail.com](mailto:axules@gmail.com))

## Installation

The package is not published on npm. Install it directly from GitHub:

```sh
npm install git+https://github.com/axules/react-bulma-ui-kit.git
```

Or add it to your `package.json`:

```json
"dependencies": {
  "react-bulma-ui-kit": "github:axules/react-bulma-ui-kit"
}
```

## Quick Start

```jsx
import Button from 'react-bulma-ui-kit/c/Button';
import { useBooleanState } from 'react-bulma-ui-kit/useBooleanState';

function App() {
  const [isLoading, , , toggleLoading] = useBooleanState(false);

  return (
    <Button primary loading={isLoading} onClick={toggleLoading}>
      Click me
    </Button>
  );
}
```

## Import Paths

All components and hooks can be imported using either the full path or one of the shorter aliases defined in `package.json`:

```js
// Full path (lib/)
import Button from 'react-bulma-ui-kit/lib/components/Button';
import { useBooleanState } from 'react-bulma-ui-kit/lib/useBooleanState';
import { classNamePrefix } from 'react-bulma-ui-kit/lib/classNamePrefix';

// Short aliases
import Button from 'react-bulma-ui-kit/components/Button';  // same as above
import Button from 'react-bulma-ui-kit/c/Button';           // even shorter
```

Supported alias patterns:

| Pattern | Resolves to |
|---------|-------------|
| `react-bulma-ui-kit/*` | `./lib/*.js` |
| `react-bulma-ui-kit/components/*` | `./lib/components/*.js` |
| `react-bulma-ui-kit/c/*` | `./lib/components/*.js` |

## Components

### Layout Components

| Component | Description |
|-----------|-------------|
| `Block` | Bulma Block — spacing container |
| `Box` | Bulma Box — container with shadow and border |
| `Content` | Bulma Content — text content formatting |
| `Title` | Bulma Title / Subtitle |

### Form Components

| Component | Description |
|-----------|-------------|
| `Button` | Button with loading state, skeleton, style/size/brightness variants |
| `Buttons` | Button group — horizontal list of buttons |
| `Checkbox` | Checkbox input |
| `Control` | Form control wrapper — supports icons and loading state |
| `Field` | Form field — label, control, help text with horizontal/grouped layouts |
| `HelpText` | Help and error text for form fields |
| `Label` | Form label |
| `NumberInput` | Number input field |
| `Radio` | Radio button |
| `SelectInput` | Select dropdown |
| `SubmitForm` | Form submit handler wrapper |
| `TextInput` | Text input with icon and loading variants |
| `TextField` | Textarea with icon and loading variants |

### Media Components

| Component | Description |
|-----------|-------------|
| `Icon` | Bulma Icon — integrates with text sizing |
| `DeleteButton` | Delete / close button with skeleton variant |

### Navigation Components

| Component | Description |
|-----------|-------------|
| `Tab` / `Tabs` | Tab navigation |
| `Panel` / `PanelBlock` / `PanelHead` / `PanelIcon` / `PanelTab` / `PanelTabs` | Bulma Panel |

### Overlay Components

| Component | Description |
|-----------|-------------|
| `Modal` | Modal with overlay, close button, and keyboard handling |
| `ModalCard` / `ModalCardBody` / `ModalCardFooter` / `ModalCardHead` / `ModalCardTitle` | Modal Card variation |
| `ModalContent` | Modal content container |
| `Message` | Bulma Message — colored message box |
| `Notification` | Bulma Notification — dismissible colored alert |

### Card Components

| Component | Description |
|-----------|-------------|
| `Card` / `CardContent` / `CardFooter` / `CardFooterItem` / `CardHead` / `CardHeadIcon` / `CardHeadTitle` / `CardImage` | Bulma Card |

### Table Components

| Component | Description |
|-----------|-------------|
| `Table` / `TableCell` / `TableRow` | Bulma Table |

### Tag Components

| Component | Description |
|-----------|-------------|
| `Tag` / `Tags` | Bulma Tag |

## Hooks

| Hook | Description |
|------|-------------|
| `useBooleanState` | Returns `[value, setTrue, setFalse, toggle, setValue]` for boolean state management |
| `useEffectUpdate` | `useEffect` that skips execution on the first render — fires only on dependency changes |
| `useRefCallback` | Ref that calls `onChange(value, prevValue)` when `current` changes |
| `useRefState` | Ref stored in component state — changes trigger re-render |
| `useReusableRef` | Accepts an optional external ref; creates a new one if not provided |
| `useStaticCallback` | Stable callback identity that always invokes the latest handler |
| `useSyncState` | State synchronized with dependencies — combines `useState` and `useEffect` |

## Utilities

| Utility | File | Description |
|---------|------|-------------|
| `classNamePrefix` | `src/classNamePrefix.js` | Creates a prefixed class name factory for Bulma BEM-like naming |
| `withRef` | `src/withRef.js` | HOC that wraps a component with `React.forwardRef` |

### classNamePrefix

```js
import { classNamePrefix } from 'react-bulma-ui-kit/classNamePrefix';

const btn = classNamePrefix('button');
btn('--large', 'custom-class'); // → 'button--large custom-class'
btn.toString();                  // → 'button'
```

## Dependencies

- **Runtime:** `classnames` (2.x) — class name utility
- **Peer:** `react` (18–19), `react-dom` (18–19)
- **Dev:** Babel 8, Webpack 5, Bulma 1.0.4, ESLint 10, Jest 30, Sass
