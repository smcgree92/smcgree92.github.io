# CSS Organization Plan

## CSS File Structure

```
/src/styles/
  ├── global.css            # Global styles, variables, reset
  ├── components/           # Component-specific styles
  │   ├── navigation.css    # Navigation styles
  │   ├── timeline.css      # Timeline component styles
  │   ├── cards.css         # Card component styles
  │   ├── buttons.css       # Button styles
  │   └── forms.css         # Form element styles
  ├── layouts/              # Layout styles
  │   ├── mainLayout.css    # Main layout styles
  │   └── mainSiteLayout.css # Main site layout styles
  └── pages/                # Page-specific styles
      ├── home.css          # Home page styles
      ├── prototype.css     # Prototype page styles
      └── app/              # App-specific page styles
          ├── search.css    # Search pages styles
          └── documents.css # Document pages styles
```

## CSS Duplication Issues to Fix

1. **Navigation Styles** - Currently duplicated between:
   - `styles.css` (lines 120-158)
   - `mainSite.css` (lines 4-36)

2. **Button Styles** - Currently duplicated between:
   - `styles.css` (lines 210-232)
   - `mainSite.css` (lines 70-84, 171-179)

3. **Layout Container Styles** - Currently duplicated between:
   - `styles.css` (lines 85-98)
   - `mainSite.css` (multiple container classes)

4. **Variable Definitions** - Currently spread across files:
   - Consolidate into a single variables section in `global.css`

5. **Responsive Styles** - Currently mixed within files:
   - Move to end of appropriate files with consistent breakpoints

## Implementation Steps

1. **Create global.css**:
   - Move CSS variable definitions
   - Add reset styles
   - Include typography base styles
   - Define global layout helpers

2. **Extract Component Styles**:
   - Move navigation styles to components/navigation.css
   - Move button styles to components/buttons.css
   - Move card styles to components/cards.css

3. **Extract Layout Styles**:
   - Move container definitions to layouts/
   - Define consistent grid system

4. **Update Imports**:
   - Update all component files to import only needed CSS files
   - Use proper CSS import order (global → layout → component → page)