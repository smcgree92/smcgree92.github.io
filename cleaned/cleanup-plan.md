# SearchFirstAI Cleanup Plan

Based on the project analysis, here are the specific steps to optimize the project structure:

## 1. Remove Redundant Files

- [x] Delete `old_html_files/` directory (HTML files already converted to React)
- [x] Remove duplicate React project `searchfirst-ai/` (consolidate into `searchfirst-ai-prototype/`)
- [x] Delete empty `utils/mockData.js` file
- [x] Remove redundant root `package.json` and `package-lock.json`

## 2. Organize CSS Structure

- [ ] Move global styles from `styles.css` to `styles/global.css`
- [ ] Consolidate duplicate styles between `styles.css` and `styles/mainSite.css`
- [ ] Create component-specific CSS files where appropriate
- [ ] Update imports in relevant components

## 3. Clean Up Project Dependencies

- [ ] Update `package.json` with correct dependencies
- [ ] Remove unused dependencies
- [ ] Update React Router to current stable version

## 4. Organize Project Structure

- [ ] Organize components by feature/function
- [ ] Move page components to appropriate directories
- [ ] Ensure consistent naming conventions
- [ ] Create proper utility files with actual implementation

## 5. Improve Build Configuration

- [ ] Update homepage URL in package.json if needed
- [ ] Configure proper build scripts
- [ ] Set up proper deployment flow

## 6. Implementation Notes

Due to permission issues in the current environment, we've created this cleanup plan to guide the implementation. The repository owner should follow these steps to optimize the project structure.

We recommend implementing these changes in the following order:
1. Back up the current project
2. Remove redundant files and directories
3. Organize the remaining files according to the plan
4. Update dependencies and build configuration
5. Test the application thoroughly after changes