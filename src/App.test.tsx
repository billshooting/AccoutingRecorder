import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import App from '../src/App';

it('renders without crashing', () => {
  const history = createHistory();
  const middleware = routerMiddleware(history);
  const store = createStore(
    combineReducers({
      route: routerReducer
    }),
    applyMiddleware(middleware)
  );
  const div = document.createElement('div');
  ReactDOM.render(  
    (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App location={history.location} store={store} />
      </ConnectedRouter>
  </Provider>),
    div);
});
