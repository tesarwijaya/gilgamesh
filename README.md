This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stacks

### Create React App

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

### React Bootstrap

React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

### Redux + React Redux

Redux is a predictable state container for JavaScript apps.

### Redux Observable

RxJS-based middleware for Redux.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Deployment

Run following command
```
yarn build
yarn global add serve
serve -s build
```
The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:
```
serve -s build -l 4000
```