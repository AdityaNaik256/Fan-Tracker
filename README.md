# Fan Tracker

A sports event tracker where fans can create a profile, select their favourite teams, and get an overview that includes the last 5 results on request.

## Features

- **Profile setup** – Enter your name and pick favourite teams across Soccer, Basketball, American Football, Baseball and Ice Hockey.
- **Team overview dashboard** – See all your followed teams at a glance with a W/D/L record badge for the last 5 games and the next upcoming match.
- **Last 5 results on request** – Each team card has a toggle button to expand and show the full last-5-results list with scores, opponents, competitions and dates.
- **Profile editing** – Add or remove teams at any time; the profile is persisted in `localStorage`.

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for unit tests

## Getting Started

```bash
npm install
npm run dev     # start development server
npm test        # run unit tests
npm run build   # production build
```

