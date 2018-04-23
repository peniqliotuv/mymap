import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './createStore';

/*
  All redux applications are wrapped around a <Provider />, which can be thought of as a container object
  holding the entire Redux store.
*/

// To see all the requests in the chrome Dev tools in the network tab.
if (process.env.NODE_ENV === 'development') {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;
  // fetch logger
  // global._fetch = fetch;
  // global.fetch = function (uri, options, ...args) {
  //   return global._fetch(uri, options, ...args).then((response) => {
  //     // console.log('Fetch', { request: { uri, options, ...args }, response });
  //     return response;
  //   });
  // };
}


const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
