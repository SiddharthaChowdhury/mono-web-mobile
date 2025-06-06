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
- [x] Implement a shared **design-system** to achieve uniform styling, (reusability, testability)
- [] Add storybook for Ui package
- [x] Hoist common packages to avoid peer dependency conflicts between apps using same packages (best practice)
- [x] Create a **data-layer** shared between apps
- [x] **Handled CORS** locally through Vite "server.proxy" configuration for web app; (Same origin policy)
- [x] Integrate data layer for Native app
- [x] Make sharable Image Ui
- [x] Integrate the Image Ui in Native app
- [x] Integrate the Image Ui in Web app

## HOW to extend shared packages?

Important point when creating new shared packages for correctly wire the apps with their dependencies.

- `package.json` - Ensures pnpm links @mono/package into node_modules so it’s available at runtime.
- `vite.config.ts` - Tells Vite how to find and bundle @mono/package
- `metro.config.js` - Same as Vite but for native app
- `tsconfig.json` - Tells TypeScript where to find source files and types for @mono/package.
