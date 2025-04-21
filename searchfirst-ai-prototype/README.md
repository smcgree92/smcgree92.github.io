# Search First AI - React Prototype

This is a React-based prototype for Search First AI, an AI-powered conveyancing platform that aims to make property transfers faster, cheaper, and stress-free.

## Project Structure

```
searchfirst-ai-prototype/
├── public/             # Static files
│   ├── images/         # Images used in the app
│   ├── index.html      # HTML template
│   └── ...
├── src/                # Source files
│   ├── components/     # Reusable components
│   │   ├── AIAssistant.jsx
│   │   ├── DocumentCard.jsx
│   │   ├── NavigationBar.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── SearchCard.jsx
│   │   └── Timeline.jsx
│   ├── layouts/        # Layout components
│   │   ├── MainLayout.jsx
│   │   └── MainSiteLayout.jsx
│   ├── pages/          # Page components
│   │   ├── AIIntroductionPage.jsx
│   │   ├── DocumentPreparationPage.jsx
│   │   ├── PropertyDetailsPage.jsx
│   │   ├── SearchAuthorizationPage.jsx
│   │   ├── SearchResultsPage.jsx
│   │   ├── SignupPage.jsx
│   │   └── MainSite/   # Main site pages
│   │       ├── HomePage.jsx
│   │       └── PrototypePlanPage.jsx
│   ├── styles/         # CSS styles
│   │   └── mainSite.css # Styles for main site
│   ├── utils/          # Utility functions and data
│   │   ├── helpers.js
│   │   └── mockData.js
│   ├── App.jsx         # Main application component
│   ├── index.jsx       # Entry point
│   └── styles.css      # Global styles
└── package.json        # Project dependencies
```

## Features

- Main marketing website with information about the platform
- Interactive prototype with user flow demonstration
- AI-powered document analysis
- Property search and details entry
- Document preparation
- Search authorization and results
- Interactive user interface with AI assistant

## Application Structure

The application is divided into two main parts:

1. **Main Site**: The marketing website showcasing the Search First AI platform
   - Home page with key features and benefits
   - Prototype plan and other informational pages

2. **Interactive Prototype**: The functional demonstration of the platform
   - User signup flow
   - AI assistant interaction
   - Property details collection
   - Search authorization and results
   - Document preparation

## Routing

The application uses HashRouter from React Router for compatibility with GitHub Pages:

- `/` - Home page (marketing site)
- `/main/*` - Other marketing site pages
- `/app` - Entry point to interactive prototype
- `/app/*` - Prototype pages

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Technologies Used

- React 18
- React Router 6
- HTML/CSS
- Font Awesome (for icons)
- React PropTypes