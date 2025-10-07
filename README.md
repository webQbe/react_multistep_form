# React Multi-step Form
This repo is an adaptation of [Multi Step Form With React & Material UI](https://www.youtube.com/watch?v=zT62eVxShsY) by Brad Traversy. 

I followed the tutorial to learn followings:
- First part: *First Name*, *Last Name*, *Email*
- *Continue* button to go to next steps
- Second part: *Occupation*, *City*, *Bio*
- Show confirmation page with entered data
- *Back* button to go to previous steps to edit data
- *Confirm & Continue* button takes you to '*Thank You*' page
- No URL switching
- Using React with Material UI

## React Components

1. `UserForm`(Parent)
    - State: `Step`: a number, default: 1
             `Fields`: Form fields

    - Methods: `nextStep()`, `prevStep()`, & `handleChange()`
        - `nextStep()` : Takes to the next step, Increments the step
        - `prevStep()` : Takes to the previous step
        - `handleChange()`: Edits the Fields state when user enters data to the form

2. `UserForm` > `FormUserDetails` (The first step)
3. `UserForm` > `FormPersonalDetails` (The second step)
4. `UserForm` > `Confirm` (Send calls to back-end)
5. `UserForm` > `Success`

## What I changed
- Updated imports to use the new MUI v5 structure.
- Used MUI v5 props: `placeholder`, `label`.
- Added style attributes to `<Button>`s.

## Getting Started

1. Create React app:
    - Open project folder on VSCode terminal.
    - Run `npx create-react-app .`

2. Install Material UI
    - Run `npm install @mui/material @emotion/react @emotion/styled`

3. Delete following files: 
    `/src/logo.svg`, 
    `/src/index.css`, 
    `/src/App.test.js`, 
    `/src/setupTests.js`, 
    `/src/reportWebVitals.js`

4. Modify `/src/index.js` 

    ```
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';

        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
        );
    ```

5. Modify `/src/App.js`:

    ```
        import './App.css';

        function App() {
            return 
        }

        export default App;
    ```


6. Start the server
    - Run `npm start`

7. Create components: 
    - Parent component: `src/components/UserForm.js`
    - Sub-component FormUserDetails: `src/components/FormUserDetails.js`
    - Sub-component FormPersonalDetails: `src/components/FormPersonalDetails.js`
    - Sub-component Confirm: `src/components/Confirm.js`
    - Sub-component Success: `src/components/Success.js`


## Credits
Original tutorial: [Multi Step Form With React & Material UI](https://www.youtube.com/watch?v=zT62eVxShsY) — Brad Traversy.
This repo includes my changes (noted above).

## License
MIT License