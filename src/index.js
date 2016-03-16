import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

import appReducer from './reducers/appReducer';
// import weekReducer from './reducers/weekReducer';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    app: appReducer,
    // week: weekReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

import App from './App';

// Auth
import UserSignUp from './app/auth/UserSignUp';
import UserSignIn from './app/auth/UserSignIn';

// Landing page
import Home from './app/Home';

// Weeks
import Weeks from './app/Weeks';
import Week from './app/weeks/Week';

// Topics
import Topics from './app/Topics';
import Topic from './app/topics/Topic';

// Articles
import Articles from './app/Articles';
import Article from './app/articles/Article';

// Static pages
import About from './app/pages/About';

// Error pages
import PageNotFound from './errors/PageNotFound';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/weeks" component={Weeks}/>
        <Route path="/weeks/:weekId" component={Week}/>

        <Route path="/weeks/:weekId/topics/:topicId" component={Topic} />
        <Route path="/weeks/:weekId/topics/:topicId/article/:articleId" component={Article}/>

        <Route path="/users/sign-up" component={UserSignUp}/>
        <Route path="/users/sign-in" component={UserSignIn}/>

        <Route path="/about" component={About}/>
        <Route path="*" component={PageNotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
