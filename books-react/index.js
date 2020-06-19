/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import VisibleApp from './screens/VisibleApp';
import { name as appName } from './app.json.js';
import store from './store'

// const WhateverYouWantToCallMe = StackNavigator({
//     Home: { screen: HomeScreen }, //Default entry screen
//   });

const Wrap = () => {
    return (
        // <React.StrictMode>
            <Provider store={store}>
                <VisibleApp />
            </Provider>
        // </React.StrictMode>
    )
}

console.log('index-run')

AppRegistry.registerComponent(appName, () => Wrap);





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import VisibleApp from './containers/VisibleApp';

// import store from './app/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <VisibleApp />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


