# Component Organization Guide

## Component Structure

```
/src/components/
  ├── common/              # Shared, reusable components
  │   ├── Button.jsx       # Button component
  │   ├── Card.jsx         # Card component
  │   ├── Input.jsx        # Input component
  │   └── Modal.jsx        # Modal component
  ├── layout/              # Layout components
  │   ├── NavigationBar.jsx # Navigation bar
  │   ├── Footer.jsx       # Footer component
  │   ├── Sidebar.jsx      # Sidebar component
  │   └── Header.jsx       # Header component
  ├── features/            # Feature-specific components
  │   ├── search/          # Search-related components
  │   │   ├── SearchBox.jsx # Search input component
  │   │   ├── SearchFilters.jsx # Search filter components
  │   │   └── SearchResults.jsx # Search results component
  │   ├── documents/       # Document-related components
  │   │   ├── DocumentCard.jsx # Document card component
  │   │   └── DocumentViewer.jsx # Document viewer component
  │   └── ai/              # AI-related components
  │       ├── AIAssistant.jsx # AI assistant component
  │       └── AIResponse.jsx  # AI response display component
  └── pages/               # Page-specific components
      ├── mainSite/        # Main marketing site pages
      │   ├── HomePage.jsx # Home page component
      │   └── AboutPage.jsx # About page component
      └── app/             # Application pages
          ├── SearchPage.jsx # Search page component
          └── DocumentPage.jsx # Document page component
```

## Component Best Practices

1. **Component Naming**:
   - Use PascalCase for component names
   - Use descriptive names that reflect purpose
   - End all component filenames with .jsx extension

2. **Component Organization**:
   - Group related components together
   - Use index.js files for barrel exports
   - Keep components focused on a single responsibility

3. **Component Structure**:
   - Import statements at the top
   - PropType definitions
   - Component function
   - Export statement

4. **CSS Organization**:
   - Use component-specific CSS files with same name as component
   - Import CSS directly in component file
   - Consider CSS modules for component-specific styling

5. **Prop Handling**:
   - Define clear PropTypes for all components
   - Use defaultProps for default values
   - Destructure props at the beginning of component function

6. **Component Reusability**:
   - Extract reusable logic to custom hooks
   - Make components composable with children props
   - Keep state management close to where it's used