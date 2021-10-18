# Series listing applications

A client-only web application for listing tv series

## How to use

Open a terminal and clone the repo into your disk.

```bash
git clone https://github.com/vzotikas/viaplay.git
```

Change the active directory to the project directory.

```bash
cd viaplay
```

### `npm i`

Installs the dependencies for the application.

```
npm i
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
npm run start
```

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run test
```

### Deploy to production (optional).

### `npm build`

When you’re ready to deploy to production, running the following command will build the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```
npm run build
```

## Preview of index.js file

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

# Usage

The application is displaying a list of TV series. The user can select a series and see more information. Interaction is possible both with the keyboard (arrow keys, enter and escape key) and the mouse. Once the modal window is open the user can go back to the list either by clicking the x button or by hitting the escape key. The application is responsive and it is adjusted to the size of the window.

## Design decisions

In the project directory, you can run:

I decided to use React since it is the most popular and tested JavaScript library for building user interfaces.

For better performance and other features like API Routes, File-system Routing, hybrid SSG and SSR, Image Optimization and more I decided to go with Next.js.

I used the Functional Components approach and utilized the power of React’s built-in Hooks plus the advantage to be able to create my own custom Hooks.

## Dependencies

### `react-modal`

I used react-modal which is an accessible modal dialog component for React in order to display more information about the series.

### `@fortawesome`

I used Font Awesome and Google Fonts for better looking fonts and icons.

## Custom React hooks

### `useFetch`

Used to call an API and return the data, loading, and any error.

### `useKeyPress`

Used to detect a keypress and define the current key that is pressed.

### `useArrows`

Used to utilize the arrow keys functionality in order to navigate the list.

### `useSetSeriesList`

Used to extract an array of objects with the information needed and provide it to the other components of the application.

## CSS

React and Next.js supports CSS Modules using the [name].module.css file naming convention.
CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same CSS class name in different files without worrying about collisions.
This behavior makes CSS Modules the ideal way to include component-level CSS. CSS Module files can be imported anywhere in your application.

## Running Tests

For testing i use Jest that is embeded to React as its test runner. Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.
