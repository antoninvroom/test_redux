import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import AppContainer from './containers/AppContainer';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);

persistStore(store, { storage: AsyncStorage });

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
