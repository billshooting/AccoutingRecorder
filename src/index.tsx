import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import { thunkMiddleware } from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import configReducer from './reducers/config/configIndexReducer';
import './index.css';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    config: configReducer,
    route: routerReducer
  }),
  applyMiddleware(routeMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App location={history.location} store={store} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
