# Stock Analyst
## Description

This web app provides smoothly operated basic functions for users to have a quick glimpse of the stock market and some basic features to analyze the stock market data by using React and FMP api(You need to apply for FMP api key for usign the app). The app use Reactstrap and css for styling.
Moreover, the app has its own filter logic rather than using ag-grid build in filters for symbol search and sector filter in Stock page, and the search feature can dynamically show searching data without hitting a button. Also, the app use a React Datepicker for user to pick a date, and the app has some modifications to make it as a button which don’t allow users to input text manually for reducing user errors.

![image](https://user-images.githubusercontent.com/115144351/203473428-cacf6f67-9ed0-4970-a766-387f522eb987.png)

For landing page, the app displays a demo video via Youtube player which would give the users a hand to have a quick knowledge of how to use the app.

![image](https://user-images.githubusercontent.com/115144351/203473444-dfa09057-4bd4-4081-8a78-ee5ebc0254ce.png)

## User Guide

First, user will see the landing page. On the top of the page, there is a navbar which has Logo, Home, Stock, Quote and History. Each serves its own purpose as named. For logo, we will go back to landing page if we clicked the logo. In the middle of Landing page, user will see a demo video shows us how to navigate through the app, and there are some introduction words to welcome users. Also, user can see the link to the API which provides all the data for the app.

![image](https://user-images.githubusercontent.com/115144351/203473982-0f5ef950-9b90-43c8-a184-fee1796c74f4.png)

Secondly, user can go to home page. Here, user can have some understanding about how to use the searching, filtering and date picking features of the app.

![image](https://user-images.githubusercontent.com/115144351/203474020-e7786c3d-7194-457a-881a-e3133e88b640.png)

Thirdly, we jump into Stock page. There is a table contains stocks of NASDAQ. User can use symbol searching and sector filtering to find the stock we want to focus. By click the symbol, user will go to History page of selecting stock. 

![image](https://user-images.githubusercontent.com/115144351/203474053-96271d2c-cb06-4ac9-8ff8-d18321c60f4e.png)

Before jumping into History page, user would go through Quote page first. User can see a table for the daily price of each stock. User can use the search bar to search the stock by symbol.

![image](https://user-images.githubusercontent.com/115144351/203474103-858e8f28-9008-4a7a-a4cc-365dc52f2ebc.png)

After selecting a stock symbol, user will go to History page. Here, user can check open, high, low, close and volume for the latest 100 days. User can use the DatePicker to choose the date to see the change, and user can clear the date by pressing the reset button. We can also see each price individually on graph by unselecting the box above the graph.

![image](https://user-images.githubusercontent.com/115144351/203474144-4ec4f8a6-f2ad-4db4-a9ad-d13995cf3365.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
