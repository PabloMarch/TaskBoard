# TaskBoard App Test
Build on ReactJS.16, NextJS, Styled-Components
Updated code on repository: https://github.com/PabloMarch/TaskBoard
Please see TODO notes at bottom.

## Installation
1. Install latest node version `npm i npm@latest`
2. Positioned on the repo's root, then run `npm install`
3. Run `npm run dev` to run the server on localhost:3000/
4. Build using `npm run build`
5. You're good to code now.


## NOTES
Regarding to the requirements:
- [ ] Create a task card component that conforms pixel-perfectly to the design spec.
      * Pixel perfect not Implemented. I prefer to pay more attention to functionality. It is time consumming so I focused on more challenge tasks
- [x] Image input/upload to task via UI. Click the camera button to enter the system file picker, and place images next to it (overflow creates the scrollbar).
- [x] Local image deletion over via the UI.
- [x] Ensure the task card component can scale within the bounds of possible variable-length data attributes (title, date, image list). You can take the width of a card overall to be fixed & the height to be variable up to a reasonable max-height.
- [x] Display a simple/convienent feedback mechanism so a user would know when the image upload completed.
- [x] Capture error states & display them in the UI in a simple/convienent way. 


## Technical requirements
- [x] The page needs to render server side via next.js
- [x] Your task component card needs to use CSS grid.
- [x] All components should be function-based unless there is a limitation that could only be handled by a class-based component. If/when this is the case, your reasoning for doing so should be clearly defined in a comment block.
      * Only the _Document.js is a class as `nextjs` recommend.
- [x] UI should support the addition/deletion of an image to the task & persistance via the API. However uploading to the browser locally is an acceptable alternative.
      * `localstorage` was implemented for presistance when page reload
      * API connection successful
- [x] Root application state needs to be managed in a useReducer hook.
- [x] You need to create your own middleware for the useReducer hook to handle async actions & API calls, along with a console logger to view actions/payloads. 
- [x] Think through & capture possible error states in the UI. Explain the error states you see possible in the application in a central comment block & how you'd plan to handle them.
      * Error handling must be improved but it was put out of scope


## Used Packages
```
"dependencies": {
  "@zeit/next-css": "^1.0.1",
  "axios": "^0.19.2",
  "browser-image-compression": "^1.0.12",
  "moment": "^2.27.0",
  "next": "^9.5.1",
  "next-fonts": "^1.4.0",
  "overlayscrollbars": "^1.13.0",
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

## TODO:
- Move stylessheets outside of components
- Convert API call from `import` to fetch (out of scope)
- Install BundleAnalyzed
- Import inline SVGs
- Fix undefined `window` issue from SSR caused by local storage
- Theme
  1. Replace pixels units for a relatives (rem|em|%)
  2. Create own theme context
- Explain the error states you see possible in the application in a central comment block &how you'd plan to handle them.
- Implement a type-checker
- Implement default props
- Add some tests
- Allow uploads from multiple tasks at same time (out of scope)
- Fix image spec ratio  (out of scope)
- Create centralize animations on theme and use `react-spring` (out of scope)
- Adds comments to the app
- Remove `styled-compenents` SSR warning
- Save only images ID's on localstorage