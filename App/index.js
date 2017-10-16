import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './AppNavigator';
import store from './createStore';

/*
  All redux applications are wrapped around a <Provider />, which can be thought of as a container object
  holding the entire Redux store.
*/

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
