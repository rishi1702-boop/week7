# week7

## Repository Overview

This repository contains three React + Vite sample applications, each in its own folder:

- `Countries/`: A country explorer app that fetches data from the REST Countries API and supports search filtering.
- `Products-Page/`: A small e-commerce demo with React Router, product listing, category filtering, search, and detail views.
- `React_Product/`: A static product catalog demo that renders pre-defined product cards.

Each project includes its own Vite config, ESLint configuration, and `package.json`.

## Project Summaries

### Countries/
A searchable country browser.

- `package.json`: Defines dependencies (`react`, `react-dom`, `tailwindcss`, `@vitejs/plugin-react`) and scripts: `dev`, `build`, `lint`, `preview`.
- `vite.config.js`: Configures Vite with React and Tailwind CSS plugins.
- `eslint.config.js`: ESLint rules for React and Vite projects.
- `index.html`: HTML entry point for the Vite app.
- `public/`: Static assets and public files served by Vite.
- `src/main.jsx`: Bootstraps the React application and mounts the root component.
- `src/App.jsx`: Main app component. Fetches country data from `https://restcountries.com/v3.1/all`, stores results in state, and connects search input to filtered results.
- `src/App.css`: App-level styling for the Countries app.
- `src/components/SearchBar.jsx`: Search input component. Uses a 500ms debounce before calling `onSearch` and auto-focuses the input.
- `src/components/CountryList.jsx`: Displays a responsive grid of country cards.
- `src/components/CountryCard.jsx`: Renders country details including flag, name, capital, population, and region.

### Products-Page/
A simple e-commerce front-end with routing.

- `package.json`: Defines dependencies including React Router and Tailwind CSS plus standard Vite scripts.
- `vite.config.js`: Configures Vite with React and Tailwind CSS plugins.
- `eslint.config.js`: ESLint rules for React and Vite projects.
- `index.html`: App entry HTML.
- `public/`: Static assets used by the app.
- `src/main.jsx`: Bootstraps the React app.
- `src/App.jsx`: Configures `createBrowserRouter` and route definitions for home, product list, product detail, and contact pages.
- `src/components/RootLayout.jsx`: Shared layout component with `Header`, page content outlet, and `Footer`.
- `src/components/Header.jsx`: Navigation header. Includes links, a search form, and category filtering. It updates the URL query string to control product filtering.
- `src/components/Home.jsx`: Landing page with welcome text and promotional visuals.
- `src/components/ProductsList.jsx`: Fetches products from `https://fakestoreapi.com/products`, applies search and category filters from URL query parameters, and navigates to detail pages.
- `src/components/Product.jsx`: Displays the selected product’s image, title, description, price, and category from router state.
- `src/components/Contactus.jsx`: Placeholder contact page component.
- `src/components/Footer.jsx`: Page footer component.

### React_Product/
A simple static product showcase.

- `package.json`: Defines Vite scripts and React dependencies.
- `vite.config.js`: Configures Vite with React and Tailwind CSS plugins.
- `eslint.config.js`: ESLint configuration for this React app.
- `index.html`: App HTML entry point.
- `public/`: Static assets and public files.
- `src/main.jsx`: Mounts the root React component.
- `src/App.jsx`: Top-level wrapper that renders the `Products` component and provides page styling.
- `src/components/Products.jsx`: Defines a static array of product objects and maps them into product cards.
- `src/components/Product.jsx`: Renders the information for a single product card, including image, name, brand, description, and price.

## How to Run a Project

Open a terminal in the desired project folder and run:

```bash
cd Countries
npm install
npm run dev
```

Replace `Countries` with `Products-Page` or `React_Product` as needed.

## Notes

- Each project uses Vite as the build tool.
- Tailwind CSS is enabled in all three projects via `@tailwindcss/vite`.
- ESLint configurations are included in each project folder.
