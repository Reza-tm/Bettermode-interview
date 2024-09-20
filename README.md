## 🚨Better documentation are available on Storybook 🚨
```bash
pnpm install && pnpm storybook 
```

# Getting started

## Welcome to Better tech (Better mode but for tech community :D)

## Implemented Features
- SSR
- Auth
- Tests
- Responsiveness
- Stories
- Dark mode
- Documentation


## Installation

To get started, simply run the following command
```bash
pnpm install
```

## Configuration
To config application properly you should add an ENV file like .env.example which includes :

- **VITE_BASE_URL** : api base URL (in our case graphql endpoint url)
- **VITE_APP_URL** : URL of your app (or community). e.g: https://basic-uw7jm17j.bettermode.io

Then, run the following command to generate a global, type-safe GraphQL interface using gql.tada:
```bash
pnpm pnpm run graphql-schema
```

## Test
We use **Vitest** for testing, as it handles ESM better than Jest, which has known issues with ESM support.
While overall test coverage is below 70% due to time constraints, critical parts of the application are covered. These include:
- **UI components**
- **Utils**
- **Crucial Features** Important parts of the app like **reactions** have tests to ensure the app remains stable.
  For running test just run following command
```bash
pnpm test
```

## Build

To build the application only run following commands:
```bash
pnpm build
```

And for start built version run :
```bash
pnpm preview
```
