![](https://github.com/chrisdemetriad/bsc-proj/workflows/Deployment%20CI/badge.svg?branch=master) ![](https://github.com/coletiv/react-js-github-actions-example/workflows/Continuous%20Integration/badge.svg) ![](https://github.com/coletiv/react-js-github-actions-example/workflows/Continuous%20Deployment/badge.svg)



#### Birkbeck - Final Year Project - Type 4
## Classifieds web application 
Cristian Demetriad / cdemet03

### How to start

Navigate to the project directory and run:

#### `npm start`

Open [http://localhost:3000/bsc-proj](http://localhost:3000/bsc-proj) to view it in the browser.

Pushing the code to master will trigger the `npm run deploy` command, which will first run `npm run build` as per the `package.json` instructions, then deploy the application to [https://chrisdemetriad.github.io/bsc-proj/adverts](https://chrisdemetriad.github.io/bsc-proj/adverts).

### Testing/building/deploying standard commands

Builds the application for production to the `build` folder
###### `npm run build`

Launches the test runner (Jest)
###### `npm test`

**Independent deployment**
###### `npm run deploy`
