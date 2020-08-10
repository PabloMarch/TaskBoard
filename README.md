# TaskBoard App Test
Build on ReactJS.16, NextJS, Styled-Components

## Used Packages
```
"dependencies": {
  "@zeit/next-css": "^1.0.1",
  "axios": "^0.19.2",
  "browser-image-compression": "^1.0.12",
  "moment": "^2.27.0",
  "next": "^9.5.1",
  "next-fonts": "^1.4.0",
  "overlayscrollbars-react": "^0.2.2",
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-spring": "^8.0.27",
  "styled-components": "^5.1.1",
  "styled-css-grid": "^1.2.1",
  "styled-normalize": "^8.0.7",
  "uuid": "^8.3.0"
},
```
## Browser Test
- http://gsnedders.html5.org/outliner/

## TODO:
- Move styles outside of UI components
- Convert tasks query from json and fetch
- Install BundleAnalyzed
- Import inline SVGs
- Theme
  1. Replace pixels for a better unit and load them relatively (rem|em|%)
  2. Create own theme context
- Think through & capture possible error states in the UI.
  Explain the error states you see possible in the application in
  a central comment block &how you'd plan to handle them.
- Implement a type-checker
- Implement default props
- Add some tests
- Allow uploads from multiple tasks at same time
- Fix image display proportions
- Create centralize animations on theme and use `react-spring`
- Adds comment the app