## "Create React App" template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It provided a quick start, and gave me a **working**, pretty organized, and well documented template to begin with.

More details found in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn ReactJS and JSX, [React documentation](https://reactjs.org/) was the most useful source.

## Project organizing

As the project grew and more React components were added, the index became longer, so components were divided in separate files. That also quickly resulted in messy directories full of .js and .css files, and an **organization method** was needed.

For that, Alexis Mangin's method was chosen; it was thought for ReactJS projects and resulted in nested directories easy to navigate. His [Medium post on how to better organize React applications](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) was the main reference, where he explains his method and gives examples from his repository.

## Useful Scripts

Create React App comes with a bunch of pre-made stuff. The **npm** package was included and it was used for development and build. The tests are currently not written, but there is also a working script for it.
In the project directory, run:

### `npm start`

Runs the app in the **development mode**.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the **test runner** in the interactive watch mode.<br>
_See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information._

### `npm run build`

**Builds** the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

After build, it will be available on [http://localhost:5000](http://localhost:5000) to view in the browser.

_See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information._

## **API Simulation** with Mocky

To simulate the backend of this application, Mocky was the chosen tool.
It's simple and straigthforward, what makes it easy to understand and quick to implement (important when dealing with a tight deadline).
More on [https://www.mocky.io/](https://www.mocky.io/).

The generated urls were:
for initial-state: http://www.mocky.io/v2/5c85c03d340000d40289bcbb
for migration-success: http://www.mocky.io/v2/5c8857992f0000c100ec9134
for migration-failure: http://www.mocky.io/v2/5c8857c62f00005a00ec9135

## Other relevant documentations

#####[Complete Guide to Flexbox on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
Some elements were styled with flexbox to allow better adjusting to screen, in varying sizes. For example, the table and header containers. Flexbox offered some simple properties for centering and stretching elements as needed.

#####React Modal component
For PG2 and PG3, I decided to use a modal component, so I wouldn't have to code it from scratch.

I found a zillion options to create modals and dialogs with ReactJS, it took me a while to figure them all out. react-modal from reactcommunity.org was chosen for being simple. It didn't take a lot to install, and it has a "Minimal" example with the minimum setting possible to make it work. It's all I needed.

More about it, how to install and examples can be found on [https://reactcommunity.org/react-modal/](https://reactcommunity.org/react-modal/)

#####Zeplin
App screens designs can be found on [Processo Seletivo Front Project](https://app.zeplin.io/project/5bb7c1c76a3029956fff0624)