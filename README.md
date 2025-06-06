## Setup ⚙️

### Prerequisites ⚠️

1. [pnpm](https://pnpm.io/installation) (install brew: `brew install pnpm`)
2. Have Iphone simulator setup in the system or Expo app installed in your mobile from the app store (to run native app)

### Getting started

1. Clone this repo
2. `pnpm install`

- `pnpm native` for Native mobile app
- `pnpm web` for Browser app

## Agenda WIP 🏗️

- [x] `.nvmrc` to maintain consistency across environments
- [x] Setup **monorepo** with _React-Native_ app and a _React web_ app
- [x] Implement a shared **design-system** (`@mono/ui`) to achieve uniform styling, (reusability, testability)
- [x] Hoist common packages to avoid peer dependency conflicts between apps using same packages (best practice)
- [x] Create a **data-layer** (`@mono/data`) shared between apps
- [x] **Handled CORS** locally through Vite "server.proxy" configuration for web app; (Same origin policy)
- [x] **Unit testing** setup added for data utils

## Improvement

1. Centralized linting to avoid duplication
2. StoryBook for `@mono/ui`
3. Cover unit testing on all other packages
4. Setup E2E testing to cover UI and behaviors
5. Setting up environments for production ready deployment.

## Tooling 🛠️

1. **Package manager**: `pnpm` (_Why_? It provides fast installs, deduplication, and isolated node_modules)
2. **MonoRepo**: `Turborepo` (_Why?_ It less complicated than NX and provides good ecosystem for React and JS development)
3. **Build tools**: `Vite` for Web and `Expo` for native app
4. **Linting& Formatting**: `eslint` & `prettier`
5. **Shared package**: `@mono/ui` acting as designSystem and `@mono/data` for controlled API calls
6. **Unit test** `Jest`

## HOW to extend shared packages?

Important point when creating new shared packages for correctly wire the apps with their dependencies.

- `package.json` - Ensures pnpm links @mono/package into node_modules so it’s available at runtime.
- `vite.config.ts` - Tells Vite how to find and bundle @mono/package
- `metro.config.js` - Same as Vite but for native app
- `tsconfig.json` - Tells TypeScript where to find source files and types for @mono/package.
