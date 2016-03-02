import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
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

ReactDOM.render((
  <Router history={browserHistory}>
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
), document.getElementById('root'));
