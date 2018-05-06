import React from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './createStore';

/*
  All redux applications are wrapped around a <Provider />, which can be thought of as a container object
  holding the entire Redux store.
*/

// To see all the requests in the chrome Dev tools in the network tab.
if (process.env.NODE_ENV === 'development') {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
  Expo.KeepAwake.activate();
}

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

Expo.registerRootComponent(App);
export default App;
